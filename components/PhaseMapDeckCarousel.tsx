"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface PhaseMapDeckSlide {
  filename: string;
  title: string;
  caption: string;
  alt: string;
  width: number;
  height: number;
}

interface PhaseMapDeckCarouselProps {
  slides: PhaseMapDeckSlide[];
}

export default function PhaseMapDeckCarousel({
  slides,
}: PhaseMapDeckCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [settledIndex, setSettledIndex] = useState(0);
  const [announcement, setAnnouncement] = useState("");

  const trackRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const prevButtonRef = useRef<HTMLButtonElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);

  const activeIndexRef = useRef(0);
  const previousSettledRef = useRef(0);
  const pendingTargetIndexRef = useRef<number | null>(null);
  const pendingFromScrollLeftRef = useRef<number | null>(null);
  const rafIdRef = useRef<number | null>(null);
  const settleTimerRef = useRef<number | null>(null);

  const getDeltaToSlide = useCallback((index: number): number => {
    const track = trackRef.current;
    const slideEl = slideRefs.current[index];
    if (!track || !slideEl) return 0;

    const trackRect = track.getBoundingClientRect();
    const slideRect = slideEl.getBoundingClientRect();
    const slideCenter = slideRect.left + slideRect.width / 2;
    const trackCenter = trackRect.left + trackRect.width / 2;
    return slideCenter - trackCenter;
  }, []);

  const getNearestSlideIndex = useCallback((): number => {
    const track = trackRef.current;
    if (!track) return 0;

    const trackRect = track.getBoundingClientRect();
    const trackCenter = trackRect.left + trackRect.width / 2;

    let nearestIdx = 0;
    let smallestDistance = Number.POSITIVE_INFINITY;

    for (let i = 0; i < slides.length; i += 1) {
      const slideEl = slideRefs.current[i];
      if (!slideEl) continue;
      const slideRect = slideEl.getBoundingClientRect();
      const slideCenter = slideRect.left + slideRect.width / 2;
      const distance = Math.abs(slideCenter - trackCenter);
      if (distance < smallestDistance) {
        smallestDistance = distance;
        nearestIdx = i;
      }
    }

    return nearestIdx;
  }, [slides.length]);

  const finalizeSettle = useCallback(() => {
    const settled = getNearestSlideIndex();

    if (activeIndexRef.current !== settled) {
      activeIndexRef.current = settled;
      setActiveIndex(settled);
    }

    if (settled === 0 && document.activeElement === prevButtonRef.current) {
      nextButtonRef.current?.focus();
    } else if (
      settled === slides.length - 1 &&
      document.activeElement === nextButtonRef.current
    ) {
      prevButtonRef.current?.focus();
    }

    setSettledIndex(settled);

    if (settled !== previousSettledRef.current) {
      previousSettledRef.current = settled;
      setAnnouncement(`Slide ${settled + 1} of ${slides.length}`);
    }
  }, [getNearestSlideIndex, slides.length]);

  const handleSettleEvent = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const pendingTarget = pendingTargetIndexRef.current;
    const pendingFrom = pendingFromScrollLeftRef.current;

    if (pendingTarget !== null) {
      // Ignore stale settle events emitted at the exact scroll position where a new scroll was requested.
      if (
        pendingFrom !== null &&
        Math.abs(track.scrollLeft - pendingFrom) < 1
      ) {
        return;
      }

      // Ignore scrollend belonging to an interrupted earlier scroll while a newer target scroll is still mid-flight.
      const nearest = getNearestSlideIndex();
      if (
        nearest !== pendingTarget &&
        Math.abs(getDeltaToSlide(pendingTarget)) > 4
      ) {
        return;
      }
    }

    pendingTargetIndexRef.current = null;
    pendingFromScrollLeftRef.current = null;
    finalizeSettle();
  }, [finalizeSettle, getDeltaToSlide, getNearestSlideIndex]);

  const scrollToSlide = useCallback(
    (targetIndex: number) => {
      const track = trackRef.current;
      if (!track) return;

      const clamped = Math.max(0, Math.min(slides.length - 1, targetIndex));
      const delta = getDeltaToSlide(clamped);

      activeIndexRef.current = clamped;
      setActiveIndex(clamped);

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (Math.abs(delta) < 1) {
        pendingTargetIndexRef.current = null;
        pendingFromScrollLeftRef.current = null;
        finalizeSettle();
        return;
      }

      pendingTargetIndexRef.current = clamped;
      pendingFromScrollLeftRef.current = track.scrollLeft;

      track.scrollBy({
        left: delta,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });

      if (prefersReducedMotion && Math.abs(getDeltaToSlide(clamped)) < 2) {
        pendingTargetIndexRef.current = null;
        pendingFromScrollLeftRef.current = null;
        finalizeSettle();
      }
    },
    [finalizeSettle, getDeltaToSlide, slides.length]
  );

  const stepSlide = useCallback(
    (direction: -1 | 1) => {
      const baseIndex =
        pendingTargetIndexRef.current !== null
          ? pendingTargetIndexRef.current
          : getNearestSlideIndex();
      const targetIndex = Math.max(
        0,
        Math.min(slides.length - 1, baseIndex + direction)
      );
      scrollToSlide(targetIndex);
    },
    [getNearestSlideIndex, scrollToSlide, slides.length]
  );

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const supportsScrollEnd = "onscrollend" in window;

    const cancelPendingOnManualInput = () => {
      pendingTargetIndexRef.current = null;
      pendingFromScrollLeftRef.current = null;
    };

    const onTrackKeyDown = (e: KeyboardEvent) => {
      if (e.target !== track) return;
      if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        cancelPendingOnManualInput();
      }
    };

    const onScroll = () => {
      if (rafIdRef.current === null) {
        rafIdRef.current = window.requestAnimationFrame(() => {
          rafIdRef.current = null;

          // Skip live recomputation while a scripted smooth scroll has a pending target.
          if (pendingTargetIndexRef.current !== null) return;

          const nearest = getNearestSlideIndex();
          if (nearest !== activeIndexRef.current) {
            activeIndexRef.current = nearest;
            setActiveIndex(nearest);
          }
        });
      }

      if (!supportsScrollEnd) {
        if (settleTimerRef.current !== null) {
          window.clearTimeout(settleTimerRef.current);
        }
        settleTimerRef.current = window.setTimeout(() => {
          settleTimerRef.current = null;
          handleSettleEvent();
        }, 120);
      }
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    track.addEventListener("pointerdown", cancelPendingOnManualInput, {
      passive: true,
    });
    track.addEventListener("touchstart", cancelPendingOnManualInput, {
      passive: true,
    });
    track.addEventListener("wheel", cancelPendingOnManualInput, {
      passive: true,
    });
    track.addEventListener("keydown", onTrackKeyDown);

    if (supportsScrollEnd) {
      track.addEventListener("scrollend", handleSettleEvent);
    }

    return () => {
      track.removeEventListener("scroll", onScroll);
      track.removeEventListener("pointerdown", cancelPendingOnManualInput);
      track.removeEventListener("touchstart", cancelPendingOnManualInput);
      track.removeEventListener("wheel", cancelPendingOnManualInput);
      track.removeEventListener("keydown", onTrackKeyDown);

      if (supportsScrollEnd) {
        track.removeEventListener("scrollend", handleSettleEvent);
      }
      if (rafIdRef.current !== null) {
        window.cancelAnimationFrame(rafIdRef.current);
      }
      if (settleTimerRef.current !== null) {
        window.clearTimeout(settleTimerRef.current);
      }
    };
  }, [getNearestSlideIndex, handleSettleEvent]);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Director and Senior Management Presentation Deck"
      className="border-2 border-black bg-white shadow-[4px_4px_0px_#000] rounded-2xl p-4 sm:p-6"
    >
      {/* Controls bar placed before the track in DOM order without absolute positioning */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-4 border-b-2 border-black">
        <div>
          <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">
            Director &amp; SMT Presentation Deck
          </span>
          <p className="text-sm sm:text-base font-bold text-slate-900">
            Slide {activeIndex + 1} of {slides.length}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            ref={prevButtonRef}
            type="button"
            onClick={() => stepSlide(-1)}
            disabled={settledIndex === 0}
            aria-label="Previous slide"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 min-h-[40px] rounded-xl border-2 border-black bg-white text-slate-900 text-sm font-bold shadow-[2px_2px_0px_#000] hover:bg-[#36C5F0]/20 disabled:opacity-45 disabled:shadow-none disabled:hover:bg-white touch-manipulation transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            <ChevronLeft size={16} aria-hidden="true" />
            <span>Previous</span>
          </button>
          <button
            ref={nextButtonRef}
            type="button"
            onClick={() => stepSlide(1)}
            disabled={settledIndex === slides.length - 1}
            aria-label="Next slide"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 min-h-[40px] rounded-xl border-2 border-black bg-white text-slate-900 text-sm font-bold shadow-[2px_2px_0px_#000] hover:bg-[#36C5F0]/20 disabled:opacity-45 disabled:shadow-none disabled:hover:bg-white touch-manipulation transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            <span>Next</span>
            <ChevronRight size={16} aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Scroll-snap track */}
      <div
        ref={trackRef}
        tabIndex={0}
        role="group"
        aria-label="Slides"
        className="phase-map-carousel-track pb-2 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        {slides.map((slide, index) => (
          <div
            key={slide.filename}
            ref={(el) => {
              slideRefs.current[index] = el;
            }}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${slides.length}`}
            className="phase-map-carousel-slide"
          >
            <div className="border-2 border-black bg-white rounded-xl overflow-hidden flex flex-col">
              <div className="bg-slate-50 flex items-center justify-center">
                <Image
                  src={`/images/phase-map/${slide.filename}`}
                  alt={slide.alt}
                  width={slide.width}
                  height={slide.height}
                  sizes="(max-width: 896px) 100vw, 800px"
                  fetchPriority={index > 0 ? "low" : undefined}
                  loading={index > 0 ? "lazy" : undefined}
                  className="w-full h-auto block object-contain bg-white"
                />
              </div>
              <div className="border-t-2 border-black bg-slate-50 px-4 py-3 flex flex-col gap-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-sm font-bold text-slate-900">
                    {slide.title}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border border-black bg-[#36C5F0]/20 text-slate-900">
                    Slide {index + 1} / {slides.length}
                  </span>
                </div>
                <p className="text-sm text-slate-700 leading-snug">
                  {slide.caption}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Visually hidden polite live status region, silent on initial load */}
      <p className="sr-only" role="status" aria-live="polite">
        {announcement}
      </p>

      {/* Slide markers */}
      <nav
        aria-label="Choose a slide"
        className="mt-4 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-center gap-2"
      >
        {slides.map((slide, index) => {
          const isActive = activeIndex === index;
          return (
            <button
              key={slide.filename}
              type="button"
              onClick={() => scrollToSlide(index)}
              aria-current={isActive ? "true" : undefined}
              aria-label={`Go to slide ${index + 1}: ${slide.title}`}
              className={`min-h-[28px] h-8 rounded-lg border-2 border-black text-xs touch-manipulation transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${
                isActive
                  ? "min-w-[44px] px-3 bg-[#36C5F0] text-black font-extrabold shadow-[3px_3px_0px_#000] scale-105"
                  : "min-w-[28px] px-2 bg-white text-slate-800 font-semibold hover:bg-slate-100"
              }`}
            >
              {index + 1}
            </button>
          );
        })}
      </nav>
    </section>
  );
}

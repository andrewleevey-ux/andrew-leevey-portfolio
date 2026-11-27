"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SlideItem {
  src: string;
  alt: string;
}

const SLIDES: SlideItem[] = [
  {
    src: "/images/phase-map/Slide1pm.jpeg",
    alt: "Senior management presentation slide 1: The Phase Map title and overview",
  },
  {
    src: "/images/phase-map/Slide3pm.jpeg",
    alt: "Senior management presentation slide 2: Project goals and journey context",
  },
  {
    src: "/images/phase-map/Slide4pm.jpeg",
    alt: "Senior management presentation slide 3: Mapping the core customer journey",
  },
  {
    src: "/images/phase-map/Slide5pm.jpeg",
    alt: "Senior management presentation slide 4: Colour-coded phases and structure",
  },
  {
    src: "/images/phase-map/Slide6pm.jpeg",
    alt: "Senior management presentation slide 5: Swimlanes and user research findings",
  },
  {
    src: "/images/phase-map/Slide7pm.jpeg",
    alt: "Senior management presentation slide 6: Introducing the Phase KPI Cards",
  },
  {
    src: "/images/phase-map/Slide8pm.jpeg",
    alt: "Senior management presentation slide 7: Phase KPI Card anatomy and anchors",
  },
  {
    src: "/images/phase-map/Slide9pm.jpeg",
    alt: "Senior management presentation slide 8: Connecting user goals and business KPIs",
  },
  {
    src: "/images/phase-map/Slide10pm.jpeg",
    alt: "Senior management presentation slide 9: Applying Phase KPI Cards across teams",
  },
  {
    src: "/images/phase-map/Slide11pm.jpeg",
    alt: "Senior management presentation slide 10: Prioritising friction and CRO experiments",
  },
  {
    src: "/images/phase-map/Slide12pm.jpeg",
    alt: "Senior management presentation slide 11: Embedding Testing Tuesdays across departments",
  },
  {
    src: "/images/phase-map/Slide13pm.jpeg",
    alt: "Senior management presentation slide 12: Next steps and ongoing roadmap",
  },
];

export default function PhaseMapSlideDeck() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const prevButtonRef = useRef<HTMLButtonElement | null>(null);
  const nextButtonRef = useRef<HTMLButtonElement | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [announcement, setAnnouncement] = useState("");

  const activeIndexRef = useRef(0);
  const lastSettledIndexRef = useRef(0);
  const pendingTargetRef = useRef<number | null>(null);
  const scrollOriginLeftRef = useRef<number | null>(null);
  const rafIdRef = useRef<number | null>(null);
  const settleTimerRef = useRef<number | null>(null);

  const getNearestSlideIndex = useCallback((): number => {
    const track = trackRef.current;
    if (!track) return 0;

    const trackRect = track.getBoundingClientRect();
    const trackCenter = trackRect.left + trackRect.width / 2;

    let nearestIndex = 0;
    let smallestDistance = Number.POSITIVE_INFINITY;

    for (let i = 0; i < SLIDES.length; i++) {
      const slide = slideRefs.current[i];
      if (!slide) continue;
      const slideRect = slide.getBoundingClientRect();
      const slideCenter = slideRect.left + slideRect.width / 2;
      const distance = Math.abs(slideCenter - trackCenter);

      if (distance < smallestDistance) {
        smallestDistance = distance;
        nearestIndex = i;
      }
    }

    return nearestIndex;
  }, []);

  const redirectFocusIfDisabled = useCallback((settledIndex: number) => {
    if (
      settledIndex === 0 &&
      document.activeElement === prevButtonRef.current
    ) {
      nextButtonRef.current?.focus();
    } else if (
      settledIndex === SLIDES.length - 1 &&
      document.activeElement === nextButtonRef.current
    ) {
      prevButtonRef.current?.focus();
    }
  }, []);

  const handleSettle = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const nearest = getNearestSlideIndex();

    // Ignore a settle event belonging to an earlier scroll when a new target has yet to move.
    if (
      pendingTargetRef.current !== null &&
      scrollOriginLeftRef.current !== null &&
      nearest !== pendingTargetRef.current &&
      Math.abs(track.scrollLeft - scrollOriginLeftRef.current) < 1
    ) {
      return;
    }

    pendingTargetRef.current = null;
    scrollOriginLeftRef.current = null;

    if (nearest !== activeIndexRef.current) {
      activeIndexRef.current = nearest;
      setActiveIndex(nearest);
    }

    if (nearest !== lastSettledIndexRef.current) {
      lastSettledIndexRef.current = nearest;
      setAnnouncement(`Slide ${nearest + 1} of ${SLIDES.length}`);
      redirectFocusIfDisabled(nearest);
    }
  }, [getNearestSlideIndex, redirectFocusIfDisabled]);

  const scrollToSlide = useCallback(
    (targetIndex: number) => {
      const clamped = Math.max(0, Math.min(SLIDES.length - 1, targetIndex));
      const track = trackRef.current;
      const targetSlide = slideRefs.current[clamped];
      if (!track || !targetSlide) return;

      const trackRect = track.getBoundingClientRect();
      const slideRect = targetSlide.getBoundingClientRect();
      const delta =
        slideRect.left +
        slideRect.width / 2 -
        (trackRect.left + trackRect.width / 2);

      pendingTargetRef.current = clamped;
      scrollOriginLeftRef.current = track.scrollLeft;

      if (clamped !== activeIndexRef.current) {
        activeIndexRef.current = clamped;
        setActiveIndex(clamped);
      }

      if (Math.abs(delta) < 1) {
        handleSettle();
        return;
      }

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      track.scrollBy({
        left: delta,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });

      if (prefersReducedMotion) {
        // Ensure settle runs immediately when motion is reduced and scrollend may be skipped or instant.
        window.requestAnimationFrame(() => {
          handleSettle();
        });
      }
    },
    [handleSettle]
  );

  const handleStep = useCallback(
    (direction: -1 | 1) => {
      const baseIndex = pendingTargetRef.current ?? getNearestSlideIndex();
      scrollToSlide(baseIndex + direction);
    },
    [getNearestSlideIndex, scrollToSlide]
  );

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const supportsScrollEnd = "onscrollend" in window;

    const onScroll = () => {
      if (pendingTargetRef.current === null && rafIdRef.current === null) {
        rafIdRef.current = window.requestAnimationFrame(() => {
          rafIdRef.current = null;
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
          handleSettle();
        }, 150);
      }
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    if (supportsScrollEnd) {
      track.addEventListener("scrollend", handleSettle);
    }

    return () => {
      track.removeEventListener("scroll", onScroll);
      if (supportsScrollEnd) {
        track.removeEventListener("scrollend", handleSettle);
      }
      if (rafIdRef.current !== null) {
        window.cancelAnimationFrame(rafIdRef.current);
      }
      if (settleTimerRef.current !== null) {
        window.clearTimeout(settleTimerRef.current);
      }
    };
  }, [getNearestSlideIndex, handleSettle]);

  const isFirst = activeIndex === 0;
  const isLast = activeIndex === SLIDES.length - 1;

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Senior and director presentation slides"
      className="my-8"
    >
      <div className="flex items-center justify-between gap-4 mb-3">
        <p className="text-sm font-medium text-slate-600 tabular-nums" aria-hidden="true">
          Slide <span className="text-slate-900 font-semibold">{activeIndex + 1}</span> / {SLIDES.length}
        </p>

        <div className="flex items-center gap-2">
          <button
            ref={prevButtonRef}
            type="button"
            disabled={isFirst}
            onClick={() => handleStep(-1)}
            className="inline-flex items-center justify-center gap-1.5 min-h-[36px] min-w-[44px] bg-white border border-slate-200 rounded-full pl-3 pr-3.5 py-1.5 text-sm font-medium text-slate-900 hover:bg-slate-50 transition-colors touch-manipulation disabled:opacity-40 disabled:hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
          >
            <ChevronLeft size={16} aria-hidden="true" />
            <span>
              Previous<span className="sr-only"> slide</span>
            </span>
          </button>

          <button
            ref={nextButtonRef}
            type="button"
            disabled={isLast}
            onClick={() => handleStep(1)}
            className="inline-flex items-center justify-center gap-1.5 min-h-[36px] min-w-[44px] bg-white border border-slate-200 rounded-full pl-3.5 pr-3 py-1.5 text-sm font-medium text-slate-900 hover:bg-slate-50 transition-colors touch-manipulation disabled:opacity-40 disabled:hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
          >
            <span>
              Next<span className="sr-only"> slide</span>
            </span>
            <ChevronRight size={16} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        tabIndex={0}
        role="group"
        aria-label="Presentation slides"
        className="flex overflow-x-auto snap-x snap-mandatory overscroll-x-contain touch-manipulation motion-safe:scroll-smooth rounded-xl bg-white border border-slate-200/80 shadow-sm [scrollbar-width:none] [&::-webkit-scrollbar]:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
      >
        {SLIDES.map((slide, index) => (
          <div
            key={slide.src}
            ref={(el) => {
              slideRefs.current[index] = el;
            }}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${SLIDES.length}`}
            className="flex-[0_0_100%] w-full snap-center"
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              width={960}
              height={540}
              sizes="(max-width: 768px) 100vw, 720px"
              className="w-full h-auto object-contain"
            />
          </div>
        ))}
      </div>

      <p className="sr-only" role="status" aria-live="polite">
        {announcement}
      </p>

      <nav
        aria-label="Choose a presentation slide"
        className="mt-4 flex flex-wrap items-center justify-center gap-1"
      >
        {SLIDES.map((slide, index) => {
          const isCurrent = index === activeIndex;
          return (
            <button
              key={slide.src}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              aria-current={isCurrent ? "true" : undefined}
              onClick={() => scrollToSlide(index)}
              className="inline-flex items-center justify-center min-w-[24px] min-h-[24px] p-1 rounded-full touch-manipulation focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900"
            >
              <span
                aria-hidden="true"
                className={
                  isCurrent
                    ? "block h-2 w-5 rounded-full bg-slate-900 ring-1 ring-slate-900 transition-all"
                    : "block h-2 w-2 rounded-full bg-slate-400 hover:bg-slate-600 transition-all"
                }
              />
            </button>
          );
        })}
      </nav>
    </section>
  );
}

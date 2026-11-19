"use client";

import { ArrowUp } from "lucide-react";

export default function BackToTopButton() {
  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="inline-flex items-center justify-center gap-2 bg-white border-2 border-black shadow-[3px_3px_0px_#000] rounded-full px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-100 touch-manipulation transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
      <span>Back to top</span>
      <ArrowUp size={16} aria-hidden="true" />
    </button>
  );
}

"use client";

import Link from "next/link";
import { ChevronLeft, ArrowUp } from "lucide-react";

export default function CaseStudyBottomNav() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      aria-label="Case study navigation"
      className="flex items-center justify-between mt-16 mb-8 pt-8 border-t border-slate-200"
    >
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full pr-4 pl-3 py-2 text-sm font-medium hover:bg-slate-50 transition-colors"
      >
        <ChevronLeft size={16} /> Back
      </Link>

      <button
        type="button"
        onClick={scrollToTop}
        className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full pl-4 pr-3 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50 transition-colors"
      >
        Back to the top <ArrowUp size={16} />
      </button>
    </nav>
  );
}

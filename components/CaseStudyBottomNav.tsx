"use client";

import { ArrowUp } from "lucide-react";
import CaseStudyBackLink, { DEFAULT_CASE_STUDY_BACK_HREF } from "./CaseStudyBackLink";

interface CaseStudyBottomNavProps {
  backHref?: string;
}

export default function CaseStudyBottomNav({
  backHref = DEFAULT_CASE_STUDY_BACK_HREF,
}: CaseStudyBottomNavProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      aria-label="Case study navigation"
      className="flex items-center justify-between mt-16 mb-8 pt-8 border-t border-slate-200"
    >
      <CaseStudyBackLink href={backHref} />

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

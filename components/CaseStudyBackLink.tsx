import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export const DEFAULT_CASE_STUDY_BACK_HREF = "/#case-studies";

interface CaseStudyBackLinkProps {
  href?: string;
  className?: string;
}

export default function CaseStudyBackLink({
  href = DEFAULT_CASE_STUDY_BACK_HREF,
  className = "",
}: CaseStudyBackLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full pr-4 pl-3 py-2 text-sm font-medium hover:bg-slate-50 transition-colors ${className}`.trim()}
    >
      <ChevronLeft size={16} /> Back
    </Link>
  );
}

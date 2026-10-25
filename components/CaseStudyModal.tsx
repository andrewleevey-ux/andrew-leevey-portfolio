"use client";

import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";

interface CaseStudyModalProps {
  activeCaseStudy: string | null;
  onClose: () => void;
}

export default function CaseStudyModal({ activeCaseStudy, onClose }: CaseStudyModalProps) {
  if (!activeCaseStudy) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl flex flex-col font-sans text-slate-900 leading-[1.15]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button Hovering Over Image */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/80 hover:bg-white text-slate-900 rounded-full shadow-md backdrop-blur-sm transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Hero Image */}
        <div className="relative w-full h-64 sm:h-80 md:h-96">
          <Image
            src="/images/06-uxdoc-full.jpg"
            alt="Case Study Document"
            fill
            className="object-cover rounded-t-3xl"
          />
        </div>

        {/* Content Area */}
        <div className="p-6 sm:p-8 flex flex-col gap-4">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight leading-tight mb-2" style={{ letterSpacing: '-0.03em', lineHeight: 1.15 }}>
            Iterative CRO strategy: Checkout Delivery
          </h2>

          <p className="text-sm md:text-base text-slate-600">
            As the Lead Product Designer, I collaborated closely with my PM and key stakeholders to deliver tangible commercial value. By identifying targeted CRO testing opportunities within the checkout, we boosted the adoption of high-margin delivery options and drove a significant uplift in key metrics.
          </p>




          <div className="mt-1">
            <h3 className="text-sm font-bold mb-2">Key Highlights</h3>
            <ul className="list-disc pl-6 text-sm text-slate-700 flex flex-col space-y-1">
              <li>Led end-to-end discovery and stakeholder alignment</li>
              <li>Applied a Lean UX &quot;test and learn&quot; methodology</li>
              <li>Increased conversion rate on the delivery page</li>
              <li>Winning experiment moved directly into implementation</li>
            </ul>
          </div>


          {/* Bottom Action Bar */}
          <div className="flex gap-4 mt-8 pt-6 border-t border-slate-100">
            <Link
              href={`/case-studies/${activeCaseStudy}`}
              onClick={onClose}
              className="bg-slate-900 text-white rounded-full px-6 py-3 font-medium hover:bg-slate-800 transition-colors"
            >
              Read full case study -&gt;
            </Link>
            <button
              onClick={onClose}
              className="bg-slate-100 text-slate-700 rounded-full px-6 py-3 font-medium hover:bg-slate-200 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

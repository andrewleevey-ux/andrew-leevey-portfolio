"use client";

import Link from "next/link";
import { X } from "lucide-react";

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CaseStudyModal({ isOpen, onClose }: CaseStudyModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl flex flex-col font-sans text-slate-900 leading-[1.15] p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 hover:bg-slate-100 text-slate-900 rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Content Area */}
        <div className="flex flex-col gap-6 mt-4">
          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-medium tracking-tight mb-2" style={{ letterSpacing: '-0.03em', lineHeight: 1.15 }}>
            Iterative CRO Strategy: Checkout Delivery
          </h2>

          <p className="text-lg text-slate-700">
            The brief for this project was simply &apos;Simplify delivery&apos;. As an online retailer this is a crucial step towards the customer completing the purchase and we are always looking for ways to make the checkout process easier. With peak trading fast approaching, we needed to move at pace. Our goal: reduce checkout friction and formulate high-impact hypotheses to simplify delivery before the busiest time of the year.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-2">
            <div>
              <h3 className="text-xl font-medium mb-4">Project goals</h3>
              <ul className="list-disc pl-6 text-lg text-slate-700 flex flex-col gap-2">
                <li>Increase adoption of higher-margin delivery options (Next Day delivery)</li>
                <li>Create testable hypothesis</li>
                <li>Deliver at pace to support peak trading</li>
                <li>Lean UX test and learn approach</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">Deliverables</h3>
              <ul className="list-disc pl-6 text-lg text-slate-700 flex flex-col gap-2">
                <li>Discovery planning &amp; supporting Miro board</li>
                <li>A Design supported by everyone</li>
                <li>Miro board with clear recommendations</li>
                <li>Responsive Figma designs</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">Outcomes</h3>
              <ul className="list-disc pl-6 text-lg text-slate-700 flex flex-col gap-2">
                <li>Two hypothesis based CRO tests</li>
                <li>Iterative vision and single test approaches</li>
                <li>Delivery page conversion increase</li>
                <li>Winning experiment moved to implementation track</li>
              </ul>
            </div>
          </div>

          {/* Bottom Action Bar */}
          <div className="flex gap-4 mt-8 pt-6 border-t border-slate-100">
            <Link
              href="#"
              onClick={onClose}
              className="bg-slate-900 text-white rounded-full px-6 py-3 font-medium hover:bg-slate-800 transition-colors"
            >
              Read full case study -&gt;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

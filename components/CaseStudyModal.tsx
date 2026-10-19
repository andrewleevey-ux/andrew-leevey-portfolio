"use client";

import Image from "next/image";
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
            Iterative CRO Strategy: Checkout Delivery
          </h2>

          <p className="text-sm md:text-base text-slate-600">
            The brief for this project was simply &apos;Simplify delivery&apos;. As an online retailer this is a crucial step towards the customer completing the purchase and we are always looking for ways to make the checkout process easier. With peak trading fast approaching, we needed to move at pace. Our goal: reduce checkout friction and formulate high-impact hypotheses to simplify delivery before the busiest time of the year.
          </p>

          <div className="mt-1">
            <h3 className="text-base font-semibold mb-2">Project goals</h3>
            <ul className="list-disc pl-6 text-sm md:text-base text-slate-700 flex flex-col space-y-1">
              <li>Increase adoption of higher-margin delivery options (Next Day delivery)</li>
              <li>Create testable hypothesis</li>
              <li>Deliver at pace to support peak trading</li>
              <li>Lean UX test and learn approach</li>
            </ul>
          </div>

          <div className="mt-1">
            <h3 className="text-base font-semibold mb-2">Deliverables</h3>
            <ul className="list-disc pl-6 text-sm md:text-base text-slate-700 flex flex-col space-y-1">
              <li>Discovery planning &amp; supporting Miro board</li>
              <li>A Design supported by everyone</li>
              <li>Miro board with clear recommendations</li>
              <li>Responsive Figma designs</li>
            </ul>
          </div>

          <div className="mt-1">
            <h3 className="text-base font-semibold mb-2">Outcomes</h3>
            <ul className="list-disc pl-6 text-sm md:text-base text-slate-700 flex flex-col space-y-1">
              <li>Two hypothesis based CRO tests</li>
              <li>Iterative vision and single test approaches</li>
              <li>Delivery page conversion increase</li>
              <li>Winning experiment moved to implementation track</li>
            </ul>
          </div>

          {/* Bottom Action Bar */}
          <div className="flex gap-4 mt-8 pt-6 border-t border-slate-100">
            <Link
              href=""
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

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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
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
        <div className="p-8 sm:p-10 flex flex-col gap-6">
          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-medium tracking-tight mb-2" style={{ letterSpacing: '-0.03em', lineHeight: 1.15 }}>
            Strategic Product Vision
          </h2>

          <p className="text-lg text-slate-700">
            I’ve made it a point to evolve the way I communicate my ideas and research findings to both peers and Senior Management with a, “colleagues are customers too” approach.
          </p>

          <p className="text-lg text-slate-700">
            In this example you&apos;ll see how I took a one liner project brief & turned it into a printed UX evaluation document which resulted in the business decision to not implement a click & collect service.
          </p>

          <div className="mt-2">
            <h3 className="text-xl font-medium mb-4">Outcomes & Deliverables</h3>
            <ul className="list-disc pl-6 text-lg text-slate-700 flex flex-col gap-2">
              <li>Website evaluation</li>
              <li>Customer journey maps</li>
              <li>A custom designed customer journey & empathy map</li>
              <li>Off site (store experience) evaluation</li>
              <li>Printed stakeholder documentation booklet</li>
            </ul>
          </div>

          {/* Bottom Action Bar */}
          <div className="flex gap-4 mt-8 pt-6 border-t border-slate-100">
            <Link
              href="/case-studies/strategic-vision"
              onClick={onClose}
              className="bg-slate-900 text-white rounded-full px-6 py-3 font-medium hover:bg-slate-800 transition-colors"
            >
              See full case study
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

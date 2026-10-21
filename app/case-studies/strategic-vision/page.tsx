import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import GuestCursor from "../../../components/GuestCursor";

export default function CaseStudy() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans text-lg leading-relaxed selection:bg-slate-200 dot-grid pb-24">
      <GuestCursor />

      <main className="max-w-3xl mx-auto px-6 pt-24 pb-32">
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full pr-4 pl-3 py-2 text-sm font-medium hover:bg-slate-50 transition-colors mb-12"
        >
          <ChevronLeft size={16} /> Back
        </Link>

        <h1 className="text-5xl md:text-6xl font-normal text-slate-900 text-center mb-16" style={{ letterSpacing: "-0.03em", lineHeight: 1.15 }}>
          Project Title
        </h1>

        <div className="text-slate-600 text-lg leading-relaxed space-y-8">
          <p className="font-bold text-xl text-slate-800">
            Executive Summary: A brief overview of the project, highlighting the core objectives and the significant impact achieved through our strategic approach.
          </p>

          <section>
            <h2 className="text-slate-900 mb-6" style={{ fontSize: "56px", fontWeight: 400, letterSpacing: "-0.03em", lineHeight: 1.15 }}>
              The Problem
            </h2>
            <p>
              Many organizations struggle with aligning their digital presence with physical operations, leading to disjointed user experiences and operational inefficiencies. This disconnect often manifests in lower conversion rates and increased customer frustration at critical touchpoints.
            </p>
          </section>

          <section>
            <h2 className="text-slate-900 mb-6 mt-16" style={{ fontSize: "56px", fontWeight: 400, letterSpacing: "-0.03em", lineHeight: 1.15 }}>
              The Approach & Methodology
            </h2>
            <p className="mb-4">
              To address these challenges, we implemented a comprehensive methodology centered around user research and iterative design:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Conducting deep-dive stakeholder workshops to align business objectives.</li>
              <li>Executing extensive user research to uncover friction points in the current journey.</li>
              <li>Mapping the end-to-end service blueprint to identify operational bottlenecks.</li>
              <li>Rapid prototyping and iterative testing to validate design hypotheses before full-scale development.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-slate-900 mb-6 mt-16" style={{ fontSize: "56px", fontWeight: 400, letterSpacing: "-0.03em", lineHeight: 1.15 }}>
              Outcomes & Impact
            </h2>
            <p>
              By aligning the digital checkout process with physical door-drop logistics, we created a seamless experience that significantly reduced user friction. This strategic realignment resulted in a measurable increase in conversion rates, improved customer satisfaction scores, and established a scalable framework for future product iterations.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}

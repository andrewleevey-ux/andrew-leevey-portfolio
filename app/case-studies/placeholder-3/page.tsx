import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import GuestCursor from "../../../components/GuestCursor";
import CollaboratorCursor from "../../../components/CollaboratorCursor";

export default function Placeholder3CaseStudy() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans text-lg leading-relaxed selection:bg-slate-200 dot-grid pb-24">
      <GuestCursor />
      <CollaboratorCursor
        name="Lis"
        role="Product"
        color="#10b981"
        pathCoordinates={{
          x: [0, -50, -100, -50, 0],
          y: [0, 50, 0, -50, 0],
        }}
        initialPosition={{ top: "20%", left: "80%" }}
      />

      <main className="max-w-3xl mx-auto px-6 pt-24 pb-32">
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full pr-4 pl-3 py-2 text-sm font-medium hover:bg-slate-50 transition-colors mb-12"
        >
          <ChevronLeft size={16} /> Back
        </Link>

        <h1 className="text-5xl md:text-6xl font-normal text-slate-900 text-center mb-16" style={{ letterSpacing: "-0.03em", lineHeight: 1.15 }}>
          Case Study: Service Ecosystems (Placeholder)
        </h1>

        <div className="text-slate-600 text-lg leading-relaxed space-y-8">
          <p className="font-bold text-xl text-slate-800">
            This is a placeholder page for the third case study. It demonstrates our methodology for mapping end-to-end service ecosystems to identify friction points.
          </p>

          <section>
            <h2 className="text-slate-900 mb-6 mt-16" style={{ fontSize: "56px", fontWeight: 400, letterSpacing: "-0.03em", lineHeight: 1.15 }}>
              The Challenge
            </h2>
            <p>
              Aligning physical and digital touchpoints into one seamless experience.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}

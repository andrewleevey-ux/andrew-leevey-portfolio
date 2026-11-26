import type { Metadata } from "next";
import Image from "next/image";
import GuestCursor from "../../../components/GuestCursor";
import CaseStudyBackLink from "../../../components/CaseStudyBackLink";
import CaseStudyBottomNav from "../../../components/CaseStudyBottomNav";

export const metadata: Metadata = {
  title: "The Phase Map | Andy Leevey",
  description: "End to End Journey Mapping case study at Iceland.",
};

export default function PhaseMapPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans text-lg leading-relaxed selection:bg-slate-200 dot-grid pb-24">
      <GuestCursor />

      <main className="max-w-3xl mx-auto px-6 pt-[10vh] pb-[15vh]">
        <CaseStudyBackLink className="mb-[4vh]" />

        <Image
          src="/images/WTF_flow.jpg"
          alt="The Phase Map"
          width={2400}
          height={1350}
          className="w-full aspect-video object-cover rounded-xl mb-12 shadow-sm"
        />

        <h1 className="mb-8 text-left">
          <span className="block text-lg md:text-xl font-light text-slate-500 mb-2">
            End to End Journey Mapping
          </span>
          <span
            className="block text-4xl md:text-5xl font-bold text-slate-900"
            style={{ letterSpacing: "-0.03em", lineHeight: 1.15 }}
          >
            The Phase Map
          </span>
        </h1>

        <p className="font-bold text-xl text-slate-800 text-left mb-12">
          Stepping in as the UX lead for a newly formed CRO scrum team at Iceland, I created a wall-sized customer journey map to uncover core friction points, build cross-departmental alignment, and inform winning A/B experiments.
        </p>

        <div className="text-slate-600 text-lg leading-relaxed flex flex-col gap-y-[8vh] md:gap-y-[12vh]">
          <section>
            <h2
              className="text-slate-900 mb-6"
              style={{ fontSize: "56px", fontWeight: 400, letterSpacing: "-0.03em", lineHeight: 1.15 }}
            >
              Outcomes overview
            </h2>
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="font-bold text-slate-800 mb-2">Role</h3>
                <p className="text-sm md:text-base">Lead UX Stakeholder (CRO Scrum Team)</p>
              </div>
              <div>
                <h3 className="font-bold text-slate-800 mb-2">Deliverables</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm md:text-base">
                  <li>Digital Phase Map</li>
                  <li>Wall-Mounted Map</li>
                  <li>15 UserZoom Tests</li>
                  <li>Testing Tuesdays</li>
                  <li>Phase KPI Cards</li>
                  <li>SMT Presentation</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-slate-800 mb-2">Headline Impact</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm md:text-base">
                  <li>+4.81% Registration CR</li>
                  <li>+3.22% Registration Rate</li>
                  <li>+1.7% Mobile CR</li>
                  <li>+1.4% Revenue per User</li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-purple-900 bg-purple-100 p-6 rounded-r-md shadow-sm mt-12">
              <strong className="block text-purple-900 font-semibold mb-2">North Star</strong>
              <blockquote className="text-slate-700 italic text-sm md:text-base">
                &ldquo;If we get our core journey right, we&rsquo;ll have a solid base to iterate and grow.&rdquo;
              </blockquote>
            </div>
          </section>
        </div>

        <CaseStudyBottomNav />
      </main>
    </div>
  );
}

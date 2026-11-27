import type { Metadata } from "next";
import Image from "next/image";
import GuestCursor from "../../../components/GuestCursor";
import CaseStudyBackLink from "../../../components/CaseStudyBackLink";
import CaseStudyBottomNav from "../../../components/CaseStudyBottomNav";
import PhaseMapSlideDeck from "../../../components/PhaseMapSlideDeck";

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
          priority
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

          <section>
            <h2
              className="text-slate-900 mb-6"
              style={{ fontSize: "56px", fontWeight: 400, letterSpacing: "-0.03em", lineHeight: 1.15 }}
            >
              The Challenge &amp; Goals
            </h2>
            <p className="mb-4">
              Every worthwhile UX initiative starts with a clear problem to solve. Mine was stepping in to lead and inform user experience opportunities within a newly formed CRO scrum team at Iceland. To prioritise the right experiments rather than guessing at isolated page tweaks, we needed a shared, evidence-led view of where shoppers were genuinely struggling.
            </p>
            <p className="mb-4">
              I framed the work around four core goals:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Lead as the UX stakeholder within the newly formed CRO scrum team</li>
              <li>Better understand our users&rsquo; core end-to-end journey</li>
              <li>Know our problem areas with confidence backed by real customer evidence</li>
              <li>Build wider team consensus and visibility across the business</li>
            </ul>
            <p className="mb-8">
              Because the scope was ambitious, I started by documenting a living Milestones document in Google Docs—capturing key goals, concrete actions, and half-formed ideas I knew would become useful later. It kept me goal-focused throughout delivery while giving my direct reports a clear window into the overall vision. That lightweight practice proved so effective that it has stayed a permanent fixture in my toolkit ever since.
            </p>

            <figure className="my-8">
              <Image
                src="/images/phase-map/intro_image2.png"
                alt="High-level visual overview breaking the core customer journey into distinct user phases"
                width={1726}
                height={420}
                sizes="(max-width: 768px) 100vw, 720px"
                className="w-full h-auto object-contain rounded-xl shadow-sm bg-white border border-slate-200/60"
              />
              <figcaption className="mt-3 text-sm text-slate-500 text-center">
                Breaking the core customer journey into goal-oriented phases to anchor CRO discovery.
              </figcaption>
            </figure>
          </section>

          <section>
            <h2
              className="text-slate-900 mb-6"
              style={{ fontSize: "56px", fontWeight: 400, letterSpacing: "-0.03em", lineHeight: 1.15 }}
            >
              Mapping It Out (From Paper to Digital)
            </h2>
            <p className="mb-4">
              I began on paper, walking the entire live site step by step alongside Iceland&rsquo;s in-house QA team. Pairing my own end-to-end walkthrough with QA&rsquo;s deep knowledge of edge cases ensured no hidden screens, states, or transitions were missed before anything moved into digital form.
            </p>

            <aside className="border-l-4 border-purple-900 bg-purple-100 p-6 rounded-r-md shadow-sm my-10">
              <strong className="block text-purple-900 font-semibold mb-2">Quick aside</strong>
              <p className="text-slate-700 italic text-sm md:text-base">
                Mapping the journey forces you to question where a customer&rsquo;s experience truly starts and ends. Including Acquisition and Retention not only showed why users arrive and return, but opened doors to collaborate with departments UX wouldn&rsquo;t otherwise touch.
              </p>
            </aside>

            <h3 className="text-2xl font-bold text-slate-800 mb-4 mt-10">
              Making It a Living Tool (Swimlanes)
            </h3>
            <p className="mb-4">
              Mapping the journey alone wasn&rsquo;t enough to solve the problem. A static diagram quickly becomes wall wallpaper; I needed a functional tool that could evolve alongside our understanding of customer friction.
            </p>
            <p className="mb-8">
              To make that happen, I structured three dedicated feedback swimlanes directly underneath the journey. As research insights came in, the team could apply them onto the relevant phase using post-it notes—making clusters of customer friction impossible to miss at a glance.
            </p>

            <figure className="my-8">
              <Image
                src="/images/phase-map/swimlane-overview-empty.png"
                alt="Empty feedback swimlane template positioned beneath the customer journey phases"
                width={1400}
                height={738}
                sizes="(max-width: 768px) 100vw, 720px"
                className="w-full h-auto object-contain rounded-xl shadow-sm bg-white border border-slate-200/60"
              />
              <figcaption className="mt-3 text-sm text-slate-500 text-center">
                Three feedback swimlanes anchored beneath the journey phases to capture live user insights.
              </figcaption>
            </figure>

            <aside className="border-l-4 border-purple-900 bg-purple-100 p-6 rounded-r-md shadow-sm my-10">
              <strong className="block text-purple-900 font-semibold mb-2">Quick aside</strong>
              <p className="text-slate-700 italic text-sm md:text-base">
                While uncovering pain points was the primary goal, deliberately capturing positive feedback painted a fuller picture of what motivated customers and gave the wider team balanced visibility.
              </p>
            </aside>

            <h3 className="text-2xl font-bold text-slate-800 mb-4 mt-10">
              Going Digital
            </h3>
            <p className="mb-8">
              With the structure validated on paper, I built out the digital Phase Map in Sketch. Staying true to the goal of breaking the site into individual user tasks, I paired every phase label with an ascending phase number and a unique colour—giving the entire e-commerce team a consistent shorthand for referencing any part of the journey.
            </p>

            <figure className="my-8">
              <Image
                src="/images/phase-map/goingdigital.jpg"
                alt="Digital version of the Phase Map constructed in Sketch with numbered and colour-coded user phases"
                width={900}
                height={500}
                sizes="(max-width: 768px) 100vw, 720px"
                className="w-full h-auto object-contain rounded-xl shadow-sm bg-white border border-slate-200/60"
              />
              <figcaption className="mt-3 text-sm text-slate-500 text-center">
                Translating the paper journey into a numbered, colour-coded digital Phase Map in Sketch.
              </figcaption>
            </figure>

            <aside className="border-l-4 border-purple-900 bg-purple-100 p-6 rounded-r-md shadow-sm my-10">
              <strong className="block text-purple-900 font-semibold mb-2">Quick aside</strong>
              <p className="text-slate-700 italic text-sm md:text-base">
                Those phase colours proved unexpectedly useful beyond the map—reusing the matching colour on standalone project journeys created instant visual consistency across all UX work.
              </p>
            </aside>

            <figure className="my-8">
              <Image
                src="/images/phase-map/colourusemap.png"
                alt="Standalone project journey reusing the Phase Map colour coding to anchor goal-oriented phases"
                width={2586}
                height={990}
                sizes="(max-width: 768px) 100vw, 720px"
                className="w-full h-auto object-contain rounded-xl shadow-sm bg-white border border-slate-200/60"
              />
              <figcaption className="mt-3 text-sm text-slate-500 text-center">
                Reusing Phase Map colours across standalone project flows for immediate visual consistency.
              </figcaption>
            </figure>
          </section>

          <section>
            <h2
              className="text-slate-900 mb-6"
              style={{ fontSize: "56px", fontWeight: 400, letterSpacing: "-0.03em", lineHeight: 1.15 }}
            >
              Hot Off the Press (Making It Physical)
            </h2>
            <p className="mb-4">
              Digital files are easy to share and even easier to forget—&ldquo;out of sight, out of mind.&rdquo; The plan was always to bring the map into the physical office at a scale people couldn&rsquo;t walk past without noticing.
            </p>
            <p className="mb-4">
              Before sending anything to print, I circulated the draft 1:1 with anyone across the floor who would spare five minutes. That informal roadshow did double duty: it acted as an early PR exercise for the framework while giving stakeholders a chance to proofread and pressure-test every step.
            </p>
            <p className="mb-8">
              Working with an A3 printer, I tiled six landscape A3 artboards side by side in Illustrator to slice the full map cleanly into printable panels. Grabbing an extra pair of hands from the team, we pinned the assembled panels across the biggest free wall in the office—and even that wall was only just wide enough.
            </p>

            <figure className="my-8">
              <Image
                src="/images/phase-map/phasemap_empty.jpg"
                alt="Freshly printed A3 panels of the Phase Map pinned across the main office wall prior to adding user feedback"
                width={4032}
                height={2088}
                sizes="(max-width: 768px) 100vw, 720px"
                className="w-full h-auto object-contain rounded-xl shadow-sm bg-white border border-slate-200/60"
              />
              <figcaption className="mt-3 text-sm text-slate-500 text-center">
                The tiled A3 Phase Map newly mounted across the main e-commerce office wall.
              </figcaption>
            </figure>

            <p className="mb-4 font-medium text-slate-800">
              Having the map physically on the wall—not tucked away in a shared folder—mattered for three reasons:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Visibility across the whole e-commerce team and the wider business</li>
              <li>A constant, everyday reminder to keep the customer at the centre of decisions</li>
              <li>An immediate visual overview of the main problem areas for both UX and CRO</li>
            </ul>
          </section>

          <section>
            <h2
              className="text-slate-900 mb-6"
              style={{ fontSize: "56px", fontWeight: 400, letterSpacing: "-0.03em", lineHeight: 1.15 }}
            >
              Populating the Map &amp; Testing Tuesdays
            </h2>
            <p className="mb-4">
              With the customer journey mapped at scale, the real value came from layering live user evidence onto it. To gather our baseline insights, I ran 15 unmoderated think-out-loud sessions through UserZoom with participants who had never shopped with Iceland online before, guided by a single open prompt:
            </p>

            <blockquote className="border-l-4 border-slate-300 bg-white/80 p-6 rounded-r-md shadow-sm my-8">
              <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                UserZoom Test Prompt
              </span>
              <p className="text-slate-800 font-medium italic text-lg md:text-xl leading-relaxed">
                &ldquo;You arrive on iceland.co.uk, show me how you would go about spending £25 with Iceland.&rdquo;
              </p>
            </blockquote>

            <aside className="border-l-4 border-purple-900 bg-purple-100 p-6 rounded-r-md shadow-sm my-10">
              <strong className="block text-purple-900 font-semibold mb-2">Quick aside</strong>
              <p className="text-slate-700 italic text-sm md:text-base">
                Some participants got so drawn in by onsite deals that they forgot the £25 test brief and spent well over double.
              </p>
            </aside>

            <p className="mb-8">
              To keep findings immediately scannable across the wall, I introduced a simple three-colour post-it system:{" "}
              <span className="font-semibold text-emerald-700">Green</span> for good feedback,{" "}
              <span className="font-semibold text-rose-700">Red</span> for pain points, and{" "}
              <span className="font-semibold text-sky-700">Blue</span> for observations. As we reviewed the think-out-loud recordings, we discussed, sorted, and applied the notes directly into the corresponding swimlanes on the wall.
            </p>

            <figure className="my-8">
              <Image
                src="/images/phase-map/swimlane-overview.png"
                alt="Colour-coded post-it legend showing Green for good feedback, Red for pain points, and Blue for observations across the swimlanes"
                width={1400}
                height={738}
                sizes="(max-width: 768px) 100vw, 720px"
                className="w-full h-auto object-contain rounded-xl shadow-sm bg-white border border-slate-200/60"
              />
              <figcaption className="mt-3 text-sm text-slate-500 text-center">
                Colour-coded swimlanes mapping Green (Good feedback), Red (Pain points), and Blue (Observations).
              </figcaption>
            </figure>

            <figure className="my-8">
              <Image
                src="/images/phase-map/phasemap_populated.jpg"
                alt="The wall-mounted Phase Map populated with colour-coded customer feedback post-it notes"
                width={4032}
                height={2080}
                sizes="(max-width: 768px) 100vw, 720px"
                className="w-full h-auto object-contain rounded-xl shadow-sm bg-white border border-slate-200/60"
              />
              <figcaption className="mt-3 text-sm text-slate-500 text-center">
                Applying initial feedback to the wall
              </figcaption>
            </figure>

            <figure className="my-8">
              <Image
                src="/images/phase-map/phasemap_closeup.jpg"
                alt="Close-up view of the Buying Cycle section of the Phase Map covered in sorted customer post-it notes"
                width={5892}
                height={3564}
                sizes="(max-width: 768px) 100vw, 720px"
                className="w-full h-auto object-contain rounded-xl shadow-sm bg-white border border-slate-200/60"
              />
              <figcaption className="mt-3 text-sm text-slate-500 text-center">
                Close-up of the Buying Cycle
              </figcaption>
            </figure>

            <h3 className="text-2xl font-bold text-slate-800 mb-4 mt-10">
              Testing Tuesdays
            </h3>
            <p className="mb-4">
              Acting on a recommendation from UserZoom, I turned video review into a weekly cross-departmental habit. Because Tuesday was the only recurring slot with a meeting room consistently available, <em>Testing Tuesdays</em> was born—giving teams across the department a regular peek behind the curtain of UX research.
            </p>
            <p className="mb-4">
              Colleagues from across e-commerce joined each session to watch the recordings together and log their own observations on post-its. At the end of each viewing, we ran a fast show-and-tell, grouping notes by page to talk through patterns and strip out duplicates while keeping post-it etiquette consistent.
            </p>
            <p>
              Once everything was grouped on the wall, every attendee received three dot stickers to vote on the issues they felt mattered most. That democratic prioritisation gave the UX team a clear, shared mandate before we transferred the winning insights onto the main Phase Map.
            </p>
          </section>

          <section>
            <h2
              className="text-slate-900 mb-6"
              style={{ fontSize: "56px", fontWeight: 400, letterSpacing: "-0.03em", lineHeight: 1.15 }}
            >
              Phase KPI Cards &amp; Leadership Buy-In
            </h2>
            <p className="mb-4">
              For all its impact, a wall-sized map has one obvious limitation: it&rsquo;s big and static. Borrowing an approach from an earlier project where I documented multiple teams&rsquo; objectives, I paired the Phase Map&rsquo;s colour-and-number system with printed, pocket-sized Phase KPI Cards that could be handed directly to each department.
            </p>
            <p className="mb-4">
              Putting a physical reference in stakeholders&rsquo; hands kept both customer and commercial needs front of mind whenever new ideas or changes were discussed. Each card anchored a phase around four core details:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li>Pages or touchpoints</li>
              <li>KPI</li>
              <li>User Goal</li>
              <li>Business Goal</li>
            </ul>

            <figure className="my-8">
              <Image
                src="/images/phase-map/KPI_Cards_header.jpg"
                alt="Printed pocket-sized Phase KPI Cards showing numbered, colour-coded phases with user goals and business KPIs"
                width={858}
                height={313}
                sizes="(max-width: 768px) 100vw, 720px"
                className="w-full h-auto object-contain rounded-xl shadow-sm bg-white border border-slate-200/60"
              />
              <figcaption className="mt-3 text-sm text-slate-500 text-center">
                Pocket-sized Phase KPI Cards extending the wall map&rsquo;s colour and numbering system to every department.
              </figcaption>
            </figure>

            <h3 className="text-2xl font-bold text-slate-800 mb-4 mt-10">
              Senior &amp; Director Presentation
            </h3>
            <p className="mb-6">
              To secure wider departmental and executive buy-in, I pulled together a concise presentation walking senior management and directors through the Phase Map framework, the Testing Tuesdays cadence, and how the Phase KPI Cards connected everyday UX fixes to commercial KPIs.
            </p>

            <PhaseMapSlideDeck />
          </section>

          <section>
            <h2
              className="text-slate-900 mb-6"
              style={{ fontSize: "56px", fontWeight: 400, letterSpacing: "-0.03em", lineHeight: 1.15 }}
            >
              Actionable Feedback (A/B Testing Wins)
            </h2>
            <p className="mb-8">
              The real measure of any discovery framework is whether it turns observation into shipped commercial impact. Below are two concrete CRO experiments directly informed by insights surfaced on the Phase Map.
            </p>

            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              1) Registration Form
            </h3>
            <p className="mb-4">
              As part of the end-to-end UserZoom task, participants had to register a new account. Session after session, shoppers missed the mandatory &ldquo;address name&rdquo; field, triggering validation errors that halted form completion.
            </p>
            <p className="mb-4">
              <strong className="text-slate-800">Solution:</strong> We tested auto-completing the field with a sensible, editable generic default—removing unnecessary friction so the form validated first time while still making it obvious shoppers could customise the label if they wished.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-y border-slate-200 py-6 my-8">
              <div>
                <p className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                  +3.22%
                </p>
                <p className="text-sm md:text-base text-slate-600 mt-1">
                  Registration rate uplift
                </p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                  +4.81%
                </p>
                <p className="text-sm md:text-base text-slate-600 mt-1">
                  Conversion rate uplift
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-slate-800 mb-4 mt-10">
              2) Mobile Header &amp; Basket Total
            </h3>
            <p className="mb-4">
              Throughout the buying cycle, mobile shoppers repeatedly voiced the same frustration: they couldn&rsquo;t quickly tell how much they had spent without abandoning their current browse context to open the basket.
            </p>
            <p className="mb-6">
              <strong className="text-slate-800">Solution:</strong> We surfaced the live running basket total directly inside the mobile header so customers could track spend effortlessly while continuing to shop.
            </p>

            <figure className="my-8">
              <Image
                src="/images/phase-map/mobileheader-examplegrey.jpg"
                alt="Mobile header UI example showing the running basket total surfaced clearly next to the basket icon"
                width={1366}
                height={500}
                sizes="(max-width: 768px) 100vw, 720px"
                className="w-full h-auto object-contain rounded-xl shadow-sm bg-white border border-slate-200/60"
              />
              <figcaption className="mt-3 text-sm text-slate-500 text-center">
                Surfacing the live running basket total directly in the mobile header.
              </figcaption>
            </figure>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-y border-slate-200 py-6 my-8">
              <div>
                <p className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                  +1.7%
                </p>
                <p className="text-sm md:text-base text-slate-600 mt-1">
                  Mobile conversion uplift
                </p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                  +1.4%
                </p>
                <p className="text-sm md:text-base text-slate-600 mt-1">
                  Revenue per user
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2
              className="text-slate-900 mb-6"
              style={{ fontSize: "56px", fontWeight: 400, letterSpacing: "-0.03em", lineHeight: 1.15 }}
            >
              Improvements &amp; Iterations
            </h2>
            <p className="mb-4">
              Even with a clear vision from day one, a living framework only stays useful if you carve out dedicated time for reflection and team feedback. Listening to how colleagues actually used the wall drove several meaningful refinements along the way:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li>Expanding the initial per-phase data points into the enhanced Phase KPI Cards</li>
              <li>Breaking &ldquo;post-purchase&rdquo; out into a dedicated Fulfilment phase</li>
              <li>Streamlining group feedback sessions so insights moved onto the map faster</li>
            </ul>

            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Empathy Map
            </h3>
            <p className="mb-8">
              To deepen our understanding beyond observed clicks and friction, we explored pairing an Empathy Map alongside the journey—capturing what shoppers think, feel, hear, say, do, and see. That extra lens helps teams pre-emptively spot issues that rarely surface in quantitative analytics or task-based qualitative tests alone, while sharpening our shared picture of the core customer.
            </p>

            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Success Map
            </h3>
            <p>
              Tracking what we&rsquo;ve fixed matters just as much as spotlighting what&rsquo;s still broken. Adding a complementary Success Map to visually record shipped wins alongside active friction gives the team a tangible morale booster—and helps maintain momentum across long-running CRO programmes.
            </p>
          </section>
        </div>

        <CaseStudyBottomNav />
      </main>
    </div>
  );
}

import Link from "next/link";
import { ArrowRight, ChevronLeft, CheckCircle2, Sparkles } from "lucide-react";
import GuestCursor from "./GuestCursor";
import PhaseMapMedia from "./PhaseMapMedia";
import PhaseMapDeckCarousel, {
  type PhaseMapDeckSlide,
} from "./PhaseMapDeckCarousel";
import BackToTopButton from "./BackToTopButton";

const IMPACT_METRICS = [
  { value: "+4.81%", label: "Registration CR" },
  { value: "+3.22%", label: "Registration Rate" },
  { value: "+1.7%", label: "Mobile CR" },
  { value: "+1.4%", label: "Revenue Per User" },
];

const DELIVERABLES = [
  "Digital Phase Map (Sketch)",
  "Wall-Mounted Map",
  "15 UserZoom Tests",
  "Testing Tuesdays",
  "Phase KPI Cards",
  "Director & SMT Presentation",
];

const POST_IT_LEGEND = [
  {
    colour: "Green",
    title: "Good feedback",
    description:
      "Moments that worked seamlessly and delighted shoppers—protected from accidental regression.",
    cardClass: "bg-emerald-100 -rotate-1",
    badgeClass: "bg-emerald-300 text-slate-950",
  },
  {
    colour: "Red",
    title: "Pain points",
    description:
      "Usability friction, unexpected errors, and points of confusion that triggered abandonment.",
    cardClass: "bg-rose-100 rotate-1",
    badgeClass: "bg-rose-300 text-slate-950",
  },
  {
    colour: "Blue",
    title: "Observations",
    description:
      "Neutral customer behaviours, mental models, and browsing habits that provided vital context.",
    cardClass: "bg-sky-100 -rotate-1",
    badgeClass: "bg-sky-300 text-slate-950",
  },
];

const KPI_CARD_ELEMENTS = [
  {
    number: "01",
    title: "Pages / Touchpoints",
    description:
      "Exact screens, entry points, and operational touchpoints owned within the phase.",
  },
  {
    number: "02",
    title: "KPI",
    description:
      "The primary measurable metric tracking phase health and funnel progression.",
  },
  {
    number: "03",
    title: "User Goal",
    description:
      "What the customer is trying to accomplish confidently at that stage of shopping.",
  },
  {
    number: "04",
    title: "Business Goal",
    description:
      "The commercial outcome and trading objective the phase drives for Iceland.",
  },
];

const DECK_SLIDES: PhaseMapDeckSlide[] = [
  {
    filename: "Slide1pm.jpeg",
    title: "Phase Map & KPI Cards",
    caption:
      "Opening slide introducing the Phase Map and KPI Cards framework for Iceland UX Ecommerce.",
    alt: "Presentation slide 1 titled Phase Map and KPI Cards for Iceland UX Ecommerce over a wireframe sketch and laptop background",
    width: 960,
    height: 540,
  },
  {
    filename: "Slide3pm.jpeg",
    title: "Core User Journey Recap",
    caption:
      "Mapping what users must do from point A to B to successfully complete a shop, including Acquisition & Retention.",
    alt: "Presentation slide showing the Core User Journey diagram from point A where users start to point B with green, red, and blue feedback markers",
    width: 960,
    height: 540,
  },
  {
    filename: "Slide4pm.jpeg",
    title: "8 Numbered, Colour-Coded Phases",
    caption:
      "Breaking the core journey into Phases 0–7: Acquisition, Onboarding, Registration, Buying Cycle, Purchase, Amendment, Fulfilment, and Retention.",
    alt: "Presentation slide listing the eight numbered colour-coded phases from 0 Acquisition through 7 Retention",
    width: 960,
    height: 540,
  },
  {
    filename: "Slide5pm.jpeg",
    title: "Applying User Feedback",
    caption:
      "Collecting user feedback across touchpoints and mapping it directly onto the Phase Map.",
    alt: "Presentation slide introducing how user feedback is collected and applied to the Phase Map",
    width: 960,
    height: 540,
  },
  {
    filename: "Slide6pm.jpeg",
    title: "Feedback Sources",
    caption:
      "Combining UX Testing (Think Out Loud, Feedback Tab), Analytics (GA, ContentSquare), and Direct channels (Feefo, Contact Centre, The Team).",
    alt: "Presentation slide categorising user feedback sources into UX Testing, Analytics, and Direct channels",
    width: 960,
    height: 540,
  },
  {
    filename: "Slide7pm.jpeg",
    title: "Think Out Loud Test Tasks",
    caption:
      "Unmoderated mobile UserZoom prompts for new shoppers covering Onboarding through Purchase.",
    alt: "Presentation slide showing the two Think Out Loud mobile test tasks from Onboarding to Purchase: adding £25 of shopping and checking out",
    width: 960,
    height: 540,
  },
  {
    filename: "Slide8pm.jpeg",
    title: "Registration Micro Journey",
    caption:
      "Phase journey breakdown showing Registration touchpoints, welcome email content, and +£1.1m incremental opportunity.",
    alt: "Presentation slide illustrating the Registration micro journey from Homepage to Buying Cycle with a +£1.1m incremental opportunity callout",
    width: 960,
    height: 540,
  },
  {
    filename: "Slide9pm.jpeg",
    title: "Where KPI Cards Come From",
    caption:
      "Combining Phase Map insights with cross-team collaboration to produce actionable KPI Cards.",
    alt: "Presentation slide showing the formula Info from Phase Map plus Team Collaboration equals KPI Cards",
    width: 960,
    height: 540,
  },
  {
    filename: "Slide10pm.jpeg",
    title: "The Cards Explained",
    caption:
      "Breakdown of the Phase 3 Buying Cycle card showing Pages, Phase KPI (Sessions to Add to Bag), User Goal, and Business Goal.",
    alt: "Presentation slide explaining the four KPI Card elements alongside an orange Phase 3 Buying Cycle card mockup",
    width: 960,
    height: 540,
  },
  {
    filename: "Slide11pm.jpeg",
    title: "Card Uses & Team Value",
    caption:
      "How physical KPI Cards make UX measurable, support data-driven decisions, and align teams around customers.",
    alt: "Presentation slide listing seven ways teams use KPI Cards to keep the customer at the heart of data-driven decisions",
    width: 960,
    height: 540,
  },
  {
    filename: "Slide12pm.jpeg",
    title: "Summary: Customer at the Heart",
    caption:
      "Recap displaying the full colour-coded Phase 0–7 KPI Card deck keeping the customer central to every website change.",
    alt: "Presentation slide summary displaying all eight colour-coded Phase KPI Cards fanned side by side",
    width: 960,
    height: 540,
  },
  {
    filename: "Slide13pm.jpeg",
    title: "Going Forward: What's Next?",
    caption:
      "Next steps covering SMT buy-in, confirming KPIs & goals, adding core personas to card backs, an Analytics KPI Card Dashboard, and team distribution.",
    alt: "Presentation slide outlining five next steps including SMT buy-in, confirming KPIs, core persona card backs, analytics dashboard, and team rollout",
    width: 960,
    height: 540,
  },
];

export default function PhaseMapCaseStudy() {

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans text-lg leading-relaxed selection:bg-slate-200 dot-grid pb-24">
      <GuestCursor />

      <main className="max-w-4xl mx-auto px-6 pt-28 md:pt-32 pb-20">
        {/* Top Back-to-Home Navigation */}
        <Link
          href="/#case-studies"
          className="inline-flex items-center gap-2 bg-white border-2 border-black shadow-[3px_3px_0px_#000] rounded-full pr-4 pl-3 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50 transition-colors mb-10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          <ChevronLeft size={16} aria-hidden="true" />
          <span>Back to Case Studies</span>
        </Link>

        {/* Chapter 0 — Hero & Commercial Snapshot */}
        <header className="flex flex-col gap-8 pb-16 border-b-2 border-dashed border-slate-300">
          <div className="flex flex-col gap-4">
            <span className="inline-flex w-fit items-center gap-2 px-3.5 py-1 rounded-full border-2 border-black bg-[#36C5F0]/25 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900">
              End-to-End Journey Mapping • Iceland
            </span>
            <h1 className="font-[family-name:var(--font-archivo-black)] uppercase tracking-tight text-4xl sm:text-5xl md:text-7xl leading-none text-slate-900">
              THE PHASE MAP
            </h1>
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-3xl">
              Leading UX strategy inside a newly formed CRO scrum team to replace
              guesswork with end-to-end customer visibility and stakeholder
              consensus.
            </p>
          </div>

          {/* 4-Card Impact Strip */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {IMPACT_METRICS.map((metric) => (
              <div
                key={metric.label}
                className="border-2 border-black bg-white shadow-[4px_4px_0px_#000] rounded-2xl overflow-hidden flex flex-col"
              >
                <div className="h-2.5 bg-[#36C5F0] border-b-2 border-black" />
                <div className="p-4 sm:p-5 flex flex-col gap-1">
                  <span className="font-[family-name:var(--font-archivo-black)] text-2xl sm:text-3xl tracking-tight text-slate-900 leading-none">
                    {metric.value}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-600">
                    {metric.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Compact Role / Deliverables Metadata Bar */}
          <div className="border-2 border-black bg-white shadow-[4px_4px_0px_#000] rounded-2xl p-6 flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4 border-b border-slate-200">
              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                  Role
                </span>
                <span className="text-base font-bold text-slate-900">
                  UX Lead — CRO Scrum Team
                </span>
              </div>
              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                  Client
                </span>
                <span className="text-base font-bold text-slate-900">
                  Iceland
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Key Deliverables
              </span>
              <div className="flex flex-wrap gap-2">
                {DELIVERABLES.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center px-3 py-1 rounded-full border-2 border-black bg-slate-50 text-xs sm:text-sm font-semibold text-slate-900"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* North Star Callout Quote */}
          <blockquote className="border-2 border-black border-l-8 border-l-[#36C5F0] bg-white shadow-[4px_4px_0px_#000] rounded-2xl p-6 md:p-8">
            <span className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Project North Star
            </span>
            <p className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
              &ldquo;If we get our core journey right, we&apos;ll have a solid
              base to iterate and grow.&rdquo;
            </p>
          </blockquote>
        </header>

        {/* Chapters 01–05 */}
        <div className="flex flex-col gap-20 pt-16">
          {/* Chapter 01 */}
          <section className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <span className="inline-flex w-fit items-center px-3 py-1 rounded-lg border-2 border-black bg-[#36C5F0] text-xs font-extrabold uppercase tracking-wider text-black">
                Chapter 01
              </span>
              <h2 className="font-[family-name:var(--font-archivo-black)] uppercase tracking-tight text-2xl sm:text-3xl md:text-4xl text-slate-900 leading-tight">
                01 / DESIGNING A LIVING SYSTEM (FROM PAPER TO WALL)
              </h2>
              <div className="h-1.5 w-24 bg-[#36C5F0] border border-black rounded-full" />
            </div>

            <div className="border-2 border-black bg-white shadow-[4px_4px_0px_#000] rounded-2xl p-6 md:p-8 flex flex-col gap-4 text-slate-700 leading-relaxed">
              <p>
                Stepping into a newly formed CRO scrum team, my first priority
                was establishing clear project milestones early to align direct
                reports and keep discovery focused on tangible outcomes rather
                than endless audits.
              </p>
              <p>
                Working shoulder-to-shoulder with QA on paper, we mapped every
                touchpoint—and deliberately expanded our scope beyond the core
                checkout flow to encompass both{" "}
                <strong className="text-slate-900">Acquisition</strong> and{" "}
                <strong className="text-slate-900">Retention</strong>. Bringing
                those upstream and downstream phases onto one shared canvas
                helped bridge longstanding departmental silos.
              </p>
              <p>
                Crucially, I designed{" "}
                <strong className="text-slate-900">
                  three feedback swimlanes
                </strong>{" "}
                directly beneath the journey steps so the squad captured positive
                experiences and neutral observations alongside friction
                points—protecting what already worked well while targeting
                drop-off triggers.
              </p>
              <p>
                Once the structure proved itself on paper, I translated it into
                a <strong className="text-slate-900">digital Sketch system</strong>{" "}
                assigning ascending numbers and unique colours to every phase
                for instant cross-project consistency across squads and
                deliverables. Finally, I tiled{" "}
                <strong className="text-slate-900">
                  six landscape A3 panels
                </strong>{" "}
                in Adobe Illustrator and mounted them across the largest office
                wall so the customer journey stayed physically front of mind for
                the entire e-commerce team.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <PhaseMapMedia
                filename="phasemap_populated.jpg"
                alt="Full wall-mounted Iceland Phase Map populated with colour-coded customer feedback post-it notes across journey stages"
                caption="Populated wall-mounted Phase Map in situ"
                width={4032}
                height={2080}
                tag="Wall Installation"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <PhaseMapMedia
                  filename="swimlane-overview-empty.png"
                  alt="Diagram of the empty Phase Map structure showing journey stages above three horizontal feedback swimlanes"
                  caption="Empty journey structure & 3 feedback swimlanes"
                  width={1400}
                  height={738}
                  sizes="(max-width: 768px) 100vw, 420px"
                  tag="Framework"
                />
                <PhaseMapMedia
                  filename="goingdigital.jpg"
                  alt="Digital translation of the paper customer journey map inside Sketch with colour-coded phase columns"
                  caption="Translating paper journey mapping into Sketch"
                  width={900}
                  height={500}
                  sizes="(max-width: 768px) 100vw, 420px"
                  tag="Digital System"
                />
                <PhaseMapMedia
                  filename="colourusemap.png"
                  alt="Visual taxonomy chart showing numbered and colour-coded phases applied consistently across standalone UX journeys"
                  caption="Numbered, colour-coded phase taxonomy system"
                  width={2586}
                  height={990}
                  sizes="(max-width: 768px) 100vw, 420px"
                  tag="Taxonomy"
                />
                <PhaseMapMedia
                  filename="phasemap_empty.jpg"
                  alt="Six tiled landscape A3 printed panels of the blank Phase Map pinned across the office wall"
                  caption="Six tiled landscape A3 panels mounted on the office wall"
                  width={4032}
                  height={2088}
                  sizes="(max-width: 768px) 100vw, 420px"
                  tag="Print & Tile"
                />
              </div>
            </div>
          </section>

          {/* Chapter 02 */}
          <section className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <span className="inline-flex w-fit items-center px-3 py-1 rounded-lg border-2 border-black bg-[#36C5F0] text-xs font-extrabold uppercase tracking-wider text-black">
                Chapter 02
              </span>
              <h2 className="font-[family-name:var(--font-archivo-black)] uppercase tracking-tight text-2xl sm:text-3xl md:text-4xl text-slate-900 leading-tight">
                02 / RESEARCH &amp; STRATEGIC FACILITATION (&ldquo;TESTING
                TUESDAYS&rdquo;)
              </h2>
              <div className="h-1.5 w-24 bg-[#36C5F0] border border-black rounded-full" />
            </div>

            <div className="border-2 border-black bg-white shadow-[4px_4px_0px_#000] rounded-2xl p-6 md:p-8 flex flex-col gap-5 text-slate-700 leading-relaxed">
              <p>
                To populate the swimlanes with real behavioural evidence, I ran{" "}
                <strong className="text-slate-900">
                  15 unmoderated UserZoom think-out-loud tests
                </strong>{" "}
                with non-online shoppers given a single open prompt:{" "}
                <strong className="text-slate-900">
                  &ldquo;spend £25 with Iceland&rdquo;
                </strong>
                .
              </p>

              <div className="border-2 border-black bg-[#36C5F0]/15 shadow-[3px_3px_0px_#000] rounded-xl p-5 flex items-start gap-3">
                <Sparkles
                  size={20}
                  className="shrink-0 mt-0.5 text-slate-900"
                  aria-hidden="true"
                />
                <p className="text-sm md:text-base font-medium text-slate-900 leading-relaxed">
                  <strong>Research highlight:</strong> Iceland&apos;s onsite
                  promotions and multi-buy deals were so compelling that several
                  participants happily spent over double the £25 task target.
                </p>
              </div>

              <p>
                Rather than writing a static report that nobody would read, I
                launched{" "}
                <strong className="text-slate-900">Testing Tuesdays</strong>—open,
                cross-departmental playback sessions where trading, marketing,
                QA, and engineering watched customer recordings together and
                logged findings directly onto colour-coded post-its:
              </p>

              {/* Colour-coded sticky notes */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-2">
                {POST_IT_LEGEND.map((note) => (
                  <div
                    key={note.colour}
                    className={`border-2 border-black shadow-[4px_4px_0px_#000] rounded-xl p-5 flex flex-col gap-2.5 ${note.cardClass}`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`text-xs font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-black ${note.badgeClass}`}
                      >
                        {note.colour}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {note.title}
                    </h3>
                    <p className="text-sm text-slate-800 leading-relaxed">
                      {note.description}
                    </p>
                  </div>
                ))}
              </div>

              <p>
                After each viewing block, teams grouped notes by page to
                eliminate duplicates before running{" "}
                <strong className="text-slate-900">
                  3-sticker dot voting
                </strong>
                . Giving every attendee equal voting weight surfaced the biggest
                customer pain points transparently—removing HiPPO bias from the
                CRO backlog.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <PhaseMapMedia
                filename="swimlane-overview.png"
                alt="Diagram of the Phase Map swimlanes populated with green good feedback, red pain points, and blue observation notes"
                caption="Populated feedback swimlanes mapped across journey phases"
                width={1400}
                height={738}
                sizes="(max-width: 768px) 100vw, 420px"
                tag="Synthesis"
              />
              <PhaseMapMedia
                filename="phasemap_closeup.jpg"
                alt="Close-up photograph of the Buying Cycle section on the wall-mounted Phase Map covered in grouped post-it notes and priority dot-voting stickers"
                caption="Close-up of grouped post-its and 3-sticker dot voting on the wall map"
                width={5892}
                height={3564}
                sizes="(max-width: 768px) 100vw, 420px"
                tag="Dot Voting"
              />
            </div>
          </section>

          {/* Chapter 03 */}
          <section className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <span className="inline-flex w-fit items-center px-3 py-1 rounded-lg border-2 border-black bg-[#36C5F0] text-xs font-extrabold uppercase tracking-wider text-black">
                Chapter 03
              </span>
              <h2 className="font-[family-name:var(--font-archivo-black)] uppercase tracking-tight text-2xl sm:text-3xl md:text-4xl text-slate-900 leading-tight">
                03 / COMMERCIAL ALIGNMENT (PHASE KPI CARDS &amp; LEADERSHIP
                BUY-IN)
              </h2>
              <div className="h-1.5 w-24 bg-[#36C5F0] border border-black rounded-full" />
            </div>

            <div className="border-2 border-black bg-white shadow-[4px_4px_0px_#000] rounded-2xl p-6 md:p-8 flex flex-col gap-4 text-slate-700 leading-relaxed">
              <p>
                A wall-sized map is unbeatable in one room, yet teams still
                needed portable context during sprint planning, stand-ups, and
                commercial trading reviews. To solve that physical limitation, I
                created pocket-sized printed{" "}
                <strong className="text-slate-900">Phase KPI Cards</strong>—putting
                each phase&apos;s north star directly in every department&apos;s
                hands.
              </p>
              <p>
                Every card distilled a phase down to four structured anchors so
                product, trading, and engineering always shared one definition
                of success, backed by a formal presentation to Senior Management
                and Directors to secure company-wide buy-in.
              </p>
            </div>

            {/* 2x2 Grid of 4 structured card elements */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {KPI_CARD_ELEMENTS.map((item) => (
                <div
                  key={item.title}
                  className="border-2 border-black bg-white shadow-[4px_4px_0px_#000] rounded-2xl p-6 flex flex-col gap-2"
                >
                  <span className="inline-flex w-fit px-2.5 py-0.5 rounded-md border border-black bg-[#36C5F0]/25 text-xs font-extrabold text-slate-900">
                    {item.number}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <PhaseMapMedia
              filename="KPI_Cards_header.jpg"
              alt="Colour-coded printed pocket-sized Phase KPI Cards showing touchpoints, phase KPIs, user goals, and business goals"
              caption="Pocket-sized Phase KPI Cards linking user goals directly to commercial metrics"
              width={858}
              height={313}
              tag="Phase KPI Cards"
            />

            <PhaseMapDeckCarousel slides={DECK_SLIDES} />
          </section>

          {/* Chapter 04 */}
          <section className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <span className="inline-flex w-fit items-center px-3 py-1 rounded-lg border-2 border-black bg-[#36C5F0] text-xs font-extrabold uppercase tracking-wider text-black">
                Chapter 04
              </span>
              <h2 className="font-[family-name:var(--font-archivo-black)] uppercase tracking-tight text-2xl sm:text-3xl md:text-4xl text-slate-900 leading-tight">
                04 / COMMERCIAL IMPACT (A/B TESTING WINS)
              </h2>
              <div className="h-1.5 w-24 bg-[#36C5F0] border border-black rounded-full" />
            </div>

            <p className="text-slate-700 leading-relaxed">
              Prioritised insights from Testing Tuesdays fed straight into the
              CRO experimentation pipeline—turning observed customer friction
              into statistically validated commercial wins.
            </p>

            <div className="flex flex-col gap-6">
              {/* Experiment 1 */}
              <article className="border-2 border-black bg-white shadow-[4px_4px_0px_#000] rounded-2xl p-6 md:p-8 flex flex-col gap-6">
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b-2 border-black">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                    Registration Form Fix
                  </h3>
                  <span className="text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border border-black bg-[#36C5F0]">
                    Winning Experiment
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-rose-50 border-2 border-black rounded-xl p-5 flex flex-col gap-2">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-rose-900">
                      Friction Uncovered
                    </span>
                    <p className="text-sm md:text-base text-slate-800 leading-relaxed">
                      Users consistently missed the optional-feeling
                      address-name field, triggering frustrating form validation
                      errors on submission.
                    </p>
                  </div>

                  <div className="bg-emerald-50 border-2 border-black rounded-xl p-5 flex flex-col gap-2">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-900">
                      Solution Shipped
                    </span>
                    <p className="text-sm md:text-base text-slate-800 leading-relaxed">
                      Auto-populated a generic, editable default value so forms
                      validated cleanly on the first attempt without removing
                      user control.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-black bg-[#36C5F0]/25 text-sm font-extrabold text-slate-900">
                    +3.22% Registration rate uplift
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-black bg-[#36C5F0]/25 text-sm font-extrabold text-slate-900">
                    +4.81% Conversion rate uplift
                  </span>
                </div>
              </article>

              {/* Experiment 2 */}
              <article className="border-2 border-black bg-white shadow-[4px_4px_0px_#000] rounded-2xl p-6 md:p-8 flex flex-col gap-6">
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b-2 border-black">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                    Mobile Header &amp; Basket Total
                  </h3>
                  <span className="text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border border-black bg-[#36C5F0]">
                    Winning Experiment
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-rose-50 border-2 border-black rounded-xl p-5 flex flex-col gap-2">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-rose-900">
                      Friction Uncovered
                    </span>
                    <p className="text-sm md:text-base text-slate-800 leading-relaxed">
                      Mobile shoppers repeatedly struggled to track their running
                      spend without abandoning the aisle to open the basket
                      page.
                    </p>
                  </div>

                  <div className="bg-emerald-50 border-2 border-black rounded-xl p-5 flex flex-col gap-2">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-900">
                      Solution Shipped
                    </span>
                    <p className="text-sm md:text-base text-slate-800 leading-relaxed">
                      Surfaced the running basket total directly inside the
                      mobile header for persistent spend visibility while
                      browsing.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-black bg-[#36C5F0]/25 text-sm font-extrabold text-slate-900">
                    +1.7% Mobile conversion uplift
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-black bg-[#36C5F0]/25 text-sm font-extrabold text-slate-900">
                    +1.4% Revenue per user
                  </span>
                </div>

                <PhaseMapMedia
                  filename="mobileheader-examplegrey.jpg"
                  alt="Iceland mobile header UI mockup surfacing the persistent running basket total alongside navigation and search controls"
                  caption="Mobile header iteration surfacing the persistent running basket total"
                  width={1366}
                  height={500}
                  tag="Mobile Experiment UI"
                />
              </article>
            </div>
          </section>

          {/* Chapter 05 */}
          <section className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <span className="inline-flex w-fit items-center px-3 py-1 rounded-lg border-2 border-black bg-[#36C5F0] text-xs font-extrabold uppercase tracking-wider text-black">
                Chapter 05
              </span>
              <h2 className="font-[family-name:var(--font-archivo-black)] uppercase tracking-tight text-2xl sm:text-3xl md:text-4xl text-slate-900 leading-tight">
                05 / REFLECTION &amp; EVOLUTION
              </h2>
              <div className="h-1.5 w-24 bg-[#36C5F0] border border-black rounded-full" />
            </div>

            <div className="border-2 border-black bg-white shadow-[4px_4px_0px_#000] rounded-2xl p-6 md:p-8 flex flex-col gap-5">
              <p className="text-slate-700 leading-relaxed">
                As the Phase Map matured across squads, regular retrospectives
                highlighted three key evolutions for the next iteration of the
                framework:
              </p>

              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3 border-2 border-black bg-slate-50 rounded-xl p-4">
                  <CheckCircle2
                    size={20}
                    className="shrink-0 mt-0.5 text-slate-900"
                    aria-hidden="true"
                  />
                  <span className="text-base text-slate-800 leading-relaxed">
                    Splitting <strong>&ldquo;post-purchase&rdquo;</strong> into a
                    dedicated <strong>Fulfilment</strong> phase to accurately
                    reflect store picking, delivery slot communication, and
                    doorstep arrival.
                  </span>
                </li>
                <li className="flex items-start gap-3 border-2 border-black bg-slate-50 rounded-xl p-4">
                  <CheckCircle2
                    size={20}
                    className="shrink-0 mt-0.5 text-slate-900"
                    aria-hidden="true"
                  />
                  <span className="text-base text-slate-800 leading-relaxed">
                    Tightening <strong>Testing Tuesdays</strong> group feedback
                    mechanics to streamline synthesis and maintain facilitation
                    momentum at scale.
                  </span>
                </li>
                <li className="flex items-start gap-3 border-2 border-black bg-slate-50 rounded-xl p-4">
                  <CheckCircle2
                    size={20}
                    className="shrink-0 mt-0.5 text-slate-900"
                    aria-hidden="true"
                  />
                  <span className="text-base text-slate-800 leading-relaxed">
                    Proposing <strong>Empathy Map</strong> and{" "}
                    <strong>Success Map</strong> overlay layers to
                    systematically celebrate customer highs and commercial wins
                    alongside friction points.
                  </span>
                </li>
              </ul>
            </div>
          </section>
        </div>

        {/* Footer Navigation */}
        <nav
          aria-label="Case study navigation"
          className="border-2 border-black bg-white shadow-[4px_4px_0px_#000] rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-between gap-4 mt-16"
        >
          <Link
            href="/#case-studies"
            className="inline-flex items-center justify-center gap-2 bg-white border-2 border-black shadow-[3px_3px_0px_#000] rounded-full px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-100 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            <ChevronLeft size={16} aria-hidden="true" />
            <span>Back to Case Studies</span>
          </Link>

          <div className="flex flex-wrap items-center justify-between sm:justify-end gap-3">
            <BackToTopButton />
            <Link
              href="/case-studies/checkout-delivery"
              className="inline-flex items-center justify-center gap-2 bg-[#36C5F0] border-2 border-black shadow-[3px_3px_0px_#000] rounded-full px-5 py-2 text-sm font-bold text-black hover:bg-[#36C5F0]/85 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              <span>Next Case Study: Checkout Delivery</span>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </nav>
      </main>
    </div>
  );
}

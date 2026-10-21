import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import GuestCursor from "../../../components/GuestCursor";

export default function CheckoutDeliveryCaseStudy() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans text-lg leading-relaxed selection:bg-slate-200 dot-grid pb-24">
      <GuestCursor />

      <main className="max-w-3xl mx-auto px-6 pt-[10vh] pb-[15vh]">
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full pr-4 pl-3 py-2 text-sm font-medium hover:bg-slate-50 transition-colors mb-[10vh]"
        >
          <ChevronLeft size={16} /> Back
        </Link>

        <h1 className="text-5xl md:text-6xl font-normal text-slate-900 text-center mb-16" style={{ letterSpacing: "-0.03em", lineHeight: 1.15 }}>
          Iterative CRO strategy: Checkout Delivery
        </h1>

        <div className="text-slate-600 text-lg leading-relaxed flex flex-col gap-y-[8vh] md:gap-y-[12vh]">
          <p className="font-bold text-xl text-slate-800">
            The brief was simple: &quot;Simplify delivery.&quot; With peak trading fast approaching, we had to move quickly. Our goal was to reduce checkout friction and formulate high-impact CRO hypotheses to streamline the delivery experience before the busiest time of the year.
          </p>

          <section>
            <h2 className="text-slate-900 mb-6" style={{ fontSize: "56px", fontWeight: 400, letterSpacing: "-0.03em", lineHeight: 1.15 }}>
              Outcomes overview
            </h2>
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="font-bold text-slate-800 mb-2">Project goals</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm md:text-base">
                  <li>Drive adoption of higher-margin delivery options (e.g., Next Day delivery)</li>
                  <li>Formulate testable, data-backed hypotheses</li>
                  <li>Deliver at pace to support upcoming peak trading</li>
                  <li>Apply a Lean UX &quot;test and learn&quot; methodology</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-slate-800 mb-2">Deliverables</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm md:text-base">
                  <li>End-to-end discovery and planning Miro board</li>
                  <li>A design supported by everyone (achieving full stakeholder alignment)</li>
                  <li>Clear, actionable UX recommendations</li>
                  <li>Responsive Figma designs and prototypes</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-slate-800 mb-2">Outcomes</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm md:text-base">
                  <li>Two hypothesis-driven CRO tests</li>
                  <li>A dual-track approach: single-test iterations + long-term vision</li>
                  <li>Increased conversion rate on the delivery page</li>
                  <li>Winning experiment moved into the engineering implementation track</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-slate-900 mb-6" style={{ fontSize: "56px", fontWeight: 400, letterSpacing: "-0.03em", lineHeight: 1.15 }}>
              Getting started: WTF?? (What&apos;s the Flow?)
            </h2>
            <p className="mb-4">
              One of my favorite techniques, inspired by Alexander Handley&apos;s article What&apos;s the Flow?, has stuck with me throughout my career. I use it as a starting point for almost every project, and this one was no exception (and spoiler, it served me really well!).
            </p>
            <p className="mb-4">
              Before we could simplify anything, our first port of call was establishing a shared baseline. To get everyone on the same page, we needed to review exactly what steps a customer currently takes to successfully choose a delivery method and proceed to the next step of checkout.
            </p>
            <p>
              Because the delivery journey was identical across all our customer types, I mapped out the single core flow and pulled the existing page screens into a Miro board so we could review the experience together.
            </p>
          </section>

          <section>
            <h2 className="text-slate-900 mb-6" style={{ fontSize: "56px", fontWeight: 400, letterSpacing: "-0.03em", lineHeight: 1.15 }}>
              The data
            </h2>
            <p className="mb-4">
              We started by looking at what we knew to be true. ContentSquare data revealed that over 90% of users saw the Click & Collect banner, but interaction was severely low. It was classic banner blindness. Our flow observations confirmed that trying to shout too loudly about Click & Collect with a dedicated banner was completely backfiring.
            </p>
            <p className="mb-4">
              The fix felt obvious. Previous tests had already given us a modern, winning UI pattern for payment types. Bringing that exact consistency into the delivery checkout just made sense.
            </p>
            <p className="mb-4">
              We also dug into the second step of the flow. After a customer selected Click & Collect, standard conversion was within expected tolerances, but the Next Day upgrade was massively underutilised. Since our teardown session highlighted that Next Day delivery is both a profitable business driver and a huge boost for customer NPS, I knew we had to tackle this as well.
            </p>
            <p>
              With these clear data points gathered in just a few days, I was ready to move to the next phase of my process.
            </p>
          </section>

          <section>
            <h2 className="text-slate-900 mb-6" style={{ fontSize: "56px", fontWeight: 400, letterSpacing: "-0.03em", lineHeight: 1.15 }}>
              Team Teardowns
            </h2>
            <p className="mb-4">
              Another essential tool in my lean discovery kit is what I call &quot;Team Teardowns&quot;. This simply brings the core squad together: QA, developers, delivery managers, PMs, and key stakeholders. Getting everyone involved early provides an invaluable perspective.
            </p>
            <p className="mb-8">
              I usually get the ball rolling by walking through any qualitative or quantitative data we already have, along with my own early observations. This frames the activity and gives the team time to process the insights before we dive in.
            </p>

            <div className="w-full h-[400px] bg-slate-200 rounded-xl flex items-center justify-center text-slate-400 mb-8">Image Placeholder</div>

            <p className="mb-4">
              During the session, it became obvious that the promotional banner was a primary target for investigation. We also noticed its backend logic was causing it to jump around depending on the basket type.
            </p>

            <div className="border-l-4 border-purple-900 bg-purple-100 p-6 rounded-r-md shadow-sm my-10">
              <strong className="block text-purple-900 font-semibold mb-2">Quick aside</strong>
              <p className="text-slate-700 italic text-sm md:text-base">
                This exact moment highlights why having the full squad involved early is so crucial. Having QA in the room meant we could map out complex scenarios and edge cases upfront, saving us from painful rework later down the line.
              </p>
            </div>

            <p className="mb-4 font-medium text-slate-800">
              The two big, data-backed takeaways from our lean discovery were clear:
            </p>
            <ul className="list-decimal pl-6 space-y-2">
              <li>Click & Collect was hard to find and inconsistently placed.</li>
              <li>Even when a user found and selected it, we did a poor job of prompting the delivery time. The Next Day delivery option was severely underutilised, despite being a highly profitable choice for the business.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-slate-900 mb-6" style={{ fontSize: "56px", fontWeight: 400, letterSpacing: "-0.03em", lineHeight: 1.15 }}>
              The Hypotheses
            </h2>
            <p className="mb-4">
              Collaborating closely with my Product Manager, we took these discovery insights and defined two core hypotheses to test:
            </p>
            <div className="bg-white border border-slate-200 p-6 rounded-2xl mb-4 shadow-sm">
              <h3 className="font-bold text-slate-800 mb-2">Hypothesis 1</h3>
              <p>If we present Click & Collect more prominently in the delivery options and highlight our delivery time of 2-4 days in home delivery, we will see an increase in customers completing their orders with the confidence they have chosen the right delivery option.</p>
            </div>
            <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
              <h3 className="font-bold text-slate-800 mb-2">Hypothesis 2</h3>
              <p>If we prominently reinforce the delivery lead time and benefits of the chosen C&C immediately after a customer selects InPost or Royal Mail, then drop-off between delivery selection and order completion will decrease, because the current experience offers little reassurance and post-choice doubt causes customers to abandon.</p>
            </div>
          </section>

          <section>
            <h2 className="text-slate-900 mb-6" style={{ fontSize: "56px", fontWeight: 400, letterSpacing: "-0.03em", lineHeight: 1.15 }}>
              Design time: Wireframes
            </h2>
            <p className="mb-8">
              &quot;Using Miro, I quickly ideated towards the future vision of the delivery selection. I then iteratively broke it down into testable chunks to reduce risk and dev effort.&quot;
            </p>

            <h3 className="text-2xl font-bold text-slate-800 mb-4">Hypothesis 1</h3>
            <div className="w-full h-[400px] bg-slate-200 rounded-xl flex items-center justify-center text-slate-400 mb-8">Image Placeholder</div>

            <h3 className="text-2xl font-bold text-slate-800 mb-4">Hypothesis 2</h3>
            <p className="mb-4">
              &quot;As this was a lower-risk and much smaller update, we decided we didn’t need to break the solution down any further. With this in mind, to save time on this particular update, I opted to head straight into Figma.&quot;
            </p>
            <div className="w-full h-[400px] bg-slate-200 rounded-xl flex items-center justify-center text-slate-400">Image Placeholder</div>
          </section>

          <section>
            <h2 className="text-slate-900 mb-6" style={{ fontSize: "56px", fontWeight: 400, letterSpacing: "-0.03em", lineHeight: 1.15 }}>
              Outtakes & Exploration
            </h2>
            <p className="mb-4">
              One of the reasons I love working in Miro is that it removes all constraints from my thinking and allows me to ideate at pace. And as we all know... not all ideas are winners!
            </p>
            <div className="w-full h-[400px] bg-slate-200 rounded-xl flex items-center justify-center text-slate-400 mb-8">Image Placeholder</div>
            <p>
              After some rapid, focused ideation, I had a clear vision and direction for our two hypotheses. The Figma files were polished and ready for a final review and handover session with our developers.
            </p>
          </section>

          <section>
            <h2 className="text-slate-900 mb-6" style={{ fontSize: "56px", fontWeight: 400, letterSpacing: "-0.03em", lineHeight: 1.15 }}>
              The Results
            </h2>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">CRO: Hypothesis 1</h3>
            <div className="w-full h-[400px] bg-slate-200 rounded-xl flex items-center justify-center text-slate-400 mb-8">Image Placeholder</div>

            <h3 className="text-2xl font-bold text-slate-800 mb-4">CRO: Hypothesis 2</h3>
            <div className="w-full h-[400px] bg-slate-200 rounded-xl flex items-center justify-center text-slate-400">Image Placeholder</div>
          </section>

          <section>
            <h2 className="text-slate-900 mb-6" style={{ fontSize: "56px", fontWeight: 400, letterSpacing: "-0.03em", lineHeight: 1.15 }}>
              Conclusion
            </h2>
            <p className="mb-4">
              Ultimately, the real success story of this project wasn&apos;t just the measurable bump in conversion. It was how we effectively connected our overarching product vision to iterative testing. For Hypothesis 1, we broke the vision down into testable chunks to de-risk the effort and incrementally prove the commercial value.
            </p>
            <p className="mb-4">
              But working lean also means knowing when to trust your data-backed intuition. We didn&apos;t want to get bogged down in endless testing cycles for every single update. For Hypothesis 2, the data and our teardown insights were so clear that we had the confidence to make a slightly bigger, direct change without needing to slice it down further.
            </p>
            <p>
              Because of this balanced approach, both winning experiments moved straight into the engineering implementation track—delivering a simplified customer experience right when the business needed it most.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}

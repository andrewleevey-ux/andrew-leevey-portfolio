import { Truck, LineChart, LayoutTemplate, ArrowRight, Briefcase, FileText, User, Lightbulb, GitBranch, PenTool } from "lucide-react";
import Link from "next/link";
import AndrewCursor from "../components/AndrewCursor";
import GuestCursor from "../components/GuestCursor";
import DynamicYear from "../components/DynamicYear";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans text-lg leading-relaxed selection:bg-slate-200 dot-grid pb-24">
      {/* Floating Navigation */}
      <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6 bg-white/80 backdrop-blur-md px-6 py-3 rounded-full shadow-lg border border-slate-200 z-50">
        <Link href="#work" className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
          <Briefcase size={18} /> Work
        </Link>
        <Link href="#cv" className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
          <FileText size={18} /> CV
        </Link>
        <Link href="#about" className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
          <User size={18} /> About
        </Link>
      </nav>

      <GuestCursor />
      <main className="max-w-5xl mx-auto px-6 pt-20 pb-24">
        {/* Hero Section */}
        <section className="relative max-w-3xl mb-32">
          <AndrewCursor />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="font-handwriting text-blue-600 text-6xl sm:text-7xl md:text-8xl">Andrew Leevey</span> <br className="hidden sm:block" />
            <span className="text-3xl sm:text-4xl md:text-5xl text-slate-900 block mt-4" style={{ letterSpacing: '-0.03em', lineHeight: 1.15 }}>Lead Product Designer</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl font-medium text-slate-700 mb-6" style={{ letterSpacing: '-0.03em', lineHeight: 1.15 }}>
            Bridging the gap between Service Design and Commercial Strategy.
          </h2>
          <p className="max-w-2xl text-lg sm:text-xl text-slate-600 leading-relaxed">
            I am a Lead Product Designer who operates as a commercial advisor. I focus on translating complex business logic into simple, frictionless user journeys that directly boost conversion and retention.
          </p>
        </section>

        {/* Key Skills Section */}
        <section className="mb-32">
          <div className="flex items-center justify-center mb-12">
            <h2 className="font-sans text-slate-900 text-center w-full" style={{ fontSize: '56px', fontWeight: 400, letterSpacing: '-0.03em', lineHeight: 1.15 }}>Lean Product Process</h2>
          </div>
          <div className="relative flex flex-col md:flex-row items-center justify-center gap-4">
            {/* Whiteboard Annotations */}
            <div className="absolute -top-8 left-0 md:-left-8 text-red-500 font-handwriting text-2xl transform -rotate-6 hidden sm:block">Start here</div>
            <div className="absolute -bottom-10 right-0 md:-right-4 text-blue-500 font-handwriting text-2xl transform rotate-3 hidden sm:block">Validate first!</div>

            {/* Node 1 */}
            <div className="bg-white border border-slate-200 rounded-xl shadow-md p-6 flex flex-col items-center gap-3 w-full md:w-auto">
              <Lightbulb className="text-amber-500 mb-1" />
              <h4 className="font-medium text-slate-900 text-center" style={{ letterSpacing: '-0.03em', lineHeight: 1.15 }}>Problem Framing</h4>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="bg-slate-100 text-slate-600 text-xs font-medium px-2 py-1 rounded-full">Workshop Facilitation</span>
                <span className="bg-slate-100 text-slate-600 text-xs font-medium px-2 py-1 rounded-full">Discovery</span>
                <span className="bg-slate-100 text-slate-600 text-xs font-medium px-2 py-1 rounded-full">Journey Mapping</span>
              </div>
            </div>

            <ArrowRight className="text-slate-300 rotate-90 md:rotate-0 flex-shrink-0 w-8 h-8" size={32} />

            {/* Node 2 */}
            <div className="bg-white border border-slate-200 rounded-xl shadow-md p-6 flex flex-col items-center gap-3 w-full md:w-auto">
              <GitBranch className="text-blue-500 mb-1" />
              <h4 className="font-medium text-slate-900 text-center" style={{ letterSpacing: '-0.03em', lineHeight: 1.15 }}>Service Architecture</h4>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="bg-slate-100 text-slate-600 text-xs font-medium px-2 py-1 rounded-full">Flow Mapping</span>
                <span className="bg-slate-100 text-slate-600 text-xs font-medium px-2 py-1 rounded-full">Logic Definition</span>
                <span className="bg-slate-100 text-slate-600 text-xs font-medium px-2 py-1 rounded-full">Blueprinting</span>
              </div>
            </div>

            <ArrowRight className="text-slate-300 rotate-90 md:rotate-0 flex-shrink-0 w-8 h-8" size={32} />

            {/* Node 3 */}
            <div className="bg-white border border-slate-200 rounded-xl shadow-md p-6 flex flex-col items-center gap-3 w-full md:w-auto">
              <PenTool className="text-purple-500 mb-1" />
              <h4 className="font-medium text-slate-900 text-center" style={{ letterSpacing: '-0.03em', lineHeight: 1.15 }}>Interaction Design</h4>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="bg-slate-100 text-slate-600 text-xs font-medium px-2 py-1 rounded-full">Rapid Prototyping</span>
                <span className="bg-slate-100 text-slate-600 text-xs font-medium px-2 py-1 rounded-full">Wireframing</span>
                <span className="bg-slate-100 text-slate-600 text-xs font-medium px-2 py-1 rounded-full">UX Design</span>
              </div>
            </div>

            <ArrowRight className="text-slate-300 rotate-90 md:rotate-0 flex-shrink-0 w-8 h-8" size={32} />

            {/* Node 4 */}
            <div className="bg-white border border-slate-200 rounded-xl shadow-md p-6 flex flex-col items-center gap-3 w-full md:w-auto">
              <LineChart className="text-emerald-500 mb-1" />
              <h4 className="font-medium text-slate-900 text-center" style={{ letterSpacing: '-0.03em', lineHeight: 1.15 }}>Commercial Iteration</h4>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="bg-slate-100 text-slate-600 text-xs font-medium px-2 py-1 rounded-full">CRO</span>
                <span className="bg-slate-100 text-slate-600 text-xs font-medium px-2 py-1 rounded-full">A/B Testing</span>
                <span className="bg-slate-100 text-slate-600 text-xs font-medium px-2 py-1 rounded-full">Analytics</span>
              </div>
            </div>
          </div>
        </section>

        {/* Deep Dive Section */}
        <section className="max-w-6xl mx-auto mb-32">
          <div className="flex items-center justify-center mb-12">
            <h2 className="font-sans text-slate-900 text-center w-full" style={{ fontSize: '56px', fontWeight: 400, letterSpacing: '-0.03em', lineHeight: 1.15 }}>Case Studies</h2>
          </div>
          <div className="flex flex-col gap-12">
            {/* Deep Dive Card 1 */}
            <div className="flex flex-col md:flex-row bg-white shadow-md border border-slate-200 rounded-3xl items-stretch overflow-hidden">
              <div className="w-full md:w-1/2 pt-8 pl-0 pb-0">
                <div className="bg-emerald-400 rounded-tr-3xl rounded-tl-none rounded-b-none h-full min-h-[250px] w-full flex items-center justify-center text-white">
                  <LayoutTemplate size={48} />
                </div>
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-8 md:p-12">
                <h3 className="text-slate-900 mb-4" style={{ fontSize: '40px', fontWeight: 400, letterSpacing: '-0.03em', lineHeight: 1.15 }}>Strategic Product Vision</h3>
                <p className="text-slate-600 mb-6 flex-grow">
                  Aligning business objectives with user needs through comprehensive research, stakeholder workshops, and clear, actionable product roadmaps that drive growth.
                </p>
                <div className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 cursor-pointer group">
                  Read more <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>

            {/* Deep Dive Card 2 */}
            <div className="flex flex-col md:flex-row bg-white shadow-md border border-slate-200 rounded-3xl items-stretch overflow-hidden">
              <div className="w-full md:w-1/2 pt-8 pl-0 pb-0">
                <div className="bg-blue-500 rounded-tr-3xl rounded-tl-none rounded-b-none h-full min-h-[250px] w-full flex items-center justify-center text-white">
                  <LineChart size={48} />
                </div>
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-8 md:p-12">
                <h3 className="text-slate-900 mb-4" style={{ fontSize: '40px', fontWeight: 400, letterSpacing: '-0.03em', lineHeight: 1.15 }}>Data-Driven Design</h3>
                <p className="text-slate-600 mb-6 flex-grow">
                  Utilizing analytics, A/B testing, and user feedback loops to continuously iterate and refine digital experiences, ensuring measurable improvements in conversion rates.
                </p>
                <div className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 cursor-pointer group">
                  Read more <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>

            {/* Deep Dive Card 3 */}
            <div className="flex flex-col md:flex-row bg-white shadow-md border border-slate-200 rounded-3xl items-stretch overflow-hidden">
              <div className="w-full md:w-1/2 pt-8 pl-0 pb-0">
                <div className="bg-pink-500 rounded-tr-3xl rounded-tl-none rounded-b-none h-full min-h-[250px] w-full flex items-center justify-center text-white">
                  <Truck size={48} />
                </div>
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-8 md:p-12">
                <h3 className="text-slate-900 mb-4" style={{ fontSize: '40px', fontWeight: 400, letterSpacing: '-0.03em', lineHeight: 1.15 }}>Service Ecosystems</h3>
                <p className="text-slate-600 mb-6 flex-grow">
                  Mapping out end-to-end service blueprints to identify friction points across both digital touchpoints and operational processes, delivering a unified customer journey.
                </p>
                <div className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 cursor-pointer group">
                  Read more <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-32 overflow-hidden">
          <div className="flex items-center justify-center mb-12">
            <h2 className="font-sans text-slate-900 text-center w-full" style={{ fontSize: '56px', fontWeight: 400, letterSpacing: '-0.03em', lineHeight: 1.15 }}>What people say</h2>
          </div>

          <div
            className="relative w-full overflow-hidden flex items-center py-4"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
            }}
          >
            <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-8 pr-8">
              {/* Duplicate array of testimonials for infinite scroll effect */}
              {[1, 2].map((setIndex) => (
                <div key={setIndex} className="flex gap-8">
                  <div className="flex-shrink-0 w-80 bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                    <p className="text-slate-600 mb-6 italic leading-relaxed">
                      &quot;Andrew transformed our checkout flow, increasing conversion by 15% in just two weeks. His ability to connect user needs to business goals is unparalleled.&quot;
                    </p>
                    <div>
                      <p className="font-semibold text-slate-900">Sarah Jenkins</p>
                      <p className="text-sm text-slate-500">VP of Product, RetailCo</p>
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-80 bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                    <p className="text-slate-600 mb-6 italic leading-relaxed">
                      &quot;He doesn&apos;t just design screens; he designs entire service ecosystems. Our operational efficiency skyrocketed after his strategic deep dive.&quot;
                    </p>
                    <div>
                      <p className="font-semibold text-slate-900">Marcus Wright</p>
                      <p className="text-sm text-slate-500">COO, LogisticsPlus</p>
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-80 bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                    <p className="text-slate-600 mb-6 italic leading-relaxed">
                      &quot;A rare hybrid of creative design thinking and sharp commercial acumen. Andrew is the advisory partner every leadership team needs.&quot;
                    </p>
                    <div>
                      <p className="font-semibold text-slate-900">Elena Rostova</p>
                      <p className="text-sm text-slate-500">Founder & CEO, TechStart</p>
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-80 bg-white p-8 rounded-xl shadow-sm border border-slate-200">
                    <p className="text-slate-600 mb-6 italic leading-relaxed">
                      &quot;His facilitation skills brought our engineering and design teams together like never before. The friction is gone, and delivery is faster.&quot;
                    </p>
                    <div>
                      <p className="font-semibold text-slate-900">David Chen</p>
                      <p className="text-sm text-slate-500">CTO, FinServe</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section id="work">
          <div className="flex items-center justify-center mb-12">
            <h2 className="font-sans text-slate-900 text-center w-full" style={{ fontSize: '56px', fontWeight: 400, letterSpacing: '-0.03em', lineHeight: 1.15 }}>Placeholder Title</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group bg-yellow-100 p-8 shadow-md shadow-black/10 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col aspect-square -rotate-2">
              <div className="w-12 h-12 bg-yellow-200/50 rounded-xl flex items-center justify-center mb-6 text-slate-700 group-hover:bg-slate-800 group-hover:text-white transition-colors">
                <Truck size={24} />
              </div>
              <h4 className="text-xl font-medium text-slate-900 mb-3" style={{ letterSpacing: '-0.03em', lineHeight: 1.15 }}>2-Person Delivery</h4>
              <p className="text-slate-700 leading-relaxed flex-grow">
                Mapping the end-to-end journey connecting the digital checkout to physical door-drop logistics.
              </p>
              <div className="mt-8 flex items-center text-sm font-medium text-slate-900 group-hover:text-slate-700 cursor-pointer">
                View study <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </div>
            </div>

            {/* Card 2 */}
            <div className="group bg-blue-100 p-8 shadow-md shadow-black/10 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col aspect-square rotate-1">
              <div className="w-12 h-12 bg-blue-200/50 rounded-xl flex items-center justify-center mb-6 text-slate-700 group-hover:bg-slate-800 group-hover:text-white transition-colors">
                <LineChart size={24} />
              </div>
              <h4 className="text-xl font-medium text-slate-900 mb-3" style={{ letterSpacing: '-0.03em', lineHeight: 1.15 }}>CRO Strategy</h4>
              <p className="text-slate-700 leading-relaxed flex-grow">
                Running rapid, hypothesis-driven testing cycles to de-risk delivery and lift online revenue.
              </p>
              <div className="mt-8 flex items-center text-sm font-medium text-slate-900 group-hover:text-slate-700 cursor-pointer">
                View study <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </div>
            </div>

            {/* Card 3 */}
            <div className="group bg-pink-100 p-8 shadow-md shadow-black/10 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col aspect-square rotate-2">
              <div className="w-12 h-12 bg-pink-200/50 rounded-xl flex items-center justify-center mb-6 text-slate-700 group-hover:bg-slate-800 group-hover:text-white transition-colors">
                <LayoutTemplate size={24} />
              </div>
              <h4 className="text-xl font-medium text-slate-900 mb-3" style={{ letterSpacing: '-0.03em', lineHeight: 1.15 }}>UX Problem Framing</h4>
              <p className="text-slate-700 leading-relaxed flex-grow">
                Building a bespoke internal framework that standardised product discovery and cut friction between design and engineering.
              </p>
              <div className="mt-8 flex items-center text-sm font-medium text-slate-900 group-hover:text-slate-700 cursor-pointer">
                View study <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 mt-20">
        <div className="max-w-5xl mx-auto px-6 py-8 flex items-center justify-between text-sm text-slate-500">
          <DynamicYear />
        </div>
      </footer>
    </div>
  );
}

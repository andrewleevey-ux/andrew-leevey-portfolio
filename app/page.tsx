import { Truck, LineChart, LayoutTemplate, ArrowRight, Briefcase, FileText, User } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-slate-200 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] pb-24">
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

      <main className="max-w-5xl mx-auto px-6 pt-20 pb-24">
        {/* Hero Section */}
        <section className="max-w-3xl mb-32">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6 relative">
            <span className="font-[family-name:var(--font-caveat)] text-blue-600 inline-block rotate-[-2deg] mr-2">Andrew Leevey</span> - Lead Product Designer

            {/* Multiplayer Cursor */}
            <div className="absolute -top-6 left-1/4 sm:left-1/3 flex flex-col items-start z-10 pointer-events-none animate-bounce">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-md text-red-500 fill-current">
                <path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87c.45 0 .67-.54.35-.85L6.35 2.86a.5.5 0 0 0-.85.35Z" />
              </svg>
              <div className="bg-red-500 text-white text-xs font-semibold px-2 py-0.5 rounded-sm shadow-sm whitespace-nowrap ml-3 -mt-1">
                Andrew (Lead)
              </div>
            </div>
          </h1>
          <h2 className="text-2xl sm:text-3xl font-medium text-slate-700 mb-6 leading-snug">
            Bridging the gap between Service Design and Commercial Strategy.
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl">
            I am a Lead Product Designer who operates as a commercial advisor. I focus on translating complex business logic into simple, frictionless user journeys that directly boost conversion and retention.
          </p>
        </section>

        {/* Case Studies Section */}
        <section id="work">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-4xl font-bold tracking-tight text-slate-900 font-[family-name:var(--font-caveat)] rotate-[-1deg]">Case Studies</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group bg-yellow-100 p-8 shadow-md shadow-black/10 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col aspect-square -rotate-2">
              <div className="w-12 h-12 bg-yellow-200/50 rounded-xl flex items-center justify-center mb-6 text-slate-700 group-hover:bg-slate-800 group-hover:text-white transition-colors">
                <Truck size={24} />
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-3">2-Person Delivery</h4>
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
              <h4 className="text-xl font-semibold text-slate-900 mb-3">CRO Strategy</h4>
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
              <h4 className="text-xl font-semibold text-slate-900 mb-3">UX Problem Framing</h4>
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
          <p>© 2024 Andrew Leevey. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

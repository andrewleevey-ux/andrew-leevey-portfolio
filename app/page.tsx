import { Truck, LineChart, LayoutTemplate, ArrowRight, Briefcase, FileText, User } from "lucide-react";
import Link from "next/link";
import AndrewCursor from "../components/AndrewCursor";
import GuestCursor from "../components/GuestCursor";
import DynamicYear from "../components/DynamicYear";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-slate-200 dot-grid pb-24">
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
            <span className="text-3xl sm:text-4xl md:text-5xl text-slate-900 block mt-4">Lead Product Designer</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl font-medium text-slate-700 mb-6 leading-snug">
            Bridging the gap between Service Design and Commercial Strategy.
          </h2>
          <p className="max-w-2xl text-lg sm:text-xl text-slate-600 leading-relaxed">
            I am a Lead Product Designer who operates as a commercial advisor. I focus on translating complex business logic into simple, frictionless user journeys that directly boost conversion and retention.
          </p>
        </section>

        {/* Key Skills Section */}
        <section className="mb-32">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-4xl sm:text-5xl font-handwriting text-slate-900">Key Skills</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-yellow-100 aspect-square p-8 rounded shadow-md transform -rotate-2 hover:rotate-0 transition-transform flex items-center justify-center text-center">
              <h4 className="text-2xl font-bold text-slate-800 font-handwriting">Flow Mapping</h4>
            </div>
            <div className="bg-blue-100 aspect-square p-8 rounded shadow-md transform rotate-1 hover:rotate-0 transition-transform flex items-center justify-center text-center">
              <h4 className="text-2xl font-bold text-slate-800 font-handwriting">Facilitation</h4>
            </div>
            <div className="bg-pink-100 aspect-square p-8 rounded shadow-md transform -rotate-1 hover:rotate-0 transition-transform flex items-center justify-center text-center">
              <h4 className="text-2xl font-bold text-slate-800 font-handwriting">Problem Framing</h4>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section id="work">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-4xl sm:text-5xl font-handwriting text-slate-900">Case Studies</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md hover:border-slate-300 transition-all flex flex-col h-full">
              <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-6 text-slate-700 group-hover:bg-slate-800 group-hover:text-white transition-colors">
                <Truck size={24} />
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-3">2-Person Delivery</h4>
              <p className="text-slate-600 leading-relaxed flex-grow">
                Mapping the end-to-end journey connecting the digital checkout to physical door-drop logistics.
              </p>
              <div className="mt-8 flex items-center text-sm font-medium text-slate-900 group-hover:text-slate-700 cursor-pointer">
                View study <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </div>
            </div>

            {/* Card 2 */}
            <div className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md hover:border-slate-300 transition-all flex flex-col h-full">
              <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-6 text-slate-700 group-hover:bg-slate-800 group-hover:text-white transition-colors">
                <LineChart size={24} />
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-3">CRO Strategy</h4>
              <p className="text-slate-600 leading-relaxed flex-grow">
                Running rapid, hypothesis-driven testing cycles to de-risk delivery and lift online revenue.
              </p>
              <div className="mt-8 flex items-center text-sm font-medium text-slate-900 group-hover:text-slate-700 cursor-pointer">
                View study <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </div>
            </div>

            {/* Card 3 */}
            <div className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md hover:border-slate-300 transition-all flex flex-col h-full">
              <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-6 text-slate-700 group-hover:bg-slate-800 group-hover:text-white transition-colors">
                <LayoutTemplate size={24} />
              </div>
              <h4 className="text-xl font-semibold text-slate-900 mb-3">UX Problem Framing</h4>
              <p className="text-slate-600 leading-relaxed flex-grow">
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

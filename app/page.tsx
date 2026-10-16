"use client";

import { useState } from "react";
import { Truck, LineChart, LayoutTemplate, ArrowRight, Users } from "lucide-react";
import Image from "next/image";
import AndrewCursor from "../components/AndrewCursor";
import GuestCursor from "../components/GuestCursor";
import DynamicYear from "../components/DynamicYear";
import CaseStudyModal from "../components/CaseStudyModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans text-lg leading-relaxed selection:bg-slate-200 dot-grid pb-24">
      <GuestCursor />
      <main className="max-w-5xl mx-auto px-6 pt-20 pb-24">
        {/* Hero Section */}
        <section className="relative w-full mb-32">
          <AndrewCursor />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="font-handwriting text-blue-600 text-6xl sm:text-7xl md:text-8xl">Andrew Leevey</span> <br className="hidden sm:block" />
            <span className="text-3xl sm:text-4xl md:text-5xl text-slate-900 block mt-4" style={{ letterSpacing: '-0.03em', lineHeight: 1.15 }}>Lead Product Designer</span>
          </h1>
          <div className="flex flex-col md:flex-row items-center gap-6 p-8 bg-[#f9f3c6] border-2 border-amber-300 rounded-3xl max-w-3xl mx-auto">
            <Image src="/images/lightbbulb.png" alt="Lightbulb" width={120} height={120} className="shrink-0" />
            <div>
              <h3 className="text-3xl font-semibold text-slate-900 tracking-[-0.03em] leading-[1.15] mb-3">About me...</h3>
              <p className="text-slate-800 text-base leading-relaxed">
                I am a lead level product Designer who operates as a commercial advisor. I focus on translating complex business logic into simple, frictionless user journeys that directly improve conversion and retention.
              </p>
            </div>
          </div>
        </section>

        {/* Key Skills Section */}
        <section className="mb-32">
          <div className="flex items-center justify-center mb-12">
            <h2 className="font-sans text-slate-900 text-center w-full" style={{ fontSize: '56px', fontWeight: 400, letterSpacing: '-0.03em', lineHeight: 1.15 }}>Lean Product Process</h2>
          </div>
          <div className="w-[100vw] relative left-1/2 -translate-x-1/2 max-w-7xl px-6">
            <div className="relative w-full">
              <Image
                src="/images/lean process double dimond.svg"
                alt="Lean Process Double Diamond"
                width={1200}
                height={600}
                className="w-full h-auto"
                priority
              />
              <Image
                src="/images/mirologo_dd.png"
                alt="Miro Logo"
                width={89}
                height={89}
                className="absolute left-[32%] top-[50%] -translate-x-1/2 -translate-y-1/2 w-[89px] h-[89px] object-contain"
              />
              <Image
                src="/images/figmalogo_dd.png"
                alt="Figma Logo"
                width={50}
                height={75}
                className="absolute left-[68%] top-[50%] -translate-x-1/2 -translate-y-1/2 w-[50px] h-[75px] object-contain"
              />
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
                <div className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 cursor-pointer group" onClick={() => setIsModalOpen(true)}>
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
                <div className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 cursor-pointer group" onClick={() => setIsModalOpen(true)}>
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
                <div className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 cursor-pointer group" onClick={() => setIsModalOpen(true)}>
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
                <div key={setIndex} className="flex gap-8 items-stretch">
                  <div className="flex-shrink-0 w-96 bg-white p-8 rounded-xl shadow-sm border border-slate-200 flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-white border border-slate-200 rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center">
                        <Users className="text-blue-500 w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-sm">Suzanne Kenwright</div>
                        <div className="text-xs text-slate-500">Lead Product Manager | The Very Group</div>
                      </div>
                    </div>
                    <div className="border-b border-slate-100 mb-4"></div>
                    <p className="text-slate-600 italic leading-relaxed text-sm">
                      &quot;Andy&apos;s done a brilliant job on the lockers journey in checkout. His knowledge and support throughout have made a massive difference. As the journey evolved and new inputs came in, he took everything in his stride and thoughtfully incorporated the changes into scope without losing momentum. Thanks so much Andy, your contribution has been exceptional, as always.&quot;
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-96 bg-white p-8 rounded-xl shadow-sm border border-slate-200 flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-white border border-slate-200 rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center">
                        <Users className="text-blue-500 w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-sm">Elisabeth Mancini</div>
                        <div className="text-xs text-slate-500">UX Manager | The Very Group</div>
                      </div>
                    </div>
                    <div className="border-b border-slate-100 mb-4"></div>
                    <p className="text-slate-600 italic leading-relaxed text-sm">
                      &quot;Thanks so much for your continued support on the Loyalty programme and its evolution. Your dedication, professionalism and thoughtful input have been invaluable in helping us shape the direction of the work and keep momentum moving forward. It&apos;s always a pleasure working with you.&quot;
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-96 bg-white p-8 rounded-xl shadow-sm border border-slate-200 flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-white border border-slate-200 rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center">
                        <Users className="text-blue-500 w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-sm">Lee Somers</div>
                        <div className="text-xs text-slate-500">Lead Product Manager | The Very Group</div>
                      </div>
                    </div>
                    <div className="border-b border-slate-100 mb-4"></div>
                    <p className="text-slate-600 italic leading-relaxed text-sm">
                      &quot;Andy, I just wanted to recognise and thank you for the level of thought, detail and effort you&apos;ve put into designing the new Video Hero Fuse component for web and app. You&apos;ve left no stone unturned, deeply considering and balancing both customer and business needs, and managed to keep a huge group of stakeholders well informed and happy along the way. Fantastic work that&apos;s very much appreciated&quot;
                    </p>
                  </div>

                  <div className="flex-shrink-0 w-96 bg-white p-8 rounded-xl shadow-sm border border-slate-200 flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-white border border-slate-200 rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center">
                        <Users className="text-blue-500 w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-sm">Suzanne Kenwright</div>
                        <div className="text-xs text-slate-500">Lead Product Manager | The Very Group</div>
                      </div>
                    </div>
                    <div className="border-b border-slate-100 mb-4"></div>
                    <p className="text-slate-600 italic leading-relaxed text-sm">
                      &quot;Andy&apos;s done a brilliant job on the lockers journey in checkout. His knowledge and support throughout have made a massive difference. As the journey evolved and new inputs came in, he took everything in his stride and thoughtfully incorporated the changes into scope without losing momentum. Thanks so much Andy, your contribution has been exceptional, as always.&quot;
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-96 bg-white p-8 rounded-xl shadow-sm border border-slate-200 flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-white border border-slate-200 rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center">
                        <Users className="text-blue-500 w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-sm">Elisabeth Mancini</div>
                        <div className="text-xs text-slate-500">UX Manager | The Very Group</div>
                      </div>
                    </div>
                    <div className="border-b border-slate-100 mb-4"></div>
                    <p className="text-slate-600 italic leading-relaxed text-sm">
                      &quot;Thanks so much for your continued support on the Loyalty programme and its evolution. Your dedication, professionalism and thoughtful input have been invaluable in helping us shape the direction of the work and keep momentum moving forward. It&apos;s always a pleasure working with you.&quot;
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-96 bg-white p-8 rounded-xl shadow-sm border border-slate-200 flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-white border border-slate-200 rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center">
                        <Users className="text-blue-500 w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-sm">Lee Somers</div>
                        <div className="text-xs text-slate-500">Lead Product Manager | The Very Group</div>
                      </div>
                    </div>
                    <div className="border-b border-slate-100 mb-4"></div>
                    <p className="text-slate-600 italic leading-relaxed text-sm">
                      &quot;Andy, I just wanted to recognise and thank you for the level of thought, detail and effort you&apos;ve put into designing the new Video Hero Fuse component for web and app. You&apos;ve left no stone unturned, deeply considering and balancing both customer and business needs, and managed to keep a huge group of stakeholders well informed and happy along the way. Fantastic work that&apos;s very much appreciated&quot;
                    </p>
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
        <CaseStudyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </main>

      <footer className="border-t border-slate-200 mt-20">
        <div className="max-w-5xl mx-auto px-6 py-8 flex items-center justify-between text-sm text-slate-500">
          <DynamicYear />
        </div>
      </footer>
    </div>
  );
}

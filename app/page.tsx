"use client";

import { useState } from "react";
import { Truck, LineChart, LayoutTemplate, ArrowRight, Users } from "lucide-react";
import Image from "next/image";
import CollaboratorCursor from "../components/CollaboratorCursor";
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
        <section className="relative w-full mb-32 flex flex-col items-center text-center">
          <CollaboratorCursor
            name="Andrew"
            role="Lead"
            color="#ef4444"
            pathCoordinates={{
              x: [0, -100, -100, -250, -250, -50, -50, 150],
              y: [0, 200, 200, 500, 500, 750, 750, 600],
            }}
            initialPosition={{ top: "-20px", left: "80%" }}
          />
          <h1 className="tracking-tight mb-16 relative inline-block">
            <Image
              src="/images/startflag.svg"
              alt="Start Flag"
              width={140}
              height={140}
              className="absolute -top-6 left-[-60px] md:left-[-160px] w-[120px] md:w-[140px] -rotate-12 drop-shadow-[2px_4px_6px_rgba(0,0,0,0.15)] z-10"
            />
            <span className="font-handwriting font-bold text-blue-600 text-8xl md:text-[8rem] lg:text-[10rem]">Andrew Leevey</span> <br className="hidden sm:block" />
            <span className="text-2xl md:text-3xl font-medium text-slate-800 block mt-4" style={{ letterSpacing: '-0.03em', lineHeight: 1.15 }}>Lead Product Designer & CRO specialist</span>
          </h1>
          <div className="flex flex-col md:flex-row items-center gap-6 p-8 bg-[#f9f3c6] border-2 border-amber-300 rounded-3xl max-w-3xl mx-auto text-left">
            <Image src="/images/lightbbulb.png" alt="Lightbulb" width={120} height={120} className="shrink-0" />
            <div>
              <h3 className="text-3xl font-semibold text-slate-900 tracking-[-0.03em] leading-[1.15] mb-3">About me...</h3>
              <p className="text-slate-800 text-base leading-relaxed">
                I am a lead level product Designer who operates as a commercial advisor. I focus on translating complex business logic into simple, frictionless user journeys that directly improve conversion and retention.
              </p>
            </div>
          </div>
        </section>

        {/* Lean Product Process Section */}
        <section className="mb-32">
          <div className="flex items-center justify-center mb-12">
            <h2 className="font-sans text-slate-900 text-center w-full" style={{ fontSize: '56px', fontWeight: 400, letterSpacing: '-0.03em', lineHeight: 1.15 }}>Lean Product Process</h2>
          </div>
          <div className="-mx-6 md:-mx-16 lg:-mx-32 relative overflow-visible">
            <Image
              src="/images/lean process double diamond.svg"
              alt="Lean Product Process Double Diamond"
              width={1920}
              height={1080}
              className="w-full h-auto"
            />
            {/* Turtle Rocket Sticker */}
            <Image
              src="/images/turtlerocket.svg"
              alt="Turtle Rocket Sticker"
              width={120}
              height={120}
              className="absolute top-1 lg:-top-6 right-8 md:-right-8 lg:-right-12 z-10 w-[70px] md:w-[120px] h-auto rotate-12 drop-shadow-[3px_5px_8px_rgba(0,0,0,0.15)]"
            />
          </div>
        </section>

        {/* Deep Dive Section */}
        <section className="max-w-6xl mx-auto mb-32 relative">
          <CollaboratorCursor
            name="Mike"
            role="Developer"
            color="#9823F8"
            pathCoordinates={{
              x: [0, 600, 600, -200, -200, 400, 400, 0],
              y: [0, 80, 80, -50, -50, 120, 120, 0],
            }}
            initialPosition={{ top: "20%", left: "50%" }}
            delay={2}
          />
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
        <section className="relative mb-32 overflow-hidden">
          <CollaboratorCursor
            name="Lis"
            role="UX manager"
            color="#3b82f6"
            pathCoordinates={{
              x: [0, 50, 80, 40, -20, 0],
              y: [0, -30, 20, 60, 10, 0],
            }}
            initialPosition={{ top: "3rem", left: "-2rem" }}
            delay={2}
          />
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


        {/* Experience Section */}
        <section id="experience" className="max-w-6xl mx-auto px-6 mb-32">
          <div className="flex flex-col items-center justify-center mb-16">
            <h2 className="font-sans text-slate-900 text-center w-full" style={{ fontSize: '56px', fontWeight: 400, letterSpacing: '-0.03em', lineHeight: 1.15 }}>
              Experience
            </h2>
            <h3 className="text-slate-600 text-center mt-2 text-xl font-medium">
              My Road to UX designer & CRO specialist
            </h3>
          </div>

          <div className="relative">
            {/* Timeline Start Node */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-4 h-4 rounded-full bg-slate-300 z-10"></div>

            {/* Vertical Spine */}
            <div className="absolute left-1/2 top-0 bottom-0 border-l-2 border-dashed border-slate-400 -translate-x-1/2"></div>

            <div className="flex flex-col gap-12 mt-8">
              {/* Block 1: Eurocamp */}
              <div className="flex flex-row items-center w-full">
                <div className="w-1/2 pr-12 flex justify-end">
                  <div className="bg-green-100 p-6 rounded-md shadow-md rotate-1 max-w-sm">
                    <div className="font-bold text-slate-900 mb-1">2012 - 2014 | Web Designer</div>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      Here I progressed from a Junior to a Mid-weight Web Designer, where my journey into web and UX design really started. I was able to work on multiple projects including a website and platform re-design. I made my mark here by creating a responsive email modular system. This (or the UX methodologies behind this), has made an appearance in every role I&apos;ve had since.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-[100px] h-[100px] rounded-full flex items-center justify-center border-4 border-white shadow-sm z-10 bg-[#78B92B]">
                  <Image src="/images/1-eurocamp-logo.jpg" alt="Eurocamp Logo" width={70} height={70} className="object-contain rounded-full" />
                </div>
                <div className="w-1/2 pl-12"></div>
              </div>

              {/* Block 2: Love2shop */}
              <div className="flex flex-row-reverse items-center w-full">
                <div className="w-1/2 pl-12 flex justify-start">
                  <div className="bg-blue-100 p-6 rounded-md shadow-md -rotate-2 max-w-sm">
                    <div className="font-bold text-slate-900 mb-1">2014 - 2016 | UX Designer</div>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      Working under Parkgroup which housed love2shop, Park & HighStreet Vouchers gave me a lot of room to grow and refine my process. Here I was able to implement lean UX documentation and lead the redesign of both Park Savings and HighStreetVouchers&apos; websites. I performed in-house user testing and utilised testing programs like Hotjar and Optimizely.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-[100px] h-[100px] rounded-full flex items-center justify-center border-4 border-white shadow-sm z-10 bg-white">
                  <Image src="/images/2-love2shop-logo.jpg" alt="Love2shop Logo" width={70} height={70} className="object-contain rounded-full" />
                </div>
                <div className="w-1/2 pr-12"></div>
              </div>

              {/* Block 3: Iceland */}
              <div className="flex flex-row items-center w-full">
                <div className="w-1/2 pr-12 flex justify-end">
                  <div className="bg-red-100 p-6 rounded-md shadow-md rotate-2 max-w-sm">
                    <div className="font-bold text-slate-900 mb-1">2016 - 2020 | UXD & CRO manager</div>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      During my time at Iceland I&apos;ve had the opportunity to work on the full redesign of their ecommerce site from start to finish. From there I was able to lead UX in a specific CRO scrum team that involved team process mapping, gaining actionable insight, UX documentation, wireframes and click prototype user testing. The success of this team was recognised in my promotion to CRO Product owner.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-[100px] h-[100px] rounded-full flex items-center justify-center border-4 border-white shadow-sm z-10 bg-[#D01F2F]">
                  <Image src="/images/3-iceland-logo.jpg" alt="Iceland Logo" width={70} height={70} className="object-contain rounded-full" />
                </div>
                <div className="w-1/2 pl-12"></div>
              </div>

              {/* Block 4: The Very Group */}
              <div className="flex flex-row-reverse items-center w-full">
                <div className="w-1/2 pl-12 flex justify-start">
                  <div className="bg-pink-100 p-6 rounded-md shadow-md -rotate-1 max-w-sm">
                    <div className="font-bold text-slate-900 mb-1">2020 - Present | Lead Product Designer</div>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      Leading user experience and conversion rate optimization for a major UK e-commerce platform. My day-to-day involves driving design workflows and user research using Figma, Miro, ContentSquare, and Survicate, alongside facilitating UX alignments and workshop sessions. Beyond hands-on design, I manage and mentor a product designer on my squad, guiding their career progression and helping shape our team&apos;s overall design strategy and performance.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-[100px] h-[100px] rounded-full flex items-center justify-center text-white font-bold text-xs text-center border-4 border-white shadow-sm z-10 bg-[#DE007B]">
                  The Very<br/>Group
                </div>
                <div className="w-1/2 pr-12"></div>
              </div>
            </div>

            {/* Block 5: The Final Node */}
            <div className="flex justify-center mt-12 relative z-10">
              <div className="bg-[#FFDD33] p-6 rounded shadow-md shadow-black/10 -rotate-3 text-center">
                <div className="font-bold text-slate-900">My next challenge?</div>
              </div>
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

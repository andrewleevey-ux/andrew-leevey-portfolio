"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
import { Archivo_Black } from "next/font/google";
import ScrollSection from "./ScrollSection";

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
});

const ABOUT_TEXT =
  "I am a lead level product Designer who operates as a commercial advisor. I focus on translating complex business logic into simple, frictionless user journeys that directly improve conversion and retention.";

interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

function Word({ children, progress, range }: WordProps) {
  const shouldReduceMotion = useReducedMotion();
  const color = useTransform(progress, range, ["#d1d5db", "#000000"]);

  return (
    <motion.span
      style={{ color: shouldReduceMotion ? "#000000" : color }}
      className="text-gray-300"
    >
      {children}
    </motion.span>
  );
}

export default function AboutMeSection() {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const words = ABOUT_TEXT.split(" ");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "center center"],
  });

  return (
    <ScrollSection className="flex flex-col justify-between min-h-screen py-12 px-8">
      <div className="w-full flex justify-start">
        <Image
          src="/images/high5smile.png"
          alt="High-five smile"
          width={120}
          height={120}
        />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center w-full">
        <h2
          className={`${archivoBlack.className} text-black text-5xl md:text-[80px] uppercase leading-none text-center w-full mb-12`}
        >
          ABOUT ME
        </h2>
        <p
          ref={containerRef}
          className="flex flex-wrap justify-center gap-x-3 md:gap-x-4 gap-y-1 md:gap-y-2 text-3xl md:text-5xl font-medium text-center max-w-4xl leading-tight"
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word
                key={`${word}-${i}`}
                progress={scrollYProgress}
                range={[start, end]}
              >
                {word}
              </Word>
            );
          })}
        </p>
      </div>

      <div className="w-full flex justify-end">
        <Image
          src="/images/lightbulb.png"
          alt="Lightbulb"
          width={120}
          height={120}
        />
      </div>
    </ScrollSection>
  );
}

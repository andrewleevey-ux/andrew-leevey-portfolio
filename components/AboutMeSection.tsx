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

export interface TextNode {
  text: string;
  isUnderlined?: boolean;
}

export const WORDS: TextNode[] = [
  { text: "I" },
  { text: "am" },
  { text: "a" },
  { text: "lead", isUnderlined: true },
  { text: "level", isUnderlined: true },
  { text: "product" },
  { text: "Designer" },
  { text: "who" },
  { text: "operates" },
  { text: "as" },
  { text: "a" },
  { text: "commercial", isUnderlined: true },
  { text: "advisor.", isUnderlined: true },
  { text: "I" },
  { text: "focus" },
  { text: "on" },
  { text: "translating" },
  { text: "complex" },
  { text: "business" },
  { text: "logic" },
  { text: "into" },
  { text: "simple,", isUnderlined: true },
  { text: "frictionless" },
  { text: "user", isUnderlined: true },
  { text: "journeys", isUnderlined: true },
  { text: "that" },
  { text: "directly" },
  { text: "improve" },
  { text: "conversion" },
  { text: "and" },
  { text: "retention." },
];

interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  isUnderlined?: boolean;
}

function Word({ children, progress, range, isUnderlined }: WordProps) {
  const shouldReduceMotion = useReducedMotion();
  const color = useTransform(progress, range, ["#d1d5db", "#000000"]);
  const scaleX = useTransform(progress, range, [0, 1]);

  return (
    <motion.span
      style={{ color: shouldReduceMotion ? "#000000" : color }}
      className={`text-gray-300${isUnderlined ? " relative inline-block" : ""}`}
    >
      {children}
      {isUnderlined && (
        <motion.span
          style={{ scaleX: shouldReduceMotion ? 1 : scaleX }}
          className="absolute left-0 -bottom-1 w-full h-[4px] bg-[#36C5F0] origin-left"
        />
      )}
    </motion.span>
  );
}

export default function AboutMeSection() {
  const containerRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "center center"],
  });

  return (
    <ScrollSection className="flex flex-col justify-between min-h-screen py-12 px-8">
      <div className="flex-1 flex flex-col items-center justify-center max-w-4xl w-full mx-auto">
        <div className="w-full flex justify-start mb-4 md:mb-8">
          <Image
            src="/images/high5smile.png"
            alt="High-five smile"
            width={120}
            height={120}
          />
        </div>
        <h2
          className={`${archivoBlack.className} text-black text-5xl md:text-[80px] uppercase leading-none text-center w-full mb-12`}
        >
          ABOUT ME
        </h2>
        <p
          ref={containerRef}
          className="flex flex-wrap justify-center gap-x-3 md:gap-x-4 gap-y-1 md:gap-y-2 text-3xl md:text-5xl font-medium text-center max-w-4xl leading-tight"
        >
          {WORDS.map((node, i) => {
            const start = i / WORDS.length;
            const end = start + 1 / WORDS.length;
            return (
              <Word
                key={`${node.text}-${i}`}
                progress={scrollYProgress}
                range={[start, end]}
                isUnderlined={node.isUnderlined}
              >
                {node.text}
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

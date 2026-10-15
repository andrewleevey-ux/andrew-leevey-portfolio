"use client";

import React, { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";
import { motion, useAnimation } from "framer-motion";

interface DoubleDiamondProps {
  onStartChoreography?: () => void;
  onEndChoreography?: () => void;
}

export default function DoubleDiamond({
  onStartChoreography,
  onEndChoreography,
}: DoubleDiamondProps) {
  const [hasRun, setHasRun] = useState(false);
  const [activePostIt, setActivePostIt] = useState<number>(-1);
  const cursorControls = useAnimation();

  const postIts = [
    { text: "Workshop Facilitation", left: "15%", top: "25%", rotate: -3 },
    { text: "Flow Mapping", left: "35%", top: "50%", rotate: 2 },
    { text: "Rapid Prototyping", left: "60%", top: "35%", rotate: -1 },
    { text: "CRO", left: "80%", top: "60%", rotate: 4 },
  ];

  useEffect(() => {
    // If not in view, we do nothing. The handleViewportEnter starts it.
  }, []);

  const handleViewportEnter = async () => {
    if (hasRun) return;
    setHasRun(true);

    if (onStartChoreography) onStartChoreography();

    // Delay before starting
    await new Promise((r) => setTimeout(r, 1500));

    // Choreography sequence
    for (let i = 0; i < postIts.length; i++) {
      // Move cursor
      await cursorControls.start({
        left: postIts[i].left,
        top: postIts[i].top,
        transition: { duration: 0.8, ease: "easeInOut" },
      });

      // Scale up post-it
      setActivePostIt(i);

      // Pause
      await new Promise((r) => setTimeout(r, 400));
    }

    // Move cursor out of view
    await cursorControls.start({
      left: "110%",
      top: "50%",
      transition: { duration: 1, ease: "easeInOut" },
    });

    if (onEndChoreography) onEndChoreography();
  };

  return (
    <motion.div
      className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-12 relative overflow-hidden flex flex-col items-center min-h-[500px]"
      onViewportEnter={() => handleViewportEnter()}
      viewport={{ once: true, amount: 0.5 }}
    >

      {/* SVG Background for Double Diamond */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center top-[-40px]">
        <svg width="800" height="400" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Left Diamond */}
          <path d="M50 200 L250 50 L450 200 L250 350 Z" stroke="#334155" strokeWidth="4" fill="none" />
          {/* Right Diamond */}
          <path d="M350 200 L550 50 L750 200 L550 350 Z" stroke="#334155" strokeWidth="4" fill="none" />
        </svg>
      </div>

      {/* Phase Labels */}
      <div className="absolute bottom-12 w-full flex justify-between px-24 font-sans text-lg text-slate-500 italic">
        <div className="flex w-[400px] justify-around pl-4">
          <span>Discover</span>
          <span>Define</span>
        </div>
        <div className="flex w-[400px] justify-around pr-4">
          <span>Develop</span>
          <span>Deliver</span>
        </div>
      </div>

      {/* Static Visual Anchors */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 flex flex-col gap-12">
        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center border-2 border-blue-200 shadow-sm text-blue-600">
          <Sparkles size={24} />
        </div>
        <div className="w-16 h-16 bg-yellow-50 rounded-full flex items-center justify-center border-2 border-yellow-200 shadow-sm font-bold text-yellow-600 text-xl">
          M
        </div>
      </div>

      <div className="absolute right-10 top-1/2 -translate-y-1/2 flex flex-col gap-12">
        <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center border-2 border-purple-200 shadow-sm font-bold text-purple-600 text-xl">
          F
        </div>
        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center border-2 border-blue-200 shadow-sm text-blue-600">
          <Sparkles size={24} />
        </div>
      </div>

      {/* Animated Post-it Notes */}
      {postIts.map((note, idx) => (
        <motion.div
          key={idx}
          className="absolute w-24 h-24 bg-yellow-200 shadow-md flex items-center justify-center p-2 text-center"
          style={{ top: note.top, left: note.left, rotate: note.rotate }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: activePostIt >= idx ? 1 : 0,
            scale: activePostIt >= idx ? 1 : 0.5,
          }}
          transition={{ duration: 0.3 }}
        >
          <span className="font-handwriting text-slate-800 leading-tight">
            {note.text}
          </span>
        </motion.div>
      ))}

      {/* Fake Cursor for Choreography */}
      <motion.div
        className="absolute z-[9999] pointer-events-none"
        initial={{ left: "-10%", top: "50%", opacity: 0 }}
        animate={hasRun ? cursorControls : { opacity: 0 }}
        onAnimationStart={() => {
          if (!hasRun) return;
          cursorControls.set({ opacity: 1 });
        }}
      >
        <div className="relative">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-red-500 w-6 h-6"
            style={{ transform: "rotate(-15deg)" }}
          >
            <path
              d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86c.15-.15.35-.22.56-.22h7.66c.45 0 .67-.54.35-.85L5.5 3.21z"
              fill="currentColor"
              stroke="white"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
          <div className="absolute top-6 left-5 bg-red-500 text-white text-xs font-semibold px-2 py-0.5 rounded shadow-sm whitespace-nowrap">
            Andrew (Lead)
          </div>
        </div>
      </motion.div>

    </motion.div>
  );
}

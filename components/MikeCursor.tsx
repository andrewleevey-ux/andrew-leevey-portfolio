"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function MikeCursor() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      className="absolute z-[9999] pointer-events-none"
      initial={{ x: 0, y: 0 }}
      animate={{
        x: [0, 600, -200, 400, 0],
        y: [0, 80, -50, 120, 0],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        top: "20%",
        left: "50%",
      }}
    >
      <div className="relative">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          style={{ transform: "rotate(-15deg)" }}
        >
          <path
            d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86c.15-.15.35-.22.56-.22h7.66c.45 0 .67-.54.35-.85L5.5 3.21z"
            fill="#9823F8"
            stroke="white"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
        <div
          className="absolute top-6 left-5 text-white text-xs font-semibold px-2 py-0.5 rounded shadow-sm whitespace-nowrap"
          style={{ backgroundColor: "#9823F8" }}
        >
          Mike (Developer)
        </div>
      </div>
    </motion.div>
  );
}

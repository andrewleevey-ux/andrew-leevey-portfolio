"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CollaboratorCursorProps {
  name: string;
  role: string;
  color: string;
  pathCoordinates: { x: number[]; y: number[] };
  delay?: number;
  initialPosition?: { top: string | number; left: string | number };
}

export default function CollaboratorCursor({
  name,
  role,
  color,
  pathCoordinates,
  delay = 0,
  initialPosition = { top: 0, left: 0 },
}: CollaboratorCursorProps) {
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
        x: pathCoordinates.x,
        y: pathCoordinates.y,
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
        times: [0, 0.2, 0.25, 0.45, 0.5, 0.7, 0.75, 1],
        delay: delay,
      }}
      style={{
        ...initialPosition,
      }}
    >
      <div className="relative">
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, -5, 0, 5, 0, -2, 0, 0] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            times: [0, 0.2, 0.25, 0.45, 0.5, 0.7, 0.75, 1],
            delay: delay,
          }}
          className="inline-block"
        >
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
              fill={color}
              stroke="white"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
        <div
          className="absolute top-6 left-5 text-white text-xs font-semibold px-2 py-0.5 rounded shadow-sm whitespace-nowrap"
          style={{ backgroundColor: color }}
        >
          {name} ({role})
        </div>
      </div>
    </motion.div>
  );
}

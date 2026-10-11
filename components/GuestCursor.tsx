"use client";

import React, { useEffect, useState, useRef } from "react";

const COLORS = ["#22c55e", "#a855f7", "#f97316"]; // green-500, purple-500, orange-500

export default function GuestCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [color, setColor] = useState("#22c55e");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Pick random color on mount
    const randomColor = COLORS[Math.floor(Math.random() * COLORS.length)];
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setColor(randomColor);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);

    const updatePosition = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    window.addEventListener("mousemove", updatePosition);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed z-50 pointer-events-none transition-transform duration-75 ease-out"
      style={{
        transform: `translate(-100px, -100px)`,
        left: 0,
        top: 0,
      }}
    >
      <div className="relative" style={{ left: "-4px", top: "-4px" }}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          style={{ color, transform: "rotate(-15deg)" }}
        >
          <path
            d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86c.15-.15.35-.22.56-.22h7.66c.45 0 .67-.54.35-.85L5.5 3.21z"
            fill="currentColor"
            stroke="white"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
        <div
          className="absolute top-6 left-5 text-white text-xs font-semibold px-2 py-0.5 rounded shadow-sm whitespace-nowrap"
          style={{ backgroundColor: color }}
        >
          Visiting Guest
        </div>
      </div>
    </div>
  );
}

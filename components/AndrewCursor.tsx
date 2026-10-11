"use client";

import React, { useEffect, useState } from "react";

export default function AndrewCursor() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="absolute z-10 pointer-events-none"
      style={{
        animation: "wander 20s ease-in-out infinite alternate",
        top: "20%",
        left: "10%",
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

      <style jsx global>{`
        @keyframes wander {
          0% {
            transform: translate(0, 0);
          }
          20% {
            transform: translate(150px, 40px);
          }
          25% {
            transform: translate(150px, 40px); /* Pause */
          }
          45% {
            transform: translate(300px, -20px);
          }
          50% {
            transform: translate(300px, -20px); /* Pause */
          }
          70% {
            transform: translate(80px, 120px);
          }
          75% {
            transform: translate(80px, 120px); /* Pause */
          }
          100% {
            transform: translate(400px, 80px);
          }
        }
      `}</style>
    </div>
  );
}

"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type HTMLMotionProps,
} from "framer-motion";

interface ScrollSectionProps extends HTMLMotionProps<"section"> {
  children: ReactNode;
  className?: string;
  id?: string;
  minScale?: number;
  minOpacity?: number;
}

export default function ScrollSection({
  children,
  className = "",
  id,
  minScale = 0.96,
  minOpacity = 0.85,
  style,
  ...props
}: ScrollSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, shouldReduceMotion ? 1 : minScale]
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 1],
    [1, shouldReduceMotion ? 1 : minOpacity]
  );

  return (
    <motion.section
      ref={sectionRef}
      id={id}
      className={className}
      style={{
        scale,
        opacity,
        transformOrigin: "center top",
        ...style,
      }}
      {...props}
    >
      {children}
    </motion.section>
  );
}

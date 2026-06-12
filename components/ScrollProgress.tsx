"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.3 });
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setPrefersReduced(prefersReducedMotion);
  }, []);

  if (prefersReduced) return null;

  return (
    <div className="fixed right-8 top-1/2 z-50 hidden -translate-y-1/2 flex-col items-center gap-4 md:flex" aria-hidden="true">
      <span className="[writing-mode:vertical-rl] font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted">SCROLL</span>
      <div className="relative h-[120px] w-px overflow-hidden bg-white/10">
        <motion.div style={{ scaleY, transformOrigin: "top" }} className="absolute inset-x-0 top-0 h-full bg-gold" />
      </div>
    </div>
  );
}

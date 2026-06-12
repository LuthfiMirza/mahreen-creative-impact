"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function PageTransition() {
  const [hidden, setHidden] = useState(false);
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setPrefersReduced(prefersReducedMotion);
    if (prefersReducedMotion) {
      setHidden(true);
    }
  }, []);

  if (hidden) return null;

  return (
    <motion.div
      initial={prefersReduced ? false : { scaleY: 1 }}
      animate={{ scaleY: 0 }}
      transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={() => setHidden(true)}
      className="pointer-events-none fixed inset-0 z-[9000] origin-top bg-primary"
      aria-hidden="true"
    />
  );
}

"use client";

import { motion } from "framer-motion";

export function PageTransition() {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="pointer-events-none fixed inset-0 z-[90] bg-primary"
      aria-hidden="true"
    />
  );
}

"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";

const ease = [0.22, 1, 0.36, 1] as const;
const tickerText = "Web Developer  ◆  UI/UX Enthusiast  ◆  Mahreen Indonesia Batch 1  ◆  Berkarya Untuk Indonesia  ◆  Creative Digital Solutions  ◆";

export function HeroSection() {
  const { scrollY } = useScroll();
  const indonesiaY = useTransform(scrollY, (value) => value * 0.15);
  const glowY = useTransform(scrollY, (value) => value * 0.08);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const textEl = svgRef.current?.querySelector("text");
    if (!textEl || reduceMotion) return;

    const length = textEl.getComputedTextLength();
    textEl.style.strokeDasharray = `${length}`;
    textEl.style.strokeDashoffset = `${length}`;

    const timeout = window.setTimeout(() => {
      textEl.style.transition = "stroke-dashoffset 1.4s ease-out";
      textEl.style.strokeDashoffset = "0";
    }, 600);

    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-primary px-6 pb-20 pt-32 sm:pt-40">
      <motion.div style={{ y: glowY }} className="absolute right-[-18vw] top-[8vh] z-0 h-[60vw] w-[60vw] rounded-full bg-[radial-gradient(circle,rgba(201,170,113,0.07)_0%,transparent_62%)] blur-[80px]" />
      <motion.div style={{ y: glowY }} className="absolute bottom-[-10vw] left-[-8vw] z-0 h-[30vw] w-[30vw] rounded-full bg-[radial-gradient(circle,rgba(204,41,54,0.06)_0%,transparent_64%)] blur-[60px]" />
      <motion.p style={{ y: indonesiaY }} className="pointer-events-none absolute bottom-[-0.16em] left-[-0.06em] z-0 select-none font-display text-[22vw] font-extrabold leading-none tracking-atmosphere text-white/[0.025]">
        INDONESIA
      </motion.p>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-10rem)] max-w-7xl items-center">
        <div className="w-full max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease }}>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-gold">
              Mahreen Indonesia · Internship Batch 1
            </p>
            <div className="my-4 h-px w-12 bg-gold" />
          </motion.div>
          <h1 className="font-display text-[16vw] font-extrabold leading-[0.86] tracking-[-0.08em] text-primary-text sm:text-[12vw] lg:text-[9vw]">
            <motion.span initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease }} className="block">
              Berkarya
            </motion.span>
            <motion.span initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15, ease }} className="block w-full max-w-[min(100%,1120px)] pb-3">
              <svg ref={svgRef} width="100%" viewBox="0 0 1200 160" preserveAspectRatio="xMinYMid meet" className="h-auto overflow-visible" aria-label="Untuk Indonesia" role="img">
                <text
                  x="0"
                  y="140"
                  fontFamily="'Plus Jakarta Sans', sans-serif"
                  fontSize="148"
                  fontWeight="800"
                  fill="none"
                  stroke="#c9aa71"
                  strokeWidth="1.2"
                  letterSpacing="-6"
                >
                  Untuk Indonesia
                </text>
              </svg>
            </motion.span>
          </h1>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3, ease }}>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted sm:text-xl">
              Ruang karya muda untuk merancang solusi digital yang berpihak pada masyarakat.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#cta" className="inline-flex min-h-12 items-center justify-center rounded-lg bg-gold px-6 py-3 font-semibold text-primary transition hover:-translate-y-1 hover:bg-[#d8ba82] focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-primary">
                Mulai Berkarya <ArrowUpRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#about" className="inline-flex min-h-12 items-center justify-center rounded-lg border border-subtle px-6 py-3 font-semibold text-primary-text transition hover:-translate-y-1 hover:border-gold/40 hover:text-gold focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-primary">
                Pelajari Lebih Lanjut
              </a>
            </div>
            <div className="mt-12 h-px w-full bg-white/[0.08]" />
            <div className="hero-signature-marquee mt-5 max-w-4xl overflow-hidden">
              <div className="hero-signature-track flex w-max whitespace-nowrap font-mono text-[0.72rem] uppercase tracking-[0.16em] text-muted">
                <span className="pr-8">{tickerText}</span>
                <span className="pr-8" aria-hidden="true">{tickerText}</span>
                <span className="pr-8" aria-hidden="true">{tickerText}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

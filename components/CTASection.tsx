"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const words = ["Siap", "Berkarya", "Bersama?"];

export function CTASection() {
  return (
    <section id="cta" className="relative overflow-hidden border-t border-gold/20 bg-surface px-6 py-28 transition-colors duration-700 sm:py-36">
      <div className="absolute left-[-12vw] top-1/2 h-[48vw] w-[48vw] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(201,170,113,0.05)_0%,transparent_66%)] blur-[80px]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.8fr] lg:items-center">
        <h2 className="font-display text-6xl font-extrabold leading-[0.9] tracking-[-0.07em] text-primary-text sm:text-7xl lg:text-8xl">
          {words.map((word, index) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="mr-4 inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h2>
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.7, delay: 0.2 }} className="max-w-md lg:justify-self-end">
          <p className="text-lg leading-8 text-muted">
            Mulai dari satu ide yang jujur terhadap masalah di sekitar. Bersama Mahreen Indonesia, proses belajar menjadi ruang untuk mencipta, menguji, dan memberi dampak.
          </p>
          <a href="mailto:hello@mahreen.id" className="mt-8 inline-flex min-h-12 items-center justify-center rounded-lg bg-gold px-6 py-3 font-semibold text-primary transition hover:-translate-y-1 hover:bg-[#d8ba82] focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-surface">
            Gabung dan Berkarya <ArrowUpRight className="ml-2 h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

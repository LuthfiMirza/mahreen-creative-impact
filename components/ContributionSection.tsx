"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const contributions = [
  {
    number: "01",
    title: "Eksekusi Cepat",
    description: "Merancang dan membangun antarmuka dari konsep ke kode dalam waktu singkat.",
  },
  {
    number: "02",
    title: "Perspektif Pengguna",
    description: "Setiap keputusan desain didasarkan pada kemudahan dan kenyamanan pengguna.",
  },
  {
    number: "03",
    title: "Kolaborasi Aktif",
    description: "Terbuka terhadap feedback dan berkomitmen berkontribusi nyata dalam tim.",
  },
];

export function ContributionSection() {
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setPrefersReduced(prefersReducedMotion);
  }, []);

  return (
    <section id="kontribusi" className="relative overflow-hidden bg-primary px-6 py-28 sm:py-36">
      <div className="pointer-events-none absolute left-6 top-16 font-display text-[8rem] font-extrabold leading-none text-gold/15 sm:left-12">—</div>
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold">Kontribusi</p>
        <h2 className="mt-8 max-w-3xl font-display text-5xl font-extrabold tracking-[-0.06em] text-primary-text sm:text-6xl lg:text-7xl">
          Apa yang Saya Bawa
        </h2>
        <div className="mt-14">
          {contributions.map((item, index) => (
            <motion.article
              key={item.number}
              initial={prefersReduced ? false : { opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-4 border-b border-white/[0.06] py-7 md:grid-cols-[90px_0.8fr_1.5fr] md:items-center"
            >
              <span className="font-mono text-xs tracking-[0.2em] text-gold">{item.number}</span>
              <h3 className="text-xl font-semibold tracking-[-0.03em] text-primary-text">{item.title}</h3>
              <p className="leading-7 text-muted">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

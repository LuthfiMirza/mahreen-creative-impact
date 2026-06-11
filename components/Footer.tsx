"use client";

import { motion } from "framer-motion";
import { Github, Instagram, Linkedin } from "lucide-react";

const socials = [
  { label: "GitHub", href: "https://github.com", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { label: "Instagram", href: "https://instagram.com", icon: Instagram },
];

export function Footer() {
  return (
    <motion.footer initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="border-t border-white/[0.06] bg-primary px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-xl font-extrabold tracking-[-0.04em] text-primary-text">Mahreen Indonesia</p>
          <p className="mt-2 text-sm text-muted">Creative • Digital • Social Development</p>
        </div>
        <div className="flex gap-3">
          {socials.map((social) => (
            <a key={social.label} href={social.href} aria-label={social.label} target="_blank" rel="noreferrer" className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/[0.08] text-muted transition hover:-translate-y-1 hover:border-gold/40 hover:text-gold">
              <social.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
}

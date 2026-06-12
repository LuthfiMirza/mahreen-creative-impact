"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "Program" },
  { href: "#journey", label: "Journey" },
  { href: "#cta", label: "Gabung" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition duration-500 ${scrolled ? "border-b border-gold/20 bg-primary/72 backdrop-blur-2xl" : "border-b border-transparent bg-transparent"}`}>
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a href="#home" className="font-mono text-xs uppercase tracking-[0.28em] text-gold">Mahreen</a>
        <div className="hidden items-center gap-8 sm:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="nav-link text-sm text-muted transition hover:text-primary-text">{link.label}</a>
          ))}
        </div>
      </nav>
    </header>
  );
}

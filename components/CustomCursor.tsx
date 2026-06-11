"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (reduceMotion || isTouch) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = mouseX;
    let ringY = mouseY;
    let frame = 0;
    let hasMoved = false;

    const handleMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      if (!hasMoved) {
        hasMoved = true;
        ringX = mouseX;
        ringY = mouseY;
        dotRef.current?.classList.remove("opacity-0");
        ringRef.current?.classList.remove("opacity-0");
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX - 5}px, ${mouseY - 5}px)`;
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX - 16}px, ${ringY - 16}px)`;
      }
      frame = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMove);
    frame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-2.5 w-2.5 rounded-full bg-gold opacity-0 mix-blend-difference md:block" />
      <div ref={ringRef} className="pointer-events-none fixed left-0 top-0 z-[99] hidden h-8 w-8 rounded-full border border-gold/50 opacity-0 md:block" />
    </>
  );
}

import { Reveal } from "@/components/Reveal";

const journeyText = "Ide  →  Belajar  →  Berkolaborasi  →  Membangun Solusi  →  Memberi Dampak  →";

export function JourneySection() {
  return (
    <section id="journey" className="relative overflow-hidden bg-primary px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="text-center font-display text-5xl font-extrabold tracking-[-0.06em] text-primary-text sm:text-6xl lg:text-7xl">
            Dari Ide Menjadi Dampak
          </h2>
        </Reveal>
      </div>
      <div className="marquee relative mt-16 overflow-hidden border-y border-white/[0.06] py-8">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-primary to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-primary to-transparent" />
        <div className="marquee-track flex w-max gap-12 whitespace-nowrap font-display text-3xl font-extrabold tracking-[-0.04em] text-primary-text sm:text-5xl">
          <span>{journeyText}</span>
          <span className="text-gold">{journeyText}</span>
          <span>{journeyText}</span>
          <span className="text-gold">{journeyText}</span>
        </div>
      </div>
    </section>
  );
}

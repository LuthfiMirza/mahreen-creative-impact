import { Reveal } from "@/components/Reveal";

const principles = [
  {
    number: "01",
    title: "Kreativitas",
    description: "Ide yang diasah menjadi solusi visual yang relevan dan mudah dipahami.",
  },
  {
    number: "02",
    title: "Teknologi",
    description: "Pendekatan teknis yang terukur: responsif, cepat, dan dapat diakses.",
  },
  {
    number: "03",
    title: "Dampak Nyata",
    description: "Karya yang tidak berhenti di estetika — tapi menjawab kebutuhan penggunanya.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-primary px-6 py-28 sm:py-36">
      <div className="absolute inset-x-0 top-0 h-px bg-white/[0.06]" />
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.35fr_0.9fr] lg:gap-24">
        <Reveal from="left" className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold">— Tentang Program</p>
          <h2 className="mt-8 font-display text-5xl font-extrabold tracking-[-0.06em] text-primary-text sm:text-6xl lg:text-7xl">
            Mengapa Berkarya?
          </h2>
          <p className="mt-8 max-w-[520px] text-lg leading-8 text-muted">
            Berkarya bukan sekadar membuat tampilan yang menarik. Di Mahreen Indonesia, karya menjadi cara untuk menerjemahkan ide, teknologi, dan empati menjadi pengalaman digital yang benar-benar berguna.
          </p>
          <p className="mt-5 max-w-[520px] text-lg leading-8 text-muted">
            Pendekatan ini menuntut kejelasan visual, eksekusi teknis yang rapi, dan keberanian untuk terus memperbaiki hasil dari feedback nyata.
          </p>
          <div className="mt-12 h-px w-full bg-white/[0.08]" />
        </Reveal>

        <div className="space-y-0">
          {principles.map((item, index) => (
            <Reveal key={item.number} delay={index * 100}>
              <article className="program-row group border-b border-white/[0.06] py-8 first:pt-0">
                <p className="program-row-number font-mono text-xs tracking-[0.2em] text-gold/60">{item.number}</p>
                <h3 className="mt-4 text-2xl font-medium tracking-[-0.03em] text-primary-text sm:text-[1.4rem]">{item.title}</h3>
                <p className="mt-4 leading-7 text-muted">{item.description}</p>
              </article>
            </Reveal>
          ))}
          <Reveal delay={360}>
            <p className="pt-8 text-sm italic leading-7 text-gold/65">
              Internship ini adalah kesempatan untuk membuktikan ketiga hal itu.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

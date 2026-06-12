# Berkarya Untuk Indonesia

Landing page cinematic untuk inisiatif kreatif digital Mahreen Indonesia. Dibangun dengan Next.js 15 App Router, TypeScript, Tailwind CSS, Framer Motion, dan Lucide React.

## Struktur Project

```txt
app/
  globals.css
  layout.tsx
  page.tsx
components/
  AboutSection.tsx
  ContributionSection.tsx
  CTASection.tsx
  CustomCursor.tsx
  Footer.tsx
  HeroSection.tsx
  JourneySection.tsx
  Navbar.tsx
  PageTransition.tsx
  Reveal.tsx
  ScrollProgress.tsx
public/
  favicon.svg
```

## Menjalankan Project

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

## Build Production

```bash
npm run build
npm run start
```

## Deploy ke Vercel

1. Push project ke GitHub.
2. Import repository di Vercel.
3. Vercel otomatis mendeteksi Next.js.
4. Gunakan build command default `npm run build`.

## Highlight Desain

- Dark cinematic world tanpa section putih yang memutus mood
- Hero typography besar dengan outline gold text
- Atmospheric background text dan subtle parallax layer
- Editorial layout untuk Tentang Program, bukan card template
- Section Kontribusi Saya untuk menjawab nilai kontribusi secara eksplisit
- Journey marquee yang pause saat hover
- CTA split layout dengan word stagger animation
- Navbar blur setelah scroll, custom cursor, scroll progress, page curtain transition
- SEO metadata, Open Graph, dan favicon SVG

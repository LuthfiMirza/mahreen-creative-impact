import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { CustomCursor } from "@/components/CustomCursor";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://berkarya-untuk-indonesia.vercel.app"),
  title: "Berkarya Untuk Indonesia | Mahreen Indonesia",
  description: "Landing page cinematic untuk gerakan kreatif digital yang mengajak generasi muda Indonesia membangun dampak sosial.",
  keywords: ["Mahreen Indonesia", "Berkarya Untuk Indonesia", "internship", "creative", "digital", "social development"],
  authors: [{ name: "Mahreen Indonesia" }],
  openGraph: {
    title: "Berkarya Untuk Indonesia",
    description: "Ruang karya muda untuk merancang solusi digital yang berpihak pada masyarakat.",
    url: "https://berkarya-untuk-indonesia.vercel.app",
    siteName: "Mahreen Indonesia",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Berkarya Untuk Indonesia",
    description: "Creative digital impact landing page by Mahreen Indonesia.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#080808",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.variable} ${plusJakarta.variable} antialiased`}>
        <CustomCursor />
        <div id="cursor-dot" className="pointer-events-none fixed left-[-5px] top-[-5px] z-[9999] hidden h-2.5 w-2.5 rounded-full bg-gold opacity-0 mix-blend-difference md:block" />
        <div id="cursor-ring" className="pointer-events-none fixed left-[-16px] top-[-16px] z-[9998] hidden h-8 w-8 rounded-full border border-gold/50 opacity-0 md:block" />
        {children}
      </body>
    </html>
  );
}

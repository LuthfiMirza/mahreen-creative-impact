import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
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
      <body className={`${inter.variable} ${plusJakarta.variable} antialiased`}>{children}</body>
    </html>
  );
}

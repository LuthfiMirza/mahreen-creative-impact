import { AboutSection } from "@/components/AboutSection";
import { CTASection } from "@/components/CTASection";
import { CustomCursor } from "@/components/CustomCursor";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { JourneySection } from "@/components/JourneySection";
import { Navbar } from "@/components/Navbar";
import { PageTransition } from "@/components/PageTransition";
import { ScrollProgress } from "@/components/ScrollProgress";

export default function Home() {
  return (
    <main className="noise overflow-hidden bg-primary">
      <PageTransition />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <JourneySection />
      <CTASection />
      <Footer />
    </main>
  );
}

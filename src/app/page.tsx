import { NavBar } from "@/components/sites/tarot-meetyourpsychic-com/root/NavBar";
import { HeroSection } from "@/components/sites/tarot-meetyourpsychic-com/root/HeroSection";
import { CardGrid } from "@/components/sites/tarot-meetyourpsychic-com/root/CardGrid";
import { AboutSection } from "@/components/sites/tarot-meetyourpsychic-com/root/AboutSection";
import { NewsletterSection } from "@/components/sites/tarot-meetyourpsychic-com/root/NewsletterSection";
import { Footer } from "@/components/sites/tarot-meetyourpsychic-com/root/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1a1539] text-white flex flex-col selection:bg-[#eeb576] selection:text-[#1a1539]">
      <NavBar />
      <main className="flex-1 flex flex-col">
        <HeroSection />
        <CardGrid />
        <AboutSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}

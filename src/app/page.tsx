import React from "react";
import { Navbar } from "@/components/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/Navbar";
import { HeroSection } from "@/components/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/HeroSection";
import { TarotGamesSection } from "@/components/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/TarotGamesSection";
import { AboutSection } from "@/components/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/AboutSection";
import { NewsletterSection } from "@/components/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/NewsletterSection";
import { Footer } from "@/components/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0e0c24] text-[#b8b8b8] selection:bg-[#f3a754]/30 selection:text-white overflow-x-hidden">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Page Flow Content */}
      <main id="main-content" className="flex flex-col pt-4 lg:pt-0 flex-1">
        {/* Hero Section with Starfield, Nav Pills, 3D Cards, and Altar Candles */}
        <HeroSection />

        {/* Tarot Games Grid */}
        <TarotGamesSection />

        {/* About Us & Digital Experience Description */}
        <AboutSection />

        {/* Newsletter Subscription with Ornate Golden Border */}
        <NewsletterSection />
      </main>

      {/* Layered Cosmic Footer */}
      <Footer />
    </div>
  );
}

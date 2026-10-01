import React from "react";
import Link from "next/link";
import { Sparkles, Compass, Home, BookOpen, MessageSquare } from "lucide-react";
import { Navbar } from "@/components/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/Navbar";
import { Footer } from "@/components/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/Footer";
import { StarfieldCanvas } from "@/components/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/StarfieldCanvas";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0e0c24] text-[#b8b8b8] selection:bg-[#f3a754]/30 selection:text-white overflow-x-hidden relative">
      <div className="fixed inset-0 pointer-events-none z-0">
        <StarfieldCanvas />
      </div>
      <Navbar />

      <main
        id="main-content"
        className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-16 sm:py-24 text-center max-w-4xl mx-auto w-full my-auto"
      >
        {/* Mystical Glyph Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#f3a754]/10 text-[#EEB576] border border-[#f3a754]/30 mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(243,167,84,0.2)]">
          <Compass className="size-4 animate-spin [animation-duration:12s]" />
          Celestial Coordinates Unknown
        </div>

        {/* 404 Mystical Numeral */}
        <div className="relative mb-6 select-none">
          <span className="font-header text-8xl sm:text-9xl md:text-[11rem] font-bold bg-gradient-to-b from-[#FFF5DE] via-[#F3A754] to-[#7F65F2]/40 bg-clip-text text-transparent drop-shadow-[0_0_50px_rgba(243,167,84,0.35)] leading-none">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="size-32 sm:size-48 rounded-full bg-[#f3a754]/10 blur-3xl" />
          </div>
        </div>

        {/* Title */}
        <h1 className="font-header text-3xl sm:text-5xl text-white mb-4">
          Lost Beyond the <span className="text-[#EEB576]">Celestial Veil</span>
        </h1>

        {/* Description */}
        <p className="text-white/70 text-sm sm:text-base font-light leading-relaxed max-w-lg mx-auto mb-10">
          The stars cannot locate the page you seek. The ancient cards suggest that this pathway has dissolved into the ether, or the astral alignment has shifted.
        </p>

        {/* Action Hub */}
        <div className="flex flex-wrap items-center justify-center gap-4 w-full max-w-md">
          <Link
            href="/"
            className="flex-1 min-w-[160px] py-3.5 px-6 rounded-full btn-plain-cta font-semibold text-sm text-[#0e0c24] flex items-center justify-center gap-2 shadow-lg hover:brightness-110 hover:scale-105 transition-all cursor-pointer"
          >
            <Home className="size-4" />
            Home Sanctuary
          </Link>

          <Link
            href="/cards"
            className="flex-1 min-w-[160px] py-3.5 px-6 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/15 font-medium text-sm flex items-center justify-center gap-2 transition-all hover:scale-105 cursor-pointer backdrop-blur-md"
          >
            <BookOpen className="size-4 text-[#EEB576]" />
            Tarot Cards (78)
          </Link>

          <Link
            href="/psychics"
            className="w-full sm:w-auto py-3 px-6 rounded-full bg-[#7F65F2]/20 hover:bg-[#7F65F2]/30 text-[#EEB576] border border-[#7F65F2]/40 font-medium text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <MessageSquare className="size-3.5" />
            Consult Live Jyotishi Advisors
          </Link>
        </div>

        {/* Oracle Guidance Note */}
        <div className="mt-12 p-4 rounded-2xl bg-white/5 border border-white/10 max-w-sm w-full text-xs text-white/50 flex items-center justify-center gap-2">
          <Sparkles className="size-4 text-[#EEB576] shrink-0" />
          <span>Tip: Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[#EEB576] font-mono">⌘K</kbd> anywhere to search all pages and archetypes.</span>
        </div>
      </main>

      <Footer />
    </div>
  );
}

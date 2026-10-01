"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, Mail, CheckCircle2, ArrowRight } from "lucide-react";
import { StarfieldCanvas } from "./StarfieldCanvas";
import { GameNavPills } from "./GameNavPills";
import { Hero3DCards } from "./Hero3DCards";
import { HeroForeground } from "./HeroForeground";
import {
  OrnamentalBorderLeft,
  OrnamentalBorderCenter,
  OrnamentalBorderRight,
} from "@/components/sites/tarot-meetyourpsychic-com-85989e91/shared/icons";
import { cn } from "@/lib/utils";

export function HeroSection({ className }: { className?: string }) {
  const [inactiveModalCard, setInactiveModalCard] = useState<{
    name: string;
    image: string;
  } | null>(null);
  const [notifyEmail, setNotifyEmail] = useState("");
  const [notified, setNotified] = useState(false);

  const handleNotifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!notifyEmail) return;
    setNotified(true);
    setTimeout(() => {
      setInactiveModalCard(null);
      setNotified(false);
      setNotifyEmail("");
    }, 2200);
  };

  const playHoverSound = () => {
    try {
      const audio = new Audio("/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/audio/card-hover.mp3");
      audio.volume = 0.2;
      audio.play().catch(() => {});
    } catch {}
  };

  return (
    <div className={cn("grid *:[grid-area:1/1] overflow-hidden relative", className)}>
      <div className="relative grid min-h-[57.5rem] overflow-hidden *:[grid-area:1/1] md:min-h-[60rem] xl:min-h-[53.75rem] 2xl:min-h-[57.5rem]">
        {/* Foreground Content Stack */}
        <section className="z-20 flex flex-col items-center">
          {/* Header Title */}
          <header
            aria-label="Unlock the Secrets of Your Destiny!"
            className="max-w-[10ch] text-center font-header text-5xl leading-tight text-white sm:max-w-[12ch] sm:text-6xl drop-shadow-lg"
          >
            <div className="section-h1-title">Unlock the Secrets</div>
            <div className="section-h1-title">of Your Destiny!</div>
          </header>

          {/* Quick Nav Pills with Synchronized Hover */}
          <GameNavPills
            onInactiveClick={(card) => {
              setInactiveModalCard({ name: card.name, image: card.image });
            }}
          />

          {/* Central Action CTA Buttons */}
          <div className="grid items-center gap-2 sm:grid-cols-2 lg:contents mt-2">
            {/* AI Jyotishi Chat Button with Ornamental SVG Borders */}
            <div className="group grid *:[grid-area:1/1] w-60 sm:w-64 sm:text-lg">
              <Link
                href="/psychic"
                aria-label="AI Jyotishi Chat"
                onMouseEnter={playHoverSound}
                className="z-10 flex items-center justify-center gap-2 font-medium text-center rounded-full transition-all duration-300 bg-[#C7965F]/10 text-white border border-white/10 group-hover:bg-[#C7965F]/30 group-hover:border-[#EEB576]/60 group-hover:shadow-[0_0_25px_rgba(238,181,118,0.35)] h-12 text-base mx-3.25 mt-2.5 backdrop-blur-sm shadow-md cursor-pointer"
              >
                <div className="relative h-8 w-full flex items-center justify-center">
                  <span className="tracking-wide group-hover:text-[#EEB576] transition-colors">AI Jyotishi Chat</span>
                </div>
              </Link>

              {/* Ornate Golden Frame */}
              <div className="flex w-full items-stretch justify-between h-17 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity">
                <OrnamentalBorderLeft id="hero_cta_left" />
                <OrnamentalBorderCenter id="hero_cta_center" />
                <OrnamentalBorderRight id="hero_cta_right" />
              </div>
            </div>

            {/* Mobile-only Talk to a Jyotishi Button */}
            <div className="group grid *:[grid-area:1/1] w-60 sm:w-64 sm:text-lg lg:hidden">
              <Link
                href="/psychics"
                onMouseEnter={playHoverSound}
                className="z-10 flex items-center justify-center gap-2 font-medium text-center rounded-full transition-all duration-300 bg-gradient-to-r from-[#e29e67] to-[#c7965f] text-[#0e0c24] hover:brightness-110 hover:shadow-[0_0_25px_rgba(238,181,118,0.4)] h-12 text-base mx-3.25 mt-2.5 font-semibold shadow-lg"
              >
                <span>Talk to a Jyotishi</span>
              </Link>

              <div className="flex w-full items-stretch justify-between h-17 pointer-events-none opacity-80">
                <OrnamentalBorderLeft id="hero_mob_left" />
                <OrnamentalBorderCenter id="hero_mob_center" />
                <OrnamentalBorderRight id="hero_mob_right" />
              </div>
            </div>
          </div>
        </section>

        {/* 3D Perspective Cards Carousel */}
        <Hero3DCards
          onInactiveCardClick={(card) => {
            setInactiveModalCard({ name: card.name, image: card.image });
          }}
        />

        {/* Candle Altar Foreground */}
        <HeroForeground />
      </div>

      {/* Starfield Particle Canvas */}
      <StarfieldCanvas />

      {/* Cosmic Nebula Top Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-4 h-1/3 max-h-136 w-full bg-radial-[100%_100%_at_50%_20%] from-[#251d57] to-85% md:bg-radial-[70%_100%_at_50%_20%] md:blur-2xl lg:bg-radial-[40%_75%_at_50%_10%] 2xl:max-h-192 -z-10"
      />

      {/* Bottom Gradient Fade */}
      <div
        aria-hidden="true"
        className="pointer-events-none h-16 -translate-y-full self-end bg-gradient-to-t from-background via-background/90 to-transparent sm:h-24 z-5"
      />

      {/* Hero Coming Soon Modal */}
      <AnimatePresence>
        {inactiveModalCard && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-md rounded-3xl bg-[#171138] border border-[#f3a754]/40 p-6 sm:p-8 shadow-[0_0_50px_rgba(127,101,242,0.3)] text-white"
            >
              <button
                type="button"
                onClick={() => {
                  setInactiveModalCard(null);
                  setNotified(false);
                }}
                className="absolute top-5 right-5 size-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/60 hover:text-white cursor-pointer"
              >
                <X className="size-4" />
              </button>

              <div className="flex flex-col items-center text-center space-y-4 pt-2">
                <div className="relative w-24 h-40 rounded-xl overflow-hidden border border-[#f3a754]/40 shadow-xl">
                  <Image
                    src={inactiveModalCard.image}
                    alt={inactiveModalCard.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#f3a754]/10 text-[#f3a754] border border-[#f3a754]/30">
                  <Sparkles className="size-3.5" />
                  Consecration in Progress
                </div>

                <h3 className="font-header text-3xl text-white">{inactiveModalCard.name}</h3>
                <p className="text-xs sm:text-sm text-white/70 max-w-sm font-light">
                  Our celestial seers are aligning the archetypal spread for this portal. Register to be the first to draw from this sacred deck.
                </p>

                {notified ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full py-3.5 rounded-2xl bg-[#10b981]/20 border border-[#10b981]/40 flex items-center justify-center gap-2 text-[#10b981] text-xs font-medium"
                  >
                    <CheckCircle2 className="size-4 shrink-0" />
                    <span>Portal notification registered!</span>
                  </motion.div>
                ) : (
                  <form onSubmit={handleNotifySubmit} className="w-full space-y-3 pt-1">
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-white/40" />
                      <input
                        type="email"
                        required
                        value={notifyEmail}
                        onChange={(e) => setNotifyEmail(e.target.value)}
                        placeholder="Enter your email for opening access..."
                        className="w-full pl-11 pr-4 py-2.5 rounded-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-[#EEB576] text-white placeholder-white/40 outline-none text-xs transition-all shadow-inner"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-2.5 rounded-full btn-plain-cta font-semibold text-xs text-[#1b1435] shadow-lg cursor-pointer"
                    >
                      Notify Me When Portal Opens
                    </button>
                  </form>
                )}

                <div className="pt-2 w-full border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-white/50">Ready to divine now?</span>
                  <Link
                    href="/game/love"
                    onClick={() => setInactiveModalCard(null)}
                    className="inline-flex items-center gap-1.5 text-xs text-[#EEB576] hover:text-white font-medium transition-colors"
                  >
                    Play Love Tarot Now
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default HeroSection;

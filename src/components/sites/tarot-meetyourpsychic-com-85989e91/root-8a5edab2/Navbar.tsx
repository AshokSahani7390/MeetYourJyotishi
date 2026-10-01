"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Search,
  User,
  Compass,
  BookOpen,
  MessageCircle,
  Phone,
  Sparkles,
  HelpCircle,
  Mail,
  Shield,
  FileText,
} from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  SoundIcon,
  OrnamentalBorderLeft,
  OrnamentalBorderCenter,
  OrnamentalBorderRight,
} from "@/components/sites/tarot-meetyourpsychic-com-85989e91/shared/icons";
import { RiveAnimation } from "./RiveAnimation";
import { cn } from "@/lib/utils";

interface NavbarProps {
  className?: string;
  soundOn?: boolean;
  onToggleSound?: () => void;
}

export function Navbar({ className, soundOn: externalSoundOn, onToggleSound }: NavbarProps) {
  const [internalSoundOn, setInternalSoundOn] = useState(false);
  const isSoundOn = externalSoundOn !== undefined ? externalSoundOn : internalSoundOn;
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const oscNodesRef = useRef<OscillatorNode[]>([]);

  // Detect scroll position for Glassmorphism sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Synthesize ethereal celestial ambient background drone when sound is turned on
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (isSoundOn) {
      try {
        const AudioContextClass =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (!AudioContextClass) return;

        if (!audioCtxRef.current) {
          audioCtxRef.current = new AudioContextClass();
        }

        const ctx = audioCtxRef.current;
        if (ctx.state === "suspended") {
          ctx.resume();
        }

        oscNodesRef.current.forEach((osc) => {
          try {
            osc.stop();
            osc.disconnect();
          } catch {}
        });
        oscNodesRef.current = [];

        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
        masterGain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 2);
        gainNodeRef.current = masterGain;

        const filter = ctx.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.setValueAtTime(650, ctx.currentTime);
        filter.Q.setValueAtTime(2, ctx.currentTime);

        const lfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();
        lfo.frequency.setValueAtTime(0.15, ctx.currentTime);
        lfoGain.gain.setValueAtTime(150, ctx.currentTime);
        lfo.connect(lfoGain);
        lfoGain.connect(filter.frequency);
        lfo.start();

        masterGain.connect(filter);
        filter.connect(ctx.destination);

        const chordFreqs = [108, 162, 216, 270, 324, 432];
        chordFreqs.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const oscGain = ctx.createGain();

          osc.type = idx % 2 === 0 ? "sine" : "triangle";
          osc.frequency.setValueAtTime(freq + (Math.random() * 0.8 - 0.4), ctx.currentTime);

          const relativeVolume = 0.25 / (idx + 1);
          oscGain.gain.setValueAtTime(relativeVolume, ctx.currentTime);

          osc.connect(oscGain);
          oscGain.connect(masterGain);
          osc.start();
          oscNodesRef.current.push(osc);
        });
      } catch (err) {
        console.warn("Ambient audio initialization note:", err);
      }
    } else {
      if (gainNodeRef.current && audioCtxRef.current) {
        try {
          const ctx = audioCtxRef.current;
          gainNodeRef.current.gain.setValueAtTime(gainNodeRef.current.gain.value, ctx.currentTime);
          gainNodeRef.current.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.2);
          setTimeout(() => {
            oscNodesRef.current.forEach((osc) => {
              try {
                osc.stop();
                osc.disconnect();
              } catch {}
            });
            oscNodesRef.current = [];
          }, 1300);
        } catch {}
      }
    }
  }, [isSoundOn]);

  const handleToggle = () => {
    try {
      const chime = new Audio(
        "/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/audio/card-flip.mp3"
      );
      chime.volume = 0.4;
      chime.play().catch(() => {});
    } catch {}

    if (onToggleSound) {
      onToggleSound();
    } else {
      setInternalSoundOn((prev) => !prev);
    }
  };

  const triggerCommandPalette = () => {
    window.dispatchEvent(new CustomEvent("open-command-palette"));
  };

  const triggerAuthModal = () => {
    window.dispatchEvent(new CustomEvent("open-auth-modal"));
  };

  const navLinks = [
    { title: "Home", href: "/", icon: <Compass className="size-4 text-[#F3A754]" /> },
    { title: "Tarot Cards (78)", href: "/cards", icon: <BookOpen className="size-4 text-[#7F65F2]" /> },
    { title: "AI Jyotishi Chat", href: "/psychic", icon: <MessageCircle className="size-4 text-[#EEB576]" /> },
    { title: "Talk to a Jyotishi", href: "/psychics", icon: <Phone className="size-4 text-[#10B981]" /> },
    { title: "Love Tarot Spread", href: "/game/love", icon: <Sparkles className="size-4 text-[#EC4899]" /> },
    { title: "FAQ Sanctuary", href: "/faq", icon: <HelpCircle className="size-4 text-[#60A5FA]" /> },
    { title: "Contact Concierge", href: "/contact", icon: <Mail className="size-4 text-[#F59E0B]" /> },
    { title: "Privacy Policy", href: "/privacy", icon: <Shield className="size-4 text-white/50" /> },
    { title: "Terms of Use", href: "/terms", icon: <FileText className="size-4 text-white/50" /> },
  ];

  return (
    <>
      {/* 10. Glassmorphism Sticky Header */}
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300",
          isScrolled
            ? "bg-[#0E0C24]/85 backdrop-blur-xl border-b border-[#F3A754]/20 shadow-[0_10px_35px_rgba(0,0,0,0.5)] py-2 sm:py-3"
            : "bg-transparent py-3 sm:py-5",
          className
        )}
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
          {/* Left: Quick Controls (Sound, Theme, Command Search) */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Sound Toggle */}
            <button
              type="button"
              onClick={handleToggle}
              aria-label={isSoundOn ? "Mute Celestial Audio" : "Play Celestial Audio"}
              title={isSoundOn ? "Mute Celestial Audio" : "Play Celestial Audio"}
              className="size-10 sm:size-11 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 transition-all text-white border border-white/10 hover:border-[#F3A754]/40 hover:shadow-[0_0_15px_rgba(243,167,84,0.3)] cursor-pointer"
            >
              <div className="w-full h-full flex items-center justify-center p-2">
                <RiveAnimation
                  src="/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/rive/sound-button.riv"
                  fallback={<SoundIcon active={isSoundOn} className="size-5 text-[#f3a754]" />}
                />
              </div>
            </button>

            {/* 1. Dark / Light Mode Toggle */}
            <ThemeToggle />

            {/* 5. Command Palette Trigger Button (Desktop/Tablet) */}
            <button
              type="button"
              onClick={triggerCommandPalette}
              aria-label="Open Command Palette"
              title="Search and Quick Keys (Cmd+K)"
              className="hidden md:inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#F3A754]/40 text-white/70 hover:text-white text-xs transition-all cursor-pointer hover:shadow-[0_0_15px_rgba(243,167,84,0.2)]"
            >
              <Search className="size-3.5 text-[#EEB576]" />
              <span>Search Sanctuary...</span>
              <kbd className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded font-mono text-[#EEB576] border border-white/10">
                ⌘K
              </kbd>
            </button>
          </div>

          {/* Center: Brand Logo */}
          <div className="flex items-center justify-center">
            <BrandLogo size="md" />
          </div>

          {/* Right: CTA & Mobile Drawer Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Member Account Trigger (Desktop) */}
            <button
              type="button"
              onClick={triggerAuthModal}
              aria-label="Member Sanctuary"
              title="Member Sanctuary Sign In"
              className="hidden lg:flex size-10 rounded-full items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#F3A754]/40 text-white/80 hover:text-white transition-all cursor-pointer"
            >
              <User className="size-4 text-[#EEB576]" />
            </button>

            {/* Talk to a Jyotishi Desktop CTA */}
            <div className="hidden lg:block">
              <div className="group grid *:[grid-area:1/1] w-52 -mt-1">
                <Link
                  href="/psychics"
                  aria-label="Talk to a Jyotishi"
                  title="Talk to a Jyotishi"
                  className="z-10 flex items-center justify-center gap-1.5 font-medium text-center rounded-full transition-all duration-300 bg-gradient-to-r from-[#e29e67] via-[#f3a754] to-[#c7965f] text-[#0e0c24] hover:brightness-110 hover:shadow-[0_0_25px_rgba(238,181,118,0.5)] h-10 text-xs mx-3 mt-3.5 font-semibold shadow-lg group-hover:scale-[1.02] cursor-pointer"
                >
                  <span>Talk to a Jyotishi</span>
                  <span className="text-xs opacity-75">✦</span>
                </Link>

                <div className="flex w-full items-stretch justify-between h-17 pointer-events-none opacity-85 group-hover:opacity-100 transition-opacity">
                  <OrnamentalBorderLeft id="nav_cta_left" />
                  <OrnamentalBorderCenter id="nav_cta_center" />
                  <OrnamentalBorderRight id="nav_cta_right" />
                </div>
              </div>
            </div>

            {/* 4. Mobile Menu Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Mobile Menu"
              className="lg:hidden size-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 text-white/90 hover:text-white transition-colors cursor-pointer"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </header>

      {/* 4. Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-[#070514]/85 backdrop-blur-xl"
            />

            {/* Slide-out Drawer */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-xs sm:max-w-sm bg-[#120E2C] border-l border-[#F3A754]/30 p-6 flex flex-col justify-between shadow-[-10px_0_40px_rgba(0,0,0,0.8)] z-10 text-white overflow-y-auto"
            >
              {/* Top Drawer Bar */}
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-white/10">
                  <BrandLogo size="sm" />
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Close Mobile Menu"
                    className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
                  >
                    <X className="size-5" />
                  </button>
                </div>

                {/* Search trigger inside drawer */}
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    triggerCommandPalette();
                  }}
                  className="w-full mt-4 flex items-center justify-between p-3 rounded-2xl bg-white/5 border border-white/10 text-xs text-white/70 hover:text-white hover:bg-white/10 transition-all"
                >
                  <span className="flex items-center gap-2">
                    <Search className="size-3.5 text-[#F3A754]" />
                    Search Sanctuary...
                  </span>
                  <span className="px-1.5 py-0.5 rounded bg-white/10 text-[10px] font-mono text-[#EEB576]">
                    ⌘K
                  </span>
                </button>

                {/* Nav Links */}
                <nav className="mt-5 space-y-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.title}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      <div className="size-7 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                        {link.icon}
                      </div>
                      <span>{link.title}</span>
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Bottom Drawer Actions */}
              <div className="pt-6 border-t border-white/10 space-y-3">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    triggerAuthModal();
                  }}
                  className="w-full py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-xs font-semibold text-white flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <User className="size-3.5 text-[#EEB576]" />
                  Member Sanctuary Sign In
                </button>

                <Link
                  href="/psychics"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 rounded-full btn-plain-cta text-xs font-semibold text-[#161233] flex items-center justify-center gap-2 shadow-lg block text-center"
                >
                  <span>Talk to a Jyotishi ✦</span>
                </Link>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;

"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Phone, MessageSquare, Sparkles } from "lucide-react";
import { Navbar } from "@/components/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/Navbar";
import { Footer } from "@/components/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/Footer";
import { StarfieldCanvas } from "@/components/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/StarfieldCanvas";
import { CopyButton } from "@/components/ui/CopyButton";
import { EmptyState } from "@/components/ui/EmptyState";

interface PsychicAdvisor {
  id: string;
  name: string;
  title: string;
  image: string;
  rating: number;
  reviewsCount: number;
  experienceYears: number;
  ratePerMin: string;
  specialties: string[];
  status: "online" | "busy" | "offline";
  bio: string;
  badge?: string;
}

const PSYCHIC_ADVISORS: PsychicAdvisor[] = [
  {
    id: "celeste-aurora",
    name: "Master Celeste",
    title: "Clairvoyant & Master Tarotist",
    image: "/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/images/psychic.webp",
    rating: 4.98,
    reviewsCount: 3420,
    experienceYears: 18,
    ratePerMin: "$3.99",
    specialties: ["Love & Soulmates", "Karmic Timelines", "Tarot Archetypes"],
    status: "online",
    bio: "Connecting deeply with universal celestial frequencies to illuminate romantic paths, twin flame contracts, and hidden relationship dynamics.",
    badge: "Staff Pick",
  },
  {
    id: "marcus-vance",
    name: "Advisor Marcus",
    title: "Empathic Medium & Intuitive Guide",
    image: "/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/images/one.webp",
    rating: 4.95,
    reviewsCount: 2180,
    experienceYears: 14,
    ratePerMin: "$2.99",
    specialties: ["Career & Destiny", "Life Crossroads", "Spiritual Growth"],
    status: "online",
    bio: "Specializing in direct, compassionate clarity for life transitions, financial shifts, and discovering your authentic soul purpose.",
    badge: "Top Rated",
  },
  {
    id: "seraphina-moon",
    name: "Seraphina Moon",
    title: "Esoteric Astrologer & Tarot Reader",
    image: "/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/images/love.webp",
    rating: 4.96,
    reviewsCount: 1950,
    experienceYears: 12,
    ratePerMin: "$3.49",
    specialties: ["Love & Soulmates", "Past Life Healing", "Astrological Transits"],
    status: "online",
    bio: "Blends ancient Hermetic tarot with planetary transits to unveil the emotional currents guiding your heart and spirit.",
  },
  {
    id: "elena-sol",
    name: "Elena Sol",
    title: "High Priestess & Energy Intuitive",
    image: "/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/images/ai.webp",
    rating: 4.99,
    reviewsCount: 4200,
    experienceYears: 22,
    ratePerMin: "$4.99",
    specialties: ["Spiritual Awakening", "Tarot Archetypes", "Energy Alignment"],
    status: "online",
    bio: "Two decades of profound spiritual channeling, clearing energetic blockages and delivering transformative tarot readings.",
    badge: "Master Tier",
  },
  {
    id: "david-hawk",
    name: "David Hawk",
    title: "Clairaudient & Destiny Strategist",
    image: "/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/images/yesno.webp",
    rating: 4.93,
    reviewsCount: 1680,
    experienceYears: 10,
    ratePerMin: "$2.49",
    specialties: ["Career & Destiny", "Decisive Binary Choices", "Business Intuition"],
    status: "busy",
    bio: "Offers laser-focused insights on career growth, business choices, and life direction using rapid intuitive synthesis.",
  },
  {
    id: "lyra-starlight",
    name: "Lyra Starlight",
    title: "Angelic Channel & Romance Reader",
    image: "/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/images/daily.webp",
    rating: 4.97,
    reviewsCount: 2890,
    experienceYears: 15,
    ratePerMin: "$3.29",
    specialties: ["Love & Soulmates", "Heart Healing", "Daily Manifestation"],
    status: "online",
    bio: "Channeling gentle angelic guidance to soothe relationship anxiety, mend heartbreak, and open your aura to abundant romantic joy.",
  },
];

export default function PsychicsDirectoryPage() {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("All");
  const [activeAdvisor, setActiveAdvisor] = useState<PsychicAdvisor | null>(null);
  const [sessionConnecting, setSessionConnecting] = useState(false);

  const filteredAdvisors = useMemo(() => {
    if (selectedSpecialty === "All") return PSYCHIC_ADVISORS;
    return PSYCHIC_ADVISORS.filter((adv) =>
      adv.specialties.includes(selectedSpecialty)
    );
  }, [selectedSpecialty]);

  const handleStartSession = (advisor: PsychicAdvisor) => {
    setActiveAdvisor(advisor);
    setSessionConnecting(false);
  };

  const handleConfirmCall = () => {
    setSessionConnecting(true);
    setTimeout(() => {
      window.location.href = "tel:1-877-987-7792";
    }, 1200);
  };

  return (
    <div className="relative min-h-screen bg-[#0E0C24] text-white flex flex-col justify-between selection:bg-[#7f65f2] selection:text-white">
      {/* Dynamic Starfield Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <StarfieldCanvas />
      </div>

      <Navbar />

      <main className="relative z-10 flex-1 container max-w-7xl px-4 py-8 sm:py-16 mx-auto">
        {/* Header Hero */}
        <section className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#f3a754]/10 text-[#f3a754] border border-[#f3a754]/30">
            <Sparkles className="size-3.5" />
            Verified Clairvoyant Sanctuary
          </div>
          <h1 className="font-header text-4xl sm:text-6xl text-white">
            Connect with <span className="text-[#EEB576]">Gifted Jyotishis</span>
          </h1>
          <p className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto font-light">
            Since 2009, MeetYourJyotishi has connected millions with authenticated Jyotish masters, Vedic scholars, tarot readers, and spiritual advisors for deep personal clarity.
          </p>

          {/* Specialty Filter Buttons */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-2">
            {[
              "All",
              "Love & Soulmates",
              "Career & Destiny",
              "Tarot Archetypes",
              "Spiritual Growth",
            ].map((spec) => (
              <button
                key={spec}
                onClick={() => setSelectedSpecialty(spec)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  selectedSpecialty === spec
                    ? "bg-[#7F65F2] text-white shadow-[0_0_15px_rgba(127,101,242,0.4)]"
                    : "bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                {spec}
              </button>
            ))}
          </div>
        </section>

        {/* Advisors Grid */}
        {filteredAdvisors.length > 0 ? (
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pb-16">
            {filteredAdvisors.map((advisor) => (
            <motion.div
              key={advisor.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="gradient-game-card-bg rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-[#f3a754]/40 transition-all duration-300 shadow-xl flex flex-col justify-between group hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(127,101,242,0.2)]"
            >
              <div>
                {/* Top Row: Badge & Status */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="relative flex size-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full size-2.5 bg-emerald-500"></span>
                    </span>
                    <span className="text-xs uppercase tracking-wider font-semibold text-emerald-400">
                      Available Now
                    </span>
                  </div>
                  {advisor.badge && (
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#f3a754]/20 text-[#f3a754] border border-[#f3a754]/40">
                      {advisor.badge}
                    </span>
                  )}
                </div>

                {/* Profile Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative size-18 sm:size-20 rounded-2xl overflow-hidden border border-[#f3a754]/30 shadow-md shrink-0">
                    <Image
                      src={advisor.image}
                      alt={advisor.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-header text-2xl text-white group-hover:text-[#EEB576] transition-colors">
                      {advisor.name}
                    </h3>
                    <p className="text-xs text-white/60 font-light">{advisor.title}</p>
                    <div className="flex items-center gap-2 mt-1 text-xs">
                      <div className="flex items-center text-[#f3a754]">
                        <Star className="size-3.5 fill-current" />
                        <span className="ml-1 font-semibold text-white">{advisor.rating}</span>
                      </div>
                      <span className="text-white/40">({advisor.reviewsCount.toLocaleString()})</span>
                      <span className="text-white/30">•</span>
                      <span className="text-white/60">{advisor.experienceYears}y exp</span>
                    </div>
                  </div>
                </div>

                {/* Bio Snippet */}
                <p className="text-xs sm:text-sm text-white/75 leading-relaxed font-light mb-4 line-clamp-3">
                  {advisor.bio}
                </p>

                {/* Specialties Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {advisor.specialties.map((spec, i) => (
                    <span
                      key={i}
                      className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/70"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase text-white/50">Intro Rate</span>
                  <span className="font-header text-xl text-[#EEB576] font-semibold">
                    {advisor.ratePerMin}<span className="text-xs font-normal text-white/60">/min</span>
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => handleStartSession(advisor)}
                  className="btn-plain-cta px-5 py-2.5 rounded-full text-xs font-semibold text-[#1b1435] flex items-center gap-2 shadow-md hover:scale-105 transition-transform cursor-pointer"
                >
                  <Phone className="size-3.5" />
                  Connect Live
                </button>
              </div>
            </motion.div>
          ))}
        </section>
        ) : (
          <div className="py-12">
            <EmptyState
              title={`No Advisors in "${selectedSpecialty}"`}
              description="Our advisors in this specialty are currently offline or in private reading chambers. Switch categories or view all advisors."
              actionText="View All Advisors"
              onAction={() => setSelectedSpecialty("All")}
            />
          </div>
        )}

        {/* 24/7 Telephone Reading Callout */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#291b5c] via-[#1a123f] to-[#291b5c] border border-[#f3a754]/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs uppercase tracking-widest text-[#EEB576] font-semibold">
              Live Telephone Reading Concierge
            </span>
            <h3 className="font-header text-3xl sm:text-4xl text-white">Prefer to Call Directly?</h3>
            <p className="text-sm text-white/70 max-w-xl font-light">
              Dial our dedicated toll-free line anytime to be matched instantly with a gifted advisor matching your question.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 shrink-0">
            <a
              href="tel:1-877-987-7792"
              className="btn-plain-cta px-8 py-4 rounded-full font-header text-base text-[#1b1435] flex items-center gap-3 shadow-xl hover:scale-105 transition-all whitespace-nowrap cursor-pointer"
            >
              <Phone className="size-5" />
              1-877-987-7792
            </a>
            <CopyButton
              text="1-877-987-7792"
              label="Copy Hotline"
              toastMessage="Toll-free concierge line copied!"
            />
          </div>
        </section>
      </main>

      {/* Connection Modal */}
      <AnimatePresence>
        {activeAdvisor && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-md rounded-3xl bg-[#1a133b] border border-[#f3a754]/40 p-6 sm:p-8 shadow-2xl text-white"
            >
              <button
                type="button"
                onClick={() => setActiveAdvisor(null)}
                className="absolute top-5 right-5 size-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/60 hover:text-white cursor-pointer"
              >
                ✕
              </button>

              <div className="flex flex-col items-center text-center space-y-4 pt-2">
                <div className="relative size-20 rounded-2xl overflow-hidden border border-[#f3a754]/50 shadow-lg">
                  <Image
                    src={activeAdvisor.image}
                    alt={activeAdvisor.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h3 className="font-header text-2xl text-white">{activeAdvisor.name}</h3>
                  <p className="text-xs text-white/70">{activeAdvisor.title}</p>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 w-full text-xs space-y-2 text-left">
                  <div className="flex justify-between">
                    <span className="text-white/60">Advisor Status:</span>
                    <span className="text-emerald-400 font-semibold">Available Online</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Reading Guarantee:</span>
                    <span className="text-[#EEB576] font-semibold">100% Satisfaction</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Introductory Rate:</span>
                    <span className="text-white font-semibold">{activeAdvisor.ratePerMin}/min</span>
                  </div>
                </div>

                {sessionConnecting ? (
                  <div className="py-4 flex flex-col items-center space-y-2 text-center">
                    <div className="size-8 border-2 border-[#EEB576] border-t-transparent rounded-full animate-spin" />
                    <p className="text-xs text-[#EEB576]">Routing to secure phone bridge...</p>
                  </div>
                ) : (
                  <div className="w-full space-y-3 pt-2">
                    <button
                      type="button"
                      onClick={handleConfirmCall}
                      className="w-full py-3.5 rounded-full btn-plain-cta font-semibold text-sm text-[#1b1435] flex items-center justify-center gap-2 shadow-lg cursor-pointer hover:brightness-110"
                    >
                      <Phone className="size-4" />
                      Call {activeAdvisor.name} Now
                    </button>
                    <Link
                      href="/psychic"
                      onClick={() => setActiveAdvisor(null)}
                      className="w-full py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-medium flex items-center justify-center gap-2 transition-all block text-center"
                    >
                      <MessageSquare className="size-3.5" />
                      Try AI Jyotishi Chat Instead
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}

"use client";

import React, { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { Navbar } from "@/components/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/Navbar";
import { Footer } from "@/components/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/Footer";
import { StarfieldCanvas } from "@/components/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/StarfieldCanvas";
import { ALL_78_TAROT_CARDS, TarotCardSummary } from "@/data/all-cards";
import { EncyclopediaCard } from "@/components/EncyclopediaCard";
import { CardDetailModal } from "@/components/CardDetailModal";
import { EmptyState } from "@/components/ui/EmptyState";
import { cn } from "@/lib/utils";

type ArcanaTab = "major-arcana" | "wands" | "cups" | "swords" | "pentacles";

interface TabConfig {
  id: ArcanaTab;
  label: string;
  heading: string;
  description: string;
  count: number;
}

const TAB_CONFIGS: TabConfig[] = [
  {
    id: "major-arcana",
    label: "Major Arcana",
    heading: "Major Arcana Cards",
    description:
      "The 22 Major cards represent life's biggest lessons, karmic influences, and archetypal themes.",
    count: 22,
  },
  {
    id: "wands",
    label: "Wands",
    heading: "Wand Cards",
    description:
      "The suit of Wands represents creativity, passion, ambition, and action-oriented energy.",
    count: 14,
  },
  {
    id: "cups",
    label: "Cups",
    heading: "Cup Cards",
    description:
      "The suit of Cups represents emotions, relationships, intuition, and matters of the heart.",
    count: 14,
  },
  {
    id: "swords",
    label: "Swords",
    heading: "Sword Cards",
    description:
      "The suit of Swords represents intellect, conflict, communication, and mental clarity.",
    count: 14,
  },
  {
    id: "pentacles",
    label: "Pentacles",
    heading: "Pentacles Cards",
    description:
      "The suit of Pentacles represents material wealth, career, practical matters, and physical manifestation.",
    count: 14,
  },
];

export default function CardsPage() {
  const [activeTab, setActiveTab] = useState<ArcanaTab>("major-arcana");
  const [search, setSearch] = useState("");
  const [selectedCard, setSelectedCard] = useState<TarotCardSummary | null>(null);

  const activeConfig = useMemo(() => {
    return TAB_CONFIGS.find((t) => t.id === activeTab) || TAB_CONFIGS[0];
  }, [activeTab]);

  const filteredCards = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (term) {
      return ALL_78_TAROT_CARDS.filter(
        (c) =>
          c.label.toLowerCase().includes(term) ||
          c.keywords.some((k) => k.toLowerCase().includes(term)) ||
          c.upright.toLowerCase().includes(term)
      );
    }
    return ALL_78_TAROT_CARDS.filter((c) => c.arcana === activeTab);
  }, [activeTab, search]);

  const playClickSound = () => {
    try {
      const audio = new Audio("/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/audio/click.mp3");
      audio.volume = 0.3;
      audio.play().catch(() => {});
    } catch {}
  };

  const handleTabChange = (tabId: ArcanaTab) => {
    playClickSound();
    setActiveTab(tabId);
    setSearch("");
  };

  return (
    <div className="relative min-h-screen bg-[#0E0C24] text-white flex flex-col justify-between selection:bg-[#7f65f2] selection:text-white">
      {/* Background Celestial Starfield */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <StarfieldCanvas />
      </div>

      <Navbar />

      <main className="relative z-10 flex-1 flex flex-col items-center px-4 py-8 sm:py-12 max-w-7xl mx-auto w-full">
        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="font-header text-4xl sm:text-6xl text-white mb-4">
            Tarot Card <span className="text-[#EEB576]">Meanings Simplified</span>
          </h1>
          <p className="text-white/70 text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto">
            Every tarot card tells a story of change, opportunity, challenge, or growth.
            Learn the meanings of all 78 cards in the Major and Minor Arcana, so you can
            interpret readings with confidence.
          </p>
        </div>

        {/* 5-Tab Category Selector & Search Bar */}
        <div className="flex flex-col items-center gap-6 mb-12 w-full">
          {/* Tab Pill Capsule */}
          <div
            role="tablist"
            className="z-20 inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 rounded-full border border-white/20 bg-[#161233]/80 p-2 sm:p-2.5 backdrop-blur-xl shadow-2xl"
          >
            {TAB_CONFIGS.map((tab) => {
              const isActive = activeTab === tab.id && !search;
              return (
                <div key={tab.id} className="relative flex items-center justify-center">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => handleTabChange(tab.id)}
                    className={cn(
                      "relative z-10 px-5 sm:px-7 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer select-none",
                      isActive
                        ? "bg-gradient-to-r from-[#EEB276]/90 to-[#EECA76]/90 text-[#0E0C24] shadow-[0_0_20px_rgba(238,178,118,0.4)] scale-105"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    )}
                  >
                    {tab.label}
                    <span className="ml-1.5 text-[10px] opacity-70">
                      ({tab.count})
                    </span>
                  </button>

                  {/* Ornate Gold Flanking Flourish on Active Tab */}
                  {isActive && (
                    <div className="absolute inset-0 -m-1 rounded-full border border-[#EEB576]/30 pointer-events-none animate-pulse" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Real-time Search Input */}
          <div className="relative w-full max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-[#EEB576]" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search all 78 tarot cards by name or keyword..."
              className="w-full pl-11 pr-4 py-2.5 rounded-full bg-[#181339]/90 border border-white/20 text-white placeholder-white/40 text-xs sm:text-sm focus:outline-none focus:border-[#EEB576] transition-colors shadow-lg backdrop-blur-md"
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-white/50 hover:text-white cursor-pointer px-2 py-0.5 rounded-full bg-white/10"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Dynamic Category Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-header text-3xl sm:text-4xl text-white mb-2">
            {search ? (
              <>
                Search Results ({filteredCards.length}{" "}
                {filteredCards.length === 1 ? "Card" : "Cards"})
              </>
            ) : (
              activeConfig.heading
            )}
          </h2>
          <p className="text-[#EEB576] text-xs sm:text-sm font-medium italic">
            {search
              ? `Showing cards matching "${search}"`
              : activeConfig.description}
          </p>
        </div>

        {/* 78-Card Responsive Grid */}
        <div className="w-full">
          {filteredCards.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-y-10 gap-x-4 sm:gap-x-6 justify-items-center">
              {filteredCards.map((card) => (
                <EncyclopediaCard
                  key={card.id}
                  card={card}
                  onClick={(c) => setSelectedCard(c)}
                />
              ))}
            </div>
          ) : (
            <EmptyState
              title={`No Archetypes Found for "${search}"`}
              description="The ancient cards hold boundless wisdom, but none match this exact term. Try searching for an astrological keyword or select one of the suggested cards below."
              actionText="Reset Search"
              onAction={() => setSearch("")}
              suggestions={["The Fool", "The Lovers", "Death", "The Star", "Ace of Cups"]}
              onSelectSuggestion={(s) => setSearch(s)}
            />
          )}
        </div>
      </main>

      {/* Deep Card Detail Modal */}
      <CardDetailModal
        card={selectedCard}
        onClose={() => setSelectedCard(null)}
      />

      <Footer />
    </div>
  );
}

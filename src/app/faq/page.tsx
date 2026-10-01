"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, Sparkles } from "lucide-react";
import { Navbar } from "@/components/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/Navbar";
import { Footer } from "@/components/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/Footer";
import { StarfieldCanvas } from "@/components/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/StarfieldCanvas";
import { EmptyState } from "@/components/ui/EmptyState";

interface FAQItem {
  id: string;
  question: string;
  answer: string[];
  category: "Readings" | "General" | "Privacy & Safety";
}

const FAQ_DATA: FAQItem[] = [
  {
    id: "what-is-digital-tarot",
    category: "Readings",
    question: "What is the Free Digital Tarot Reading?",
    answer: [
      "The Free Digital Tarot Reading is an interactive tarot experience from MeetYourJyotishi.com that allows you to enter a question, select your cards, and receive insights based on traditional tarot symbolism.",
      "Since 2009, MeetYourJyotishi.com has delivered millions of readings to clients seeking clarity and direction in a trusted and professional environment.",
    ],
  },
  {
    id: "how-to-use",
    category: "Readings",
    question: "How do I use the tarot reading?",
    answer: [
      "Start by thinking about a clear question. Enter your question into the prompt, select your cards from the spread, and reveal them to see your results. Each card represents symbolic themes and influences related to your situation.",
      "The system uses artificial intelligence to interpret traditional tarot meanings and generate your reading instantly.",
    ],
  },
  {
    id: "kind-of-question",
    category: "Readings",
    question: "What kind of question should I ask?",
    answer: [
      "Tarot works best with clear and focused questions. Instead of asking something vague, try asking what you should understand about a situation, what energy surrounds a relationship, or what to focus on moving forward.",
      "Specific questions tend to produce more meaningful insights.",
    ],
  },
  {
    id: "cards-represent",
    category: "Readings",
    question: "What do the cards represent?",
    answer: [
      "Each tarot card carries traditional symbolism tied to emotions, patterns, decisions, and life themes. When combined in a spread, the cards create a broader picture of influences surrounding your question.",
      "The Digital Tarot Reading provides interpretations based on these established meanings.",
    ],
  },
  {
    id: "same-as-live",
    category: "General",
    question: "Is this the same as a live psychic reading?",
    answer: [
      "No. The digital reading provides AI-generated interpretations based on tarot symbolism. A live psychic session allows for interactive dialogue, clarification, and deeper exploration of complex or important situations.",
    ],
  },
  {
    id: "is-it-free",
    category: "General",
    question: "Is it really free?",
    answer: [
      "Yes. The Digital Tarot Reading is completely free to use, and you do not need to create an account to receive your tarot results.",
      "Live psychic sessions are paid services and require an account and valid payment method.",
    ],
  },
  {
    id: "predict-future",
    category: "General",
    question: "Can tarot predict my future?",
    answer: [
      "Tarot does not guarantee specific outcomes. It reflects themes, patterns, and possible influences surrounding your situation. Your decisions and actions ultimately shape your future.",
      "The reading is intended for personal reflection and entertainment purposes.",
    ],
  },
  {
    id: "ask-same-question",
    category: "Readings",
    question: "Can I ask the same question more than once?",
    answer: [
      "It is best to avoid repeating the same question within a short period of time, as each reading reflects your current moment. Consider a new reading when circumstances have meaningfully changed.",
    ],
  },
  {
    id: "topics-to-ask",
    category: "Readings",
    question: "What kinds of topics can I ask about?",
    answer: [
      "You can ask about love, relationships, career direction, personal growth, or life decisions.",
      "If your situation feels complex or layered, speaking with a live psychic may provide more personalized guidance.",
    ],
  },
  {
    id: "limitations",
    category: "Privacy & Safety",
    question: "Are there any limitations?",
    answer: [
      "The Digital Tarot Reading does not provide guidance on medical diagnoses, legal matters, financial investments, or crisis situations. These matters should be handled by qualified professionals.",
    ],
  },
  {
    id: "why-choose",
    category: "General",
    question: "Why choose MeetYourJyotishi.com?",
    answer: [
      "Since 2009, MeetYourJyotishi.com has delivered millions of successful readings and connected clients with experienced Jyotish advisors and spiritual masters who provide thoughtful, grounded guidance with professionalism and discretion.",
    ],
  },
  {
    id: "privacy",
    category: "Privacy & Safety",
    question: "Is my information private?",
    answer: [
      "Yes. Your question and card selections are used only to generate your reading, and MeetYourJyotishi.com maintains user privacy and discretion.",
    ],
  },
];

export default function FAQPage() {
  const [openIds, setOpenIds] = useState<string[]>([FAQ_DATA[0].id]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFAQs = useMemo(() => {
    return FAQ_DATA.filter((item) => {
      const matchesSearch =
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.some((p) => p.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="relative min-h-screen bg-[#0E0C24] text-white flex flex-col justify-between selection:bg-[#7f65f2] selection:text-white">
      {/* Dynamic Starfield Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <StarfieldCanvas />
      </div>

      {/* Top Navbar */}
      <Navbar />

      <main className="relative z-10 flex-1 flex flex-col items-center">
        {/* Hero Section */}
        <section className="container flex flex-col items-center pt-8 pb-12 sm:pt-14 sm:pb-16 px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-8 relative"
          >
            <Image
              src="/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/images/faq-icon.webp"
              alt="Tarot FAQ Oracle"
              width={260}
              height={245}
              priority
              className="h-fit w-36 sm:w-44 lg:w-48 drop-shadow-[0_0_35px_rgba(243,167,84,0.35)]"
            />
          </motion.div>

          <header
            aria-label="MeetYourJyotishi Frequently Asked Questions"
            className="font-header text-4xl sm:text-6xl lg:text-7xl leading-tight sm:max-w-[14ch]"
          >
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-white drop-shadow-md"
            >
              Frequently Asked
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-[#EEB576] drop-shadow-md"
            >
              Questions
            </motion.div>
          </header>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-4 text-sm sm:text-base text-white/70 max-w-xl"
          >
            Find immediate answers regarding our algorithmic tarot spreads, celestial interpretations, privacy guidelines, and live psychic sessions.
          </motion.p>

          {/* Search Bar & Categories */}
          <div className="mt-8 w-full max-w-2xl px-4 flex flex-col gap-4 items-center">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-white/40" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions or keywords..."
                className="w-full pl-12 pr-4 py-3.5 rounded-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-[#EEB576] text-white placeholder-white/40 outline-none backdrop-blur-md transition-all text-sm sm:text-base shadow-inner"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-white/50 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {["All", "Readings", "General", "Privacy & Safety"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                    selectedCategory === cat
                      ? "bg-[#7F65F2] text-white shadow-[0_0_15px_rgba(127,101,242,0.4)]"
                      : "bg-white/5 text-white/60 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Accordion Questions List */}
        <section className="container max-w-3xl px-4 pb-24 z-10 w-full">
          {filteredFAQs.length === 0 ? (
            <div className="py-6">
              <EmptyState
                title={`No Inquiries Match "${searchQuery}"`}
                description="Our sanctuary FAQ has answers on tarot, algorithm accuracy, and advisor consultations. Try searching with different keywords."
                actionText="Clear Search"
                onAction={() => setSearchQuery("")}
                suggestions={["Readings", "Pricing", "Privacy", "Vedic"]}
                onSelectSuggestion={(s) => setSearchQuery(s)}
              />
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFAQs.map((item, idx) => {
                const isOpen = openIds.includes(item.id);
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: Math.min(idx * 0.05, 0.4), duration: 0.4 }}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? "bg-[#1E154D]/70 border-[#EEB576]/50 shadow-[0_4px_24px_rgba(127,101,242,0.15)]"
                        : "bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/[0.07]"
                    }`}
                  >
                    <button
                      onClick={() => toggleAccordion(item.id)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none group"
                      aria-expanded={isOpen}
                    >
                      <span className="text-base sm:text-lg font-medium text-white group-hover:text-[#EEB576] flex items-center gap-3 transition-colors">
                        <Sparkles
                          className={`size-4 transition-colors shrink-0 ${
                            isOpen ? "text-[#EEB576]" : "text-white/30"
                          }`}
                        />
                        {item.question}
                      </span>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-[#EEB576] shrink-0"
                      >
                        <ChevronDown className="size-5" />
                      </motion.div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-white/80 leading-relaxed space-y-3 border-t border-white/5">
                            {item.answer.map((para, pIdx) => (
                              <p key={pIdx} className="font-light">
                                {para}
                              </p>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          )}

          {/* Need More Guidance Callout */}
          <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-[#2a1e68]/80 to-[#191142]/80 border border-[#7F65F2]/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl backdrop-blur-md">
            <div>
              <h3 className="font-header text-2xl text-white">Have a specific or complex question?</h3>
              <p className="text-sm text-white/70 mt-1 max-w-md">
                Connect directly with gifted clairvoyants and tarot masters for real-time clarity.
              </p>
            </div>
            <Link
              href="/psychics"
              className="btn-plain-cta px-6 py-3 rounded-full text-sm font-semibold text-white whitespace-nowrap shadow-lg hover:scale-105 transition-transform"
            >
              Talk to a Live Jyotishi
            </Link>
          </div>
        </section>

        {/* Ambient Foreground Graphic at bottom */}
        <div className="relative w-full max-w-5xl h-44 sm:h-64 pointer-events-none mt-auto overflow-hidden">
          <Image
            src="/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/images/card-meaning-fg.webp"
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-contain object-bottom opacity-40"
          />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

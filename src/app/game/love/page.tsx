"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, RotateCcw, MessageCircle, HelpCircle, Check, Shield } from "lucide-react";
import { Navbar } from "@/components/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/Navbar";
import { Footer } from "@/components/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/Footer";
import { StarfieldCanvas } from "@/components/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/StarfieldCanvas";
import { cn } from "@/lib/utils";

import { MAJOR_ARCANA_CARDS } from "@/data/tarot-cards";
import { TarotFlipCard } from "@/components/TarotFlipCard";
import { MagneticButton } from "@/components/ui/MagneticButton";

const SUGGESTED_QUESTIONS = [
  "What energies influence my love life right now?",
  "What comes next in my romantic life?",
  "What relationship patterns should I work on?",
  "What qualities matter most in a long-term partner?",
  "Is this a healthy time to start dating?",
  "What can I change to attract a compatible partner?",
  "What themes will shape my love life soon?",
  "What choice best supports my emotional well-being?",
];

export default function LoveTarotGamePage() {
  const [step, setStep] = useState<"question" | "pick" | "reveal">("question");
  const [question, setQuestion] = useState("");
  const [selectedIndices, setSelectedIndices] = useState<number[]>([]);
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});
  const [showTips, setShowTips] = useState(false);

  const playSound = (src: string, volume = 0.3) => {
    try {
      const audio = new Audio(src);
      audio.volume = volume;
      audio.play().catch(() => {});
    } catch {}
  };

  const handleCardHover = () => {
    playSound("/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/audio/card-hover.mp3", 0.25);
  };

  const handleQuestionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;
    playSound("/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/audio/01-card-spread.mp3", 0.4);
    setStep("pick");
  };

  const handleSelectQuestion = (q: string) => {
    setQuestion(q);
    playSound("/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/audio/01-card-spread.mp3", 0.4);
    setStep("pick");
  };

  const handlePickCard = (cardIdx: number) => {
    if (selectedIndices.includes(cardIdx) || selectedIndices.length >= 3) return;

    playSound("/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/audio/01-card-select.mp3", 0.4);
    const updated = [...selectedIndices, cardIdx];
    setSelectedIndices(updated);

    if (updated.length === 3) {
      setTimeout(() => {
        setStep("reveal");
        playSound("/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/audio/02-card-dancing.mp3", 0.35);
      }, 900);
    }
  };

  const handleFlipCard = (index: number) => {
    if (flippedCards[index]) return;
    setFlippedCards((prev) => ({ ...prev, [index]: true }));
  };

  const handleReset = () => {
    playSound("/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/audio/card-shuffle.mp3", 0.35);
    setStep("question");
    setQuestion("");
    setSelectedIndices([]);
    setFlippedCards({});
  };

  // 22 cards radiating fan arc
  const totalCardsInFan = 22;
  const positions = ["Past Influences", "Present Energy", "Future Trajectory"];

  return (
    <div className="relative min-h-screen bg-[#0E0C24] text-white flex flex-col justify-between selection:bg-[#7f65f2] selection:text-white">
      {/* Background Celestial Starfield */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <StarfieldCanvas />
      </div>

      <Navbar />

      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-8 sm:py-12">
        <div className="container max-w-6xl mx-auto flex flex-col items-center">
          {/* STEP 1: ASK QUESTION */}
          {step === "question" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-col items-center text-center w-full max-w-3xl"
            >
              <div className="mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#f3a754]/10 text-[#f3a754] border border-[#f3a754]/30">
                <Sparkles className="size-3.5" />
                Three-Card Romance Oracle
              </div>

              <h1 className="font-header text-5xl sm:text-6xl lg:text-7xl leading-tight mb-4">
                Ask Your <span className="text-[#EEB576]">Question</span>
              </h1>
              <p className="text-sm sm:text-base text-white/70 max-w-lg mb-8 font-light">
                Start your love tarot reading by asking a question about your romantic life. This will help direct the insights you gain from the cards.
              </p>

              {/* Input Form */}
              <form onSubmit={handleQuestionSubmit} className="w-full max-w-2xl mb-8">
                <div className="relative flex items-center rounded-full bg-[#1F1642]/90 border border-white/20 p-2 shadow-2xl backdrop-blur-md focus-within:border-[#EEB576] transition-colors">
                  <input
                    type="text"
                    required
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="Enter your question about love..."
                    className="w-full pl-6 pr-4 py-3 outline-none bg-transparent text-white placeholder-white/40 text-base sm:text-lg font-light"
                  />
                  <button
                    type="submit"
                    className="btn-plain-cta px-6 sm:px-8 py-3 rounded-full font-semibold text-sm sm:text-base text-[#1b1435] flex items-center gap-2 shrink-0 cursor-pointer shadow-lg hover:brightness-110"
                  >
                    <span>Next Step</span>
                    <ArrowRight className="size-4" />
                  </button>
                </div>
              </form>

              {/* Suggested Questions Grid */}
              <div className="w-full max-w-3xl flex flex-col items-center">
                <span className="text-xs uppercase tracking-wider text-white/50 mb-4 font-medium">
                  Or select a popular romantic inquiry
                </span>
                <div className="flex flex-wrap justify-center gap-2.5">
                  {SUGGESTED_QUESTIONS.map((q, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleSelectQuestion(q)}
                      className="rounded-full px-5 py-2 text-xs sm:text-sm bg-white/5 hover:bg-[#7F65F2]/20 border border-white/10 hover:border-[#f3a754]/40 text-white/80 hover:text-white transition-all text-left cursor-pointer"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* STEP 2: CHOOSE 3 CARDS (Radial Fan Arc) */}
          {step === "pick" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center text-center w-full"
            >
              <div className="mb-2 inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#f3a754]/10 text-[#f3a754] border border-[#f3a754]/30">
                <Sparkles className="size-3.5" />
                Step 2: Card Selection
              </div>

              <h2 className="font-header text-4xl sm:text-6xl text-white mb-2">
                Choose <span className="text-[#EEB576] font-bold">{3 - selectedIndices.length}</span> cards
              </h2>
              <p className="text-[#EEB576] font-medium text-sm sm:text-base mb-6 max-w-xl italic">
                &ldquo;{question}&rdquo;
              </p>

              {/* 22-Card Radial Fan Deck */}
              <div className="relative w-full max-w-5xl h-[340px] sm:h-[420px] lg:h-[480px] flex items-end justify-center overflow-visible my-4 select-none">
                {Array.from({ length: totalCardsInFan }).map((_, idx) => {
                  const isSelected = selectedIndices.includes(idx);
                  const order = idx - (totalCardsInFan - 1) / 2; // -10.5 to +10.5
                  const baseAngle = order * 3.6; // authentic fan spread curve
                  const selectedOrder = selectedIndices.indexOf(idx);

                  // When selected, card lifts and groups
                  const style = isSelected
                    ? {
                        transform: `translateY(-80px) rotate(${selectedOrder * 8 - 8}deg) scale(1.15)`,
                        zIndex: 40 + selectedOrder,
                      }
                    : {
                        transform: `rotate(${baseAngle}deg) translateY(0px)`,
                        transformOrigin: "50% 140%",
                        zIndex: 10 + idx,
                      };

                  return (
                    <motion.div
                      key={idx}
                      onClick={() => handlePickCard(idx)}
                      onMouseEnter={handleCardHover}
                      whileHover={
                        !isSelected && selectedIndices.length < 3
                          ? { y: -28, scale: 1.08, zIndex: 50 }
                          : {}
                      }
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                      className={cn(
                        "absolute w-24 sm:w-32 lg:w-36 aspect-[3/5] rounded-2xl overflow-hidden shadow-2xl cursor-pointer transition-all duration-300",
                        isSelected
                          ? "ring-2 ring-[#EEB576] shadow-[0_0_30px_rgba(243,167,84,0.6)]"
                          : "hover:ring-1 hover:ring-[#EEB576]/60"
                      )}
                      style={style}
                    >
                      {/* Authentic Flipped Card Back */}
                      <Image
                        src="/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/images/default-flipped.webp"
                        alt="Tarot Card Back"
                        fill
                        priority
                        className="object-cover rounded-2xl"
                      />

                      {/* Golden Shimmer Sheen on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-amber-300/10 to-transparent opacity-0 hover:opacity-100 transition-opacity pointer-events-none" />

                      {isSelected && (
                        <div className="absolute top-2 right-2 size-6 rounded-full bg-[#f3a754] text-[#1b1435] flex items-center justify-center shadow-md">
                          <Check className="size-3.5 stroke-[3]" />
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex items-center gap-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-full border border-white/20 text-white/70 hover:text-white hover:bg-white/5 text-sm transition-all flex items-center gap-2 cursor-pointer"
                >
                  <RotateCcw className="size-3.5" />
                  Change Question
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 3: REVEAL YOUR CARDS (True 3D Card Flip) */}
          {step === "reveal" && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center w-full"
            >
              <div className="mb-2 inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#f3a754]/10 text-[#f3a754] border border-[#f3a754]/30">
                <Sparkles className="size-3.5" />
                Step 3: Unveil Your Destiny
              </div>

              <h2 className="font-header text-4xl sm:text-6xl text-white mb-2 text-center">
                Reveal Your <span className="text-[#EEB576]">Cards</span>
              </h2>
              <p className="text-center text-[#f3a754] font-medium text-sm sm:text-base mb-10 max-w-xl italic">
                &ldquo;{question}&rdquo;
              </p>

              {/* 3-Card Interactive 3D Flip Spread */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 w-full max-w-5xl mb-14">
                {selectedIndices.map((cardIndex, spreadIdx) => {
                  const cardData = MAJOR_ARCANA_CARDS[cardIndex % MAJOR_ARCANA_CARDS.length];
                  const positionTitle = positions[spreadIdx];
                  const isFlipped = !!flippedCards[spreadIdx];

                  return (
                    <div
                      key={spreadIdx}
                      className="flex flex-col items-center text-center"
                    >
                      <span className="text-xs uppercase tracking-widest text-[#EEB576] font-semibold mb-3">
                        {positionTitle}
                      </span>

                      {/* Authentic 3D Flip Card */}
                      <TarotFlipCard
                        card={cardData}
                        isFlipped={isFlipped}
                        onFlip={() => handleFlipCard(spreadIdx)}
                        className="w-44 sm:w-52 aspect-[3/5] mb-6"
                      />

                      {/* Card Narrative Drawer (Shows when flipped) */}
                      <AnimatePresence>
                        {isFlipped ? (
                          <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="gradient-game-card-bg rounded-3xl p-6 border border-[#f3a754]/30 shadow-xl w-full text-left space-y-3"
                          >
                            <h3 className="font-header text-2xl text-white text-center text-[#EEB576]">
                              {cardData.name}
                            </h3>
                            <div>
                              <strong className="text-white text-xs uppercase tracking-wider block mb-1">
                                Symbolic Resonance:
                              </strong>
                              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light">
                                {cardData.meaning}
                              </p>
                            </div>
                            <div className="pt-2 border-t border-white/10">
                              <strong className="text-[#f3a754] text-xs uppercase tracking-wider block mb-1">
                                Romantic Guidance:
                              </strong>
                              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light">
                                {cardData.advice}
                              </p>
                            </div>
                          </motion.div>
                        ) : (
                          <p className="text-xs text-white/50 italic">
                            Tap card to unveil cosmic interpretation
                          </p>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 items-center mb-12">
                <MagneticButton strength={0.2}>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="btn-plain-cta px-8 py-3.5 rounded-full font-semibold text-[#1b1435] text-base hover:brightness-110 shadow-lg cursor-pointer flex items-center gap-2"
                  >
                    <RotateCcw className="size-4" />
                    Ask Another Question
                  </button>
                </MagneticButton>
                <MagneticButton strength={0.2}>
                  <Link
                    href="/psychic"
                    className="px-8 py-3.5 rounded-full border border-[#f3a754]/40 bg-[#f3a754]/10 text-white font-medium text-base hover:bg-[#f3a754]/20 transition-all flex items-center gap-2"
                  >
                    <MessageCircle className="size-4" />
                    Discuss with AI Jyotishi
                  </Link>
                </MagneticButton>
              </div>
            </motion.div>
          )}
        </div>
      </main>

      {/* Floating Tips Trigger Button (Exact match with original site) */}
      <button
        type="button"
        onClick={() => setShowTips((prev) => !prev)}
        className="gradient-game-tips-trigger-bg fixed right-6 bottom-6 z-40 flex size-20 flex-col items-center justify-center gap-1 rounded-3xl border border-[#f3a754]/30 text-xs text-[#EEB576] shadow-2xl hover:scale-105 transition-transform cursor-pointer"
      >
        <HelpCircle className="size-5" />
        <span className="font-semibold tracking-wide">Tips</span>
      </button>

      {/* Tips Dialog Modal */}
      <AnimatePresence>
        {showTips && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-md rounded-3xl bg-[#1a133b] border border-[#f3a754]/40 p-6 sm:p-8 shadow-2xl text-white space-y-4"
            >
              <div className="flex justify-between items-center pb-2 border-b border-white/10">
                <h3 className="font-header text-2xl text-[#EEB576] flex items-center gap-2">
                  <Shield className="size-5" />
                  Tarot Tips & Best Practices
                </h3>
                <button
                  type="button"
                  onClick={() => setShowTips(false)}
                  className="text-white/60 hover:text-white p-1"
                >
                  ✕
                </button>
              </div>
              <ul className="text-xs sm:text-sm text-white/80 space-y-2.5 font-light leading-relaxed">
                <li>• <strong>Focus your intention:</strong> Take a deep breath before selecting cards to ground your mental state.</li>
                <li>• <strong>Open-ended questions:</strong> Inquiries starting with &ldquo;What&rdquo; or &ldquo;How&rdquo; yield deeper symbolic clarity than yes/no prompts.</li>
                <li>• <strong>Past, Present, Future:</strong> The first card shows root foundations, the second your current reality, and the third your prospective trajectory.</li>
              </ul>
              <button
                type="button"
                onClick={() => setShowTips(false)}
                className="w-full py-2.5 rounded-full btn-plain-cta font-semibold text-xs text-[#1b1435] mt-2 cursor-pointer"
              >
                Understood, Return to Game
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}

"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, RotateCw, MessageCircle } from "lucide-react";
import { CopyButton } from "@/components/ui/CopyButton";
import { TarotCardSummary } from "@/data/all-cards";

interface CardDetailModalProps {
  card: TarotCardSummary | null;
  onClose: () => void;
}

export function CardDetailModal({ card, onClose }: CardDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!card) return null;

  return (
    <CardDetailModalContent
      key={card.id}
      card={card}
      onClose={onClose}
    />
  );
}

function CardDetailModalContent({
  card,
  onClose,
}: {
  card: TarotCardSummary;
  onClose: () => void;
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  const suitLabels: Record<string, string> = {
    "major-arcana": "Major Arcana",
    wands: "Suit of Wands",
    cups: "Suit of Cups",
    swords: "Suit of Swords",
    pentacles: "Suit of Pentacles",
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 select-none">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: "spring", stiffness: 350, damping: 30 }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-[#EEB576]/30 bg-[#161233]/95 p-6 sm:p-8 shadow-[0_0_60px_rgba(243,167,84,0.25)] text-white z-10"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close card modal"
            className="absolute top-5 right-5 size-10 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/80 hover:text-white transition-all cursor-pointer z-20"
          >
            <X className="size-5" />
          </button>

          {/* Grid Layout: Card on Left, Details on Right */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 sm:gap-8 items-center">
            {/* Card Visual with 3D Flip */}
            <div className="md:col-span-2 flex flex-col items-center">
              <div
                onClick={() => setIsFlipped(!isFlipped)}
                className="relative w-48 sm:w-56 aspect-[3/5] cursor-pointer [perspective:1000px] group"
                title="Click to flip card"
              >
                <div
                  className="relative w-full h-full rounded-2xl shadow-2xl card-3d-flipper"
                  style={{
                    transform: isFlipped ? "rotateY(0deg)" : "rotateY(180deg)",
                  }}
                >
                  {/* Back Face */}
                  <div className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden border border-[#EEB576]/40 backface-hidden bg-[#100c28]">
                    <Image
                      src="/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/images/default.webp"
                      alt="Card Back"
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Front Face */}
                  <div className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden border border-[#EEB576] backface-hidden rotate-y-180 shadow-[0_0_30px_rgba(243,167,84,0.4)] bg-[#120e29]">
                    {card.faceType === "video" ? (
                      <video
                        src={card.faceSrc}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    ) : (
                      <Image
                        src={card.faceSrc}
                        alt={card.label}
                        fill
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    )}
                  </div>
                </div>
              </div>

              {/* Flip Button Toggle */}
              <button
                type="button"
                onClick={() => setIsFlipped(!isFlipped)}
                className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-xs text-[#EEB576] transition-colors cursor-pointer"
              >
                <RotateCw className="size-3.5" />
                <span>{isFlipped ? "Show Face" : "Show Mandala Back"}</span>
              </button>
            </div>

            {/* Card Information */}
            <div className="md:col-span-3 space-y-4 text-left">
              <div>
                <div className="flex items-center justify-between gap-3 mb-2">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#f3a754]/15 text-[#f3a754] border border-[#f3a754]/30">
                    {suitLabels[card.arcana] || "Tarot Archetype"}
                  </span>
                  <CopyButton
                    text={`${card.label} (${suitLabels[card.arcana]}): Upright Meaning: ${card.upright}. Spiritual Guidance: ${card.advice}`}
                    label="Copy Wisdom"
                    successLabel="Wisdom Copied!"
                    toastMessage={`"${card.label}" card wisdom copied to clipboard!`}
                  />
                </div>
                <h2 className="font-header text-3xl sm:text-4xl text-white">
                  {card.label}
                </h2>
              </div>

              {/* Keywords */}
              <div className="flex flex-wrap gap-1.5">
                {card.keywords.map((kw, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-0.5 rounded-full bg-white/10 text-[#EEB576] text-xs font-medium border border-white/10"
                  >
                    {kw}
                  </span>
                ))}
              </div>

              {/* Upright Meaning */}
              <div className="rounded-2xl bg-white/5 p-4 border border-white/10 space-y-1">
                <strong className="text-xs uppercase tracking-wider text-emerald-400 block font-semibold">
                  Upright Meaning:
                </strong>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light">
                  {card.upright}
                </p>
              </div>

              {/* Reversed Meaning */}
              <div className="rounded-2xl bg-white/5 p-4 border border-white/10 space-y-1">
                <strong className="text-xs uppercase tracking-wider text-amber-400 block font-semibold">
                  Reversed / Shadow Resonance:
                </strong>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light">
                  {card.reversed}
                </p>
              </div>

              {/* Spiritual Advice */}
              <div className="rounded-2xl bg-[#7f65f2]/10 p-4 border border-[#7f65f2]/30 space-y-1">
                <strong className="text-xs uppercase tracking-wider text-[#EEB576] block font-semibold flex items-center gap-1.5">
                  <Sparkles className="size-3.5" />
                  Spiritual Guidance:
                </strong>
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-light">
                  {card.advice}
                </p>
              </div>

              {/* Navigation CTAs */}
              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  href="/game/love"
                  onClick={onClose}
                  className="btn-plain-cta px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-[#1b1435] flex items-center gap-2"
                >
                  <Sparkles className="size-3.5" />
                  Ask in Love Tarot
                </Link>
                <Link
                  href="/psychics"
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-full border border-white/20 hover:border-[#EEB576] bg-white/5 text-xs sm:text-sm text-white flex items-center gap-2 transition-colors"
                >
                  <MessageCircle className="size-3.5" />
                  Consult Live Jyotishi
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

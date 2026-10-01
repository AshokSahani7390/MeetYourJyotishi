"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, Mail, CheckCircle2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface TarotGameCardProps {
  title: string;
  subtitle: string;
  iconImage?: string;
  cardImage: string;
  href?: string;
  isComingSoon?: boolean;
  cardRotation?: number;
  isSpecialPsychic?: boolean;
  isCardMeanings?: boolean;
  onComingSoonClick?: () => void;
}

function TarotCardItem({
  title,
  subtitle,
  iconImage,
  cardImage,
  href = "#",
  isComingSoon = false,
  cardRotation = -16,
  isSpecialPsychic = false,
  isCardMeanings = false,
  onComingSoonClick,
}: TarotGameCardProps) {
  const playHoverSound = () => {
    try {
      const audio = new Audio(
        "/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/audio/card-hover.mp3"
      );
      audio.volume = 0.2;
      audio.play().catch(() => {});
    } catch {}
  };

  const isTopPositioned = isSpecialPsychic || isCardMeanings;

  const content = (
    <>
      {/* Top Floating Badge Icon */}
      {iconImage && (
        <Image
          src={iconImage}
          alt={`${title} icon`}
          width={138}
          height={126}
          className="absolute -top-10 left-8 grid h-fit w-20 place-items-center sm:w-22 md:w-24 drop-shadow-md transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1.5"
        />
      )}

      {/* Card Header & Subtitle */}
      <div className={cn("flex flex-col py-8 z-10", isTopPositioned ? "self-start" : "")}>
        <h2 className="font-header text-3xl select-none md:text-4xl text-white group-hover:text-[#EEB576] transition-colors duration-300">
          {title}
        </h2>
        <span
          className={cn(
            "text-sm md:text-base font-medium transition-colors duration-300",
            isComingSoon ? "text-white/60 group-hover:text-white/80" : "text-[#EEB576]"
          )}
        >
          {subtitle}
        </span>
      </div>

      {/* Dynamic Artwork on the Right */}
      {isSpecialPsychic ? (
        <div className="mt-3.5 grid h-44 -translate-x-3 overflow-y-clip pl-1 *:[grid-area:1/1] sm:-mt-5.5 sm:h-53 sm:-translate-x-8 lg:-mt-10 xl:-mt-16 xl:h-59 xl:-translate-x-16">
          <Image
            src={cardImage}
            alt="AI Psychic Portrait"
            width={585}
            height={859}
            draggable={false}
            className="h-44 w-fit select-none sm:h-64 object-contain transition-all duration-500 ease-out group-hover:scale-108 group-hover:brightness-110"
            style={{
              filter: "hue-rotate(45deg) brightness(0.8) contrast(1.25) saturate(2)",
            }}
          />
        </div>
      ) : isCardMeanings ? (
        <div className="mt-px h-47 max-w-36 overflow-hidden sm:max-w-none md:h-43 md:w-72">
          <div className="grid w-56 translate-x-10 -translate-y-16 rotate-25 grid-cols-3 gap-1 sm:translate-x-8 sm:gap-2 md:w-64 transition-all duration-500 ease-out group-hover:rotate-28 group-hover:scale-108 group-hover:translate-x-8">
            {/* Column 1: Love Tarot Cards Stack */}
            <div className="flex flex-col gap-1 sm:gap-2 transition-transform duration-300 group-hover:translate-y-1" style={{ transform: "translateY(8px)" }}>
              <Image src="/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/images/love.webp" alt="" width={120} height={200} className="z-10 h-32 w-fit select-none sm:h-36 rounded-md shadow-lg" />
              <Image src="/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/images/love.webp" alt="" width={120} height={200} className="z-10 h-32 w-fit select-none sm:h-36 rounded-md shadow-lg" />
              <Image src="/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/images/love.webp" alt="" width={120} height={200} className="z-10 h-32 w-fit select-none sm:h-36 rounded-md shadow-lg" />
            </div>

            {/* Column 2: Free Tarot Cards Stack */}
            <div className="flex flex-col gap-1 sm:gap-2 transition-transform duration-300 group-hover:-translate-y-3" style={{ transform: "translateY(-8px)" }}>
              <Image src="/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/images/free.webp" alt="" width={120} height={200} className="z-10 h-32 w-fit select-none sm:h-36 rounded-md shadow-lg" />
              <Image src="/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/images/free.webp" alt="" width={120} height={200} className="z-10 h-32 w-fit select-none sm:h-36 rounded-md shadow-lg" />
              <Image src="/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/images/free.webp" alt="" width={120} height={200} className="z-10 h-32 w-fit select-none sm:h-36 rounded-md shadow-lg" />
            </div>

            {/* Column 3: Yes/No Tarot Cards Stack */}
            <div className="flex flex-col gap-1 sm:gap-2 transition-transform duration-300 group-hover:translate-y-1" style={{ transform: "translateY(8px)" }}>
              <Image src="/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/images/yesno.webp" alt="" width={120} height={200} className="z-10 h-32 w-fit select-none sm:h-36 rounded-md shadow-lg" />
              <Image src="/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/images/yesno.webp" alt="" width={120} height={200} className="z-10 h-32 w-fit select-none sm:h-36 rounded-md shadow-lg" />
              <Image src="/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/images/yesno.webp" alt="" width={120} height={200} className="z-10 h-32 w-fit select-none sm:h-36 rounded-md shadow-lg" />
            </div>
          </div>
        </div>
      ) : (
        <div className="mr-2 grid h-48 overflow-y-clip *:[grid-area:1/1] sm:mr-14 sm:h-56 xl:mr-20 xl:h-64">
          {/* Card 1 (Front Primary) */}
          <Image
            src={cardImage}
            alt=""
            width={360}
            height={642}
            draggable={false}
            className="z-10 h-56 w-fit select-none sm:h-72 xl:h-80 rounded-xl transition-all duration-500 ease-out group-hover:-translate-y-3 group-hover:scale-106"
            style={{
              transform: `translateY(24px) rotate(${cardRotation}deg)`,
              filter: "drop-shadow(0 20px 20px rgba(0, 0, 0, 0.6))",
            }}
          />
          {/* Card 2 (Secondary Fan Layer) */}
          <Image
            src={cardImage}
            alt=""
            width={360}
            height={642}
            draggable={false}
            className="z-10 h-56 w-fit select-none sm:h-72 xl:h-80 rounded-xl opacity-75 pointer-events-none transition-all duration-500 ease-out group-hover:translate-x-2 group-hover:rotate-[-8deg]"
            style={{
              transform: `translateY(26px) rotate(${cardRotation * 0.75}deg)`,
            }}
          />
          {/* Card 3 (Tertiary Depth Layer) */}
          <Image
            src={cardImage}
            alt=""
            width={360}
            height={642}
            draggable={false}
            className="z-10 h-56 w-fit select-none sm:h-72 xl:h-80 rounded-xl opacity-45 pointer-events-none transition-all duration-500 ease-out group-hover:-translate-x-2 group-hover:rotate-[-22deg]"
            style={{
              transform: `translateY(28px) rotate(${cardRotation * 1.25}deg)`,
            }}
          />
        </div>
      )}

      {/* Radial Hover Glow Background (Authentic Production Matrix) */}
      <div
        className="absolute top-0 right-0 -z-10 h-48 w-64 overflow-clip rounded-r-4xl sm:w-90 md:h-44 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          backgroundImage: isTopPositioned
            ? "radial-gradient(50% 150% at 66% 50%, rgba(127, 101, 242, 1) 0%, rgba(121, 96, 231, 0.92) 15%, rgba(115, 90, 220, 0.83) 30%, rgba(109, 84, 209, 0.73) 45%, rgba(100, 75, 191, 0.58) 60%, rgba(88, 65, 168, 0.38) 75%, rgba(80, 61, 154, 0.19) 90%, rgba(73, 58, 140, 0) 100%)"
            : "radial-gradient(60% 150% at 66% 40%, rgba(127, 101, 242, 1) 0%, rgba(121, 96, 231, 0.92) 15%, rgba(115, 90, 220, 0.83) 30%, rgba(109, 84, 209, 0.73) 45%, rgba(100, 75, 191, 0.58) 60%, rgba(88, 65, 168, 0.38) 75%, rgba(80, 61, 154, 0.19) 90%, rgba(73, 58, 140, 0) 100%)",
        }}
      />
    </>
  );

  const containerClasses = cn(
    "relative rounded-4xl border h-48 md:h-44 flex gap-3 border-transparent gradient-game-card-bg pl-8 justify-between [-webkit-transform:translateZ(0)] group cursor-pointer transition-all duration-300",
    isCardMeanings
      ? "[clip-path:inset(0%_0%_0%_0%_round_2rem)] items-start"
      : isSpecialPsychic
      ? "[clip-path:inset(-50%_0%_0%_0%_round_2rem)] items-start"
      : "[clip-path:inset(-50%_0%_0%_0%_round_2rem)] items-end",
    "hover:border-[#EEB576]/40 hover:shadow-[0_0_35px_rgba(127,101,242,0.35),0_0_15px_rgba(238,181,118,0.2)]"
  );

  if (isComingSoon) {
    return (
      <div
        role="button"
        tabIndex={0}
        onClick={onComingSoonClick}
        onMouseEnter={playHoverSound}
        onKeyDown={(e) => e.key === "Enter" && onComingSoonClick?.()}
        className={containerClasses}
      >
        {content}
      </div>
    );
  }

  return (
    <Link
      href={href}
      onMouseEnter={playHoverSound}
      className={containerClasses}
    >
      {content}
    </Link>
  );
}

export function TarotGamesSection({ className }: { className?: string }) {
  const [activeComingSoon, setActiveComingSoon] = useState<{
    title: string;
    description: string;
    iconImage?: string;
    cardImage: string;
  } | null>(null);

  const [notifyEmail, setNotifyEmail] = useState("");
  const [notified, setNotified] = useState(false);

  const handleNotifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!notifyEmail) return;
    setNotified(true);
    setTimeout(() => {
      setActiveComingSoon(null);
      setNotified(false);
      setNotifyEmail("");
    }, 2500);
  };

  return (
    <section
      className={cn(
        "bg-radial-[40%_40%_at_50%_50%] from-[#372988]/90 via-[#1E154D]/50 to-[#1E154D]/0 py-12 pb-36 2xl:py-24 2xl:pb-48 relative z-20",
        className
      )}
    >
      <div className="container grid gap-12 sm:max-w-3xl lg:max-w-none lg:grid-cols-2 lg:gap-x-8 lg:gap-y-24 xl:gap-x-12 2xl:max-w-7xl mx-auto px-6">
        {/* 1. Love Tarot */}
        <TarotCardItem
          title="Love Tarot"
          subtitle="Play Now"
          iconImage="/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/images/icon-love.webp"
          cardImage="/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/images/love.webp"
          href="/game/love"
          cardRotation={-16}
        />

        {/* 2. Free Tarot */}
        <TarotCardItem
          title="Free Tarot"
          subtitle="Coming Soon!"
          iconImage="/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/images/icon-free.webp"
          cardImage="/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/images/free.webp"
          isComingSoon={true}
          cardRotation={16}
          onComingSoonClick={() =>
            setActiveComingSoon({
              title: "Free Tarot Reading",
              description:
                "The complete Grand Celtic Cross Spread offering deep multi-dimensional analysis into your subconscious patterns, challenges, and upcoming horizons.",
              iconImage: "/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/images/icon-free.webp",
              cardImage: "/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/images/free.webp",
            })
          }
        />

        {/* 3. Yes/No Tarot */}
        <TarotCardItem
          title="Yes/No"
          subtitle="Coming Soon!"
          iconImage="/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/images/icon-yesno.webp"
          cardImage="/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/images/yesno.webp"
          isComingSoon={true}
          cardRotation={-16}
          onComingSoonClick={() =>
            setActiveComingSoon({
              title: "Yes / No Oracle",
              description:
                "Fast, decisive answers for binary questions. Draw a single focal card with instant polarity alignment and practical spiritual guidance.",
              iconImage: "/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/images/icon-yesno.webp",
              cardImage: "/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/images/yesno.webp",
            })
          }
        />

        {/* 4. Daily Tarot */}
        <TarotCardItem
          title="Daily Tarot"
          subtitle="Coming Soon!"
          iconImage="/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/images/icon-daily.webp"
          cardImage="/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/images/daily.webp"
          isComingSoon={true}
          cardRotation={16}
          onComingSoonClick={() =>
            setActiveComingSoon({
              title: "Daily Tarot Horizon",
              description:
                "Start each morning with a celestial transit reading attuned to your sign. Discover the energetic theme guiding your decisions today.",
              iconImage: "/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/images/icon-daily.webp",
              cardImage: "/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/images/daily.webp",
            })
          }
        />

        {/* 5. One Card */}
        <TarotCardItem
          title="One Card"
          subtitle="Coming Soon!"
          iconImage="/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/images/icon-one.webp"
          cardImage="/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/images/one.webp"
          isComingSoon={true}
          cardRotation={-16}
          onComingSoonClick={() =>
            setActiveComingSoon({
              title: "One Card Focus",
              description:
                "Laser-focused meditation archetype. Clear away the noise of complex situations with a single foundational card and contemplation mantra.",
              iconImage: "/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/images/icon-one.webp",
              cardImage: "/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/images/one.webp",
            })
          }
        />

        {/* 6. AI Tarot */}
        <TarotCardItem
          title="AI Tarot"
          subtitle="Coming Soon!"
          iconImage="/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/images/icon-ai.webp"
          cardImage="/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/images/ai.webp"
          isComingSoon={true}
          cardRotation={16}
          onComingSoonClick={() =>
            setActiveComingSoon({
              title: "AI Quantum Tarot",
              description:
                "Next-generation divination powered by advanced semantic neural models synthesizing centuries of Hermetic and Rider-Waite symbolism in real time.",
              iconImage: "/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/images/icon-ai.webp",
              cardImage: "/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/images/ai.webp",
            })
          }
        />

        {/* 7. AI Psychic Chat */}
        <TarotCardItem
          title="AI Psychic Chat"
          subtitle="Play Now"
          cardImage="/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/images/psychic.webp"
          href="/psychic"
          isSpecialPsychic={true}
        />

        {/* 8. Card Meanings */}
        <TarotCardItem
          title="Card Meanings"
          subtitle="Play Now"
          cardImage="/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/images/love.webp"
          href="/cards"
          isCardMeanings={true}
        />
      </div>

      {/* Interactive Coming Soon Oracle Preview Modal */}
      <AnimatePresence>
        {activeComingSoon && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-lg rounded-3xl bg-[#171138] border border-[#f3a754]/40 p-6 sm:p-8 shadow-[0_0_50px_rgba(127,101,242,0.3)] text-white overflow-hidden"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => {
                  setActiveComingSoon(null);
                  setNotified(false);
                }}
                className="absolute top-5 right-5 size-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition-all cursor-pointer"
              >
                <X className="size-5" />
              </button>

              <div className="flex flex-col items-center text-center space-y-4 pt-2">
                {activeComingSoon.iconImage && (
                  <Image
                    src={activeComingSoon.iconImage}
                    alt=""
                    width={90}
                    height={90}
                    className="drop-shadow-[0_0_20px_rgba(243,167,84,0.4)]"
                  />
                )}

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#f3a754]/10 text-[#f3a754] border border-[#f3a754]/30">
                  <Sparkles className="size-3.5" />
                  Consecration in Progress
                </div>

                <h3 className="font-header text-3xl text-white">{activeComingSoon.title}</h3>
                <p className="text-sm text-white/75 leading-relaxed max-w-md">
                  {activeComingSoon.description}
                </p>

                {notified ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full py-4 px-6 rounded-2xl bg-[#10b981]/20 border border-[#10b981]/40 flex items-center justify-center gap-3 text-[#10b981]"
                  >
                    <CheckCircle2 className="size-5 shrink-0" />
                    <span className="text-sm font-medium">Cosmic notification registered!</span>
                  </motion.div>
                ) : (
                  <form onSubmit={handleNotifySubmit} className="w-full space-y-3 pt-2">
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-white/40" />
                      <input
                        type="email"
                        required
                        value={notifyEmail}
                        onChange={(e) => setNotifyEmail(e.target.value)}
                        placeholder="Enter your email for opening access..."
                        className="w-full pl-11 pr-4 py-3 rounded-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-[#EEB576] text-white placeholder-white/40 outline-none text-sm transition-all shadow-inner"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 rounded-full btn-plain-cta font-semibold text-sm text-[#1b1435] shadow-lg hover:shadow-[0_0_25px_rgba(238,181,118,0.4)] transition-all cursor-pointer"
                    >
                      Notify Me When Portal Opens
                    </button>
                  </form>
                )}

                <div className="pt-2 w-full border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-white/50">Ready to divine right now?</span>
                  <Link
                    href="/game/love"
                    onClick={() => setActiveComingSoon(null)}
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
    </section>
  );
}

export default TarotGamesSection;

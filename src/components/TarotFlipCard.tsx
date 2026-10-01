"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { TarotCardData } from "@/data/tarot-cards";

interface TarotFlipCardProps {
  card: TarotCardData;
  isFlipped: boolean;
  onFlip: () => void;
  className?: string;
  badgeText?: string;
  priority?: boolean;
}

export function TarotFlipCard({
  card,
  isFlipped,
  onFlip,
  className,
  badgeText = "Click to Reveal",
  priority = false,
}: TarotFlipCardProps) {
  const flipAudioRef = useRef<HTMLAudioElement | null>(null);
  const hoverAudioRef = useRef<HTMLAudioElement | null>(null);

  const handleHover = () => {
    try {
      if (!isFlipped) {
        if (!hoverAudioRef.current) {
          hoverAudioRef.current = new Audio("/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/audio/card-hover.mp3");
          hoverAudioRef.current.volume = 0.25;
        }
        hoverAudioRef.current.currentTime = 0;
        hoverAudioRef.current.play().catch(() => {});
      }
    } catch {}
  };

  const handleClick = () => {
    try {
      if (!flipAudioRef.current) {
        flipAudioRef.current = new Audio("/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/audio/02-card-flip.mp3");
        flipAudioRef.current.volume = 0.4;
      }
      flipAudioRef.current.currentTime = 0;
      flipAudioRef.current.play().catch(() => {});
    } catch {}

    onFlip();
  };

  return (
    <div
      onClick={handleClick}
      onMouseEnter={handleHover}
      className={cn(
        "relative cursor-pointer [perspective:1200px] group select-none",
        className
      )}
      title={isFlipped ? card.name : "Click to flip card"}
    >
      <div
        className={cn(
          "relative w-full h-full rounded-2xl shadow-2xl transition-transform duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] card-3d-flipper",
          !isFlipped && "group-hover:-translate-y-2 group-hover:scale-[1.03] transition-all duration-300"
        )}
        style={{
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* BACK FACE (Default Mandala Art) */}
        <div className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden border border-[#f3a754]/40 backface-hidden shadow-[0_15px_35px_rgba(0,0,0,0.6)] bg-[#120e29]">
          <Image
            src="/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/images/default-flipped.webp"
            alt="Tarot Back"
            fill
            sizes="(max-width: 768px) 50vw, 300px"
            priority={priority}
            className="object-cover"
          />

          {/* Golden Sheen Layer */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-amber-300/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

          {/* Reveal Badge (visible when not flipped) */}
          {!isFlipped && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/25 group-hover:bg-black/10 transition-colors">
              <span className="px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md text-[#EEB576] text-xs font-semibold border border-[#EEB576]/30 shadow-lg group-hover:border-[#EEB576] group-hover:scale-105 transition-all">
                {badgeText}
              </span>
            </div>
          )}
        </div>

        {/* FRONT FACE (Authentic Animated Video / Card Art) */}
        <div className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden border border-[#EEB576] backface-hidden rotate-y-180 shadow-[0_0_35px_rgba(243,167,84,0.5)] bg-[#120e29]">
          <video
            src={card.faceVideo}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover rounded-2xl"
          />

          {/* Subtle golden edge glow on revealed state */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl border border-amber-300/30" />

          {/* Light Sweep Animation */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-1/2 left-0 h-[200%] w-full -rotate-45 bg-gradient-to-r from-transparent via-[rgba(241,190,104,0.3)] to-transparent animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { TarotCardSummary } from "@/data/all-cards";

interface EncyclopediaCardProps {
  card: TarotCardSummary;
  onClick?: (card: TarotCardSummary) => void;
  className?: string;
}

export function EncyclopediaCard({
  card,
  onClick,
  className,
}: EncyclopediaCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const hoverAudioRef = useRef<HTMLAudioElement | null>(null);
  const flipAudioRef = useRef<HTMLAudioElement | null>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);

    try {
      if (!hoverAudioRef.current) {
        hoverAudioRef.current = new Audio("/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/audio/card-hover.mp3");
        hoverAudioRef.current.volume = 0.2;
      }
      hoverAudioRef.current.currentTime = 0;
      hoverAudioRef.current.play().catch(() => {});
    } catch {}

    if (card.faceType === "video" && videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play().catch(() => {});
      }
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = (e: React.MouseEvent) => {
    try {
      if (!flipAudioRef.current) {
        flipAudioRef.current = new Audio("/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/audio/02-card-flip.mp3");
        flipAudioRef.current.volume = 0.35;
      }
      flipAudioRef.current.currentTime = 0;
      flipAudioRef.current.play().catch(() => {});
    } catch {}

    if (onClick) {
      e.preventDefault();
      onClick(card);
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className={cn(
        "group flex w-full max-w-[170px] sm:max-w-[190px] xl:max-w-[210px] flex-col items-center gap-2.5 text-center cursor-pointer select-none",
        className
      )}
      title={`Click to view ${card.label} meaning`}
    >
      {/* Outer 3D Perspective Grid */}
      <div className="relative grid place-items-center *:[grid-area:1/1] w-full">
        {/* 3D Transform Flipper Container */}
        <div
          className="relative grid aspect-[3/5] w-[calc(100%-0.75rem)] rounded-2xl card-3d-flipper *:[grid-area:1/1]"
          style={{
            perspective: 800,
            perspectiveOrigin: "50% 50%",
            transform: isHovered
              ? "rotateY(180deg) rotateZ(-2deg) rotateX(2deg) scale(1.1) translateY(-10px)"
              : "rotateY(0deg) rotateZ(0deg) rotateX(0deg) scale(1) translateY(0px)",
            boxShadow: isHovered
              ? "0px 32px 24px -2px rgba(0, 0, 0, 0.45), 0 0 25px rgba(243, 167, 84, 0.35)"
              : "0px 20px 20px -2px rgba(0, 0, 0, 0.25)",
            transition: "transform 0.75s cubic-bezier(0.25, 0.1, 0.25, 1), box-shadow 0.4s ease",
          }}
        >
          {/* 1. Back Face (Sacred Mandala Art) */}
          <div className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden backface-hidden bg-[#100c28]">
            <Image
              src="/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/images/default.webp"
              alt="Tarot Back"
              fill
              sizes="(max-width: 640px) 45vw, (max-width: 1024px) 25vw, 15vw"
              className="rounded-2xl object-cover"
            />
          </div>

          {/* 2. Front Face (Video or Static Card Face Artwork) */}
          <div className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden rotate-y-180 backface-hidden bg-[#120e29]">
            {card.faceType === "video" ? (
              <video
                ref={videoRef}
                src={card.faceSrc}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="w-full h-full object-cover rounded-2xl"
              />
            ) : (
              <Image
                src={card.faceSrc}
                alt={card.label}
                fill
                sizes="(max-width: 640px) 45vw, (max-width: 1024px) 25vw, 15vw"
                className="w-full h-full object-cover rounded-2xl"
              />
            )}
          </div>

          {/* 3. Light Sheen Reflection Sweep (Active on Hover) */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl backface-hidden">
            <motion.div
              initial={{ left: "-50%", opacity: 0 }}
              animate={
                isHovered
                  ? { left: ["-50%", "150%"], opacity: [0, 1, 1, 0] }
                  : { opacity: 0 }
              }
              transition={{
                duration: 1.2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 0,
              }}
              className="absolute -top-1/2 h-[240%] w-full -rotate-45 bg-gradient-to-r from-transparent via-white/25 to-transparent blur-md will-change-transform"
            />
          </div>
        </div>

        {/* 4. Decorative Celestial Frame Cover (Overlay) */}
        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
          <Image
            src="/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/images/card-meaning-cover.webp"
            alt=""
            width={638}
            height={1114}
            className="w-full h-auto object-contain select-none"
          />
        </div>
      </div>

      {/* Card Title */}
      <span className="font-header text-base sm:text-lg text-white/90 transition-colors duration-250 ease-out group-hover:text-[#EEB576] line-clamp-1">
        {card.label}
      </span>
    </div>
  );
}

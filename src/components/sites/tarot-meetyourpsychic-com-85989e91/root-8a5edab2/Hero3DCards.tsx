"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useHeroCardStore } from "@/store/useHeroCardStore";
import { cn } from "@/lib/utils";

export interface TarotCardData {
  id: string;
  name: string;
  href: string;
  image: string;
  active: boolean;
  tilt: "rtl" | "ltr" | "middle";
  rotateY: number;
}

export const heroCardsData: TarotCardData[] = [
  {
    id: "love",
    name: "Love Tarot",
    href: "/game/love",
    image: "/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/images/love.webp",
    active: true,
    tilt: "rtl",
    rotateY: -8,
  },
  {
    id: "free",
    name: "Free Tarot",
    href: "/game/free",
    image: "/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/images/free.webp",
    active: false,
    tilt: "rtl",
    rotateY: -4,
  },
  {
    id: "yesno",
    name: "Yes/No Tarot",
    href: "/game/yesno",
    image: "/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/images/yesno.webp",
    active: false,
    tilt: "middle",
    rotateY: 0,
  },
  {
    id: "daily",
    name: "Daily Tarot",
    href: "/game/daily",
    image: "/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/images/daily.webp",
    active: false,
    tilt: "middle",
    rotateY: 0,
  },
  {
    id: "ai",
    name: "AI Tarot",
    href: "/game/ai",
    image: "/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/images/ai.webp",
    active: false,
    tilt: "ltr",
    rotateY: 4,
  },
  {
    id: "one",
    name: "One Card",
    href: "/game/one",
    image: "/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/images/one.webp",
    active: false,
    tilt: "ltr",
    rotateY: 8,
  },
];

interface Hero3DCardsProps {
  className?: string;
  onInactiveCardClick?: (card: TarotCardData) => void;
}

export function Hero3DCards({ className, onInactiveCardClick }: Hero3DCardsProps) {
  const hovered = useHeroCardStore((s) => s.hovered);
  const hover = useHeroCardStore((s) => s.hover);

  const playHoverSound = () => {
    try {
      const audio = new Audio(
        "/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/audio/card-hover.mp3"
      );
      audio.volume = 0.25;
      audio.play().catch(() => {});
    } catch {}
  };

  return (
    <div
      className={cn(
        "pointer-events-none z-20 flex max-w-svw -translate-y-12 justify-center gap-0 self-end perspective-distant perspective-origin-center sm:gap-8 xl:-translate-y-16 2xl:-translate-y-34",
        className
      )}
    >
      {heroCardsData.map((card) => {
        const isHovered = hovered === card.id;

        const handleMouseEnter = () => {
          hover(card.id);
          playHoverSound();
        };

        const handleMouseLeave = () => {
          hover("none");
        };

        const cardStyle: React.CSSProperties = {
          opacity: 1,
          transform: isHovered
            ? `rotateX(52deg) rotateY(${card.rotateY}deg) translateY(${card.active ? -48 : -12}px) scale(1.08)`
            : "rotateX(65deg) rotateY(0deg) translateY(0px) scale(1)",
          zIndex: isHovered ? 30 : 2,
          transition: "transform 0.45s cubic-bezier(0.25, 1, 0.5, 1), z-index 0.1s ease",
          transformStyle: "preserve-3d",
        };

        const cardClassName =
          "pointer-events-auto grid select-none [--mxw:calc((100vw/6)-var(--szh))] [--szh:2rem] transform-3d *:[grid-area:1/1] disabled:cursor-default! 2xl:[--szh:8rem] group cursor-pointer";

        const cardInner = (
          <>
            {/* Front Card Artwork */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-300">
              <Image
                src={card.image}
                alt={card.name}
                width={1286}
                height={2290}
                priority
                className="h-fit w-(--mxw) max-w-60 min-w-30 rounded-2xl will-change-[filter] sm:min-w-42 transition-all duration-300 group-hover:brightness-110"
                sizes="(max-width: 768px) 35vw, 25vw"
                style={{
                  borderWidth: "1px",
                  borderColor: isHovered ? "#f8d493" : "rgba(248, 212, 147, 0.08)",
                  filter: isHovered
                    ? "drop-shadow(0 96px 28px rgba(0, 0, 0, 0.6)) drop-shadow(0 0 35px rgba(243, 167, 84, 0.55))"
                    : "drop-shadow(rgba(0, 0, 0, 0.5) 0px 20px 4px)",
                }}
              />

              {/* Holographic Light Sheen Sweep on Hover */}
              <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden rounded-2xl">
                <div
                  className={cn(
                    "absolute -top-1/2 h-[200%] w-full -rotate-45 bg-gradient-to-r from-transparent via-[rgba(241,190,104,0.45)] to-transparent transition-all duration-700 ease-in-out",
                    isHovered ? "translate-x-[220%] opacity-100" : "-translate-x-full opacity-0"
                  )}
                  style={{ left: "-50%" }}
                />
              </div>
            </div>

            {/* Presentation div for 3D Flex Sizing */}
            <div
              role="presentation"
              className="-z-10 h-full w-(--mxw) max-w-60 min-w-36 rounded-2xl sm:min-w-42"
            />
          </>
        );

        if (card.active) {
          return (
            <Link
              key={card.id}
              href={card.href}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={cardClassName}
              style={cardStyle}
            >
              {cardInner}
            </Link>
          );
        }

        return (
          <button
            key={card.id}
            type="button"
            onClick={() => onInactiveCardClick?.(card)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={cardClassName}
            style={cardStyle}
          >
            {cardInner}
          </button>
        );
      })}
    </div>
  );
}

export default Hero3DCards;

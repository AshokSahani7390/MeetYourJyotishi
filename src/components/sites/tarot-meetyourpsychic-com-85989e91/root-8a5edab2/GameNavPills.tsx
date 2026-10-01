"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { RiveAnimation } from "./RiveAnimation";
import { useHeroCardStore } from "@/store/useHeroCardStore";
import { cn } from "@/lib/utils";

interface GameItem {
  id: string;
  name: string;
  href: string;
  status?: string;
  disabled?: boolean;
  iconArtboard?: string;
  iconImage: string;
}

const games: GameItem[] = [
  {
    id: "love",
    name: "Love Tarot",
    href: "/game/love",
    disabled: false,
    iconArtboard: "Love",
    iconImage: "/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/images/icon-love.webp",
  },
  {
    id: "free",
    name: "Free Tarot",
    href: "/game/free",
    status: "Coming Soon!",
    disabled: true,
    iconArtboard: "Free",
    iconImage: "/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/images/icon-free.webp",
  },
  {
    id: "yesno",
    name: "Yes/No",
    href: "/game/yesno",
    status: "Coming Soon!",
    disabled: true,
    iconArtboard: "YesNo",
    iconImage: "/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/images/icon-yesno.webp",
  },
  {
    id: "daily",
    name: "Daily Tarot",
    href: "/game/daily",
    status: "Coming Soon!",
    disabled: true,
    iconArtboard: "Day",
    iconImage: "/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/images/icon-daily.webp",
  },
  {
    id: "ai",
    name: "AI Tarot",
    href: "/game/ai",
    status: "Coming Soon!",
    disabled: true,
    iconArtboard: "AI",
    iconImage: "/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/images/icon-ai.webp",
  },
  {
    id: "one",
    name: "One Card",
    href: "/game/one",
    status: "Coming Soon!",
    disabled: true,
    iconArtboard: "One",
    iconImage: "/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/images/icon-one.webp",
  },
];

interface GameNavPillsProps {
  className?: string;
  onInactiveClick?: (card: { name: string; image: string }) => void;
}

export function GameNavPills({ className, onInactiveClick }: GameNavPillsProps) {
  const hovered = useHeroCardStore((s) => s.hovered);
  const hover = useHeroCardStore((s) => s.hover);

  const playHoverSound = () => {
    try {
      const audio = new Audio(
        "/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/audio/card-hover.mp3"
      );
      audio.volume = 0.2;
      audio.play().catch(() => {});
    } catch {}
  };

  return (
    <ul className={cn("my-8 grid grid-cols-3 gap-4 lg:grid-cols-6", className)}>
      {games.map((game) => {
        const isActive = hovered === game.id;

        const handleMouseEnter = () => {
          hover(game.id);
          playHoverSound();
        };

        const handleMouseLeave = () => {
          hover("none");
        };

        const content = (
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={cn(
              "group flex flex-col items-center text-center cursor-pointer transition-transform duration-300",
              game.disabled ? "aria-disabled cursor-pointer" : "hover:scale-105"
            )}
            aria-disabled={game.disabled}
          >
            <div
              className={cn(
                "mb-2 grid size-17 place-items-center overflow-clip rounded-full border sm:size-20 transition-all duration-300",
                isActive
                  ? "border-[#EEB576] bg-[rgba(238,181,118,0.22)] shadow-[0_0_28px_rgba(238,181,118,0.35)] scale-105"
                  : game.disabled
                  ? "border-[rgba(247,195,103,0.18)] bg-[rgba(247,195,103,0.06)] shadow-md group-hover:border-[#EEB576]/60 group-hover:bg-[rgba(238,181,118,0.15)] group-hover:shadow-[0_0_20px_rgba(238,181,118,0.25)]"
                  : "border-[rgba(247,195,103,0.35)] bg-[rgba(247,195,103,0.08)] shadow-[0_0_24px_rgba(247,195,103,0.15)] group-hover:bg-[rgba(247,195,103,0.2)] group-hover:border-[#EEB576] group-hover:shadow-[0_0_28px_rgba(238,181,118,0.35)]"
              )}
            >
              <div className="size-15 sm:size-19 flex items-center justify-center p-2">
                <RiveAnimation
                  src="/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/rive/tarot-icons.riv"
                  artboard={game.iconArtboard}
                  fallback={
                    <Image
                      src={game.iconImage}
                      alt={game.name}
                      width={64}
                      height={64}
                      className="size-10 sm:size-12 object-contain"
                    />
                  }
                />
              </div>
            </div>
            <span
              className={cn(
                "text-xs font-semibold uppercase select-none sm:text-sm tracking-wider transition-colors duration-300",
                isActive
                  ? "text-[#EEB576]"
                  : game.disabled
                  ? "text-white/60 group-hover:text-[#EEB576]"
                  : "text-white group-hover:text-[#EEB576]"
              )}
            >
              {game.name}
            </span>
            {game.status && (
              <span className="text-[11px] text-white/60 select-none sm:text-xs">
                {game.status}
              </span>
            )}
          </div>
        );

        return (
          <li key={game.id}>
            {game.disabled ? (
              <div
                role="button"
                tabIndex={0}
                onClick={() =>
                  onInactiveClick?.({
                    name: game.name,
                    image: `/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/images/${game.id}.webp`,
                  })
                }
                onKeyDown={(e) =>
                  e.key === "Enter" &&
                  onInactiveClick?.({
                    name: game.name,
                    image: `/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/images/${game.id}.webp`,
                  })
                }
              >
                {content}
              </div>
            ) : (
              <Link href={game.href} id={`game-target-${game.id}`}>
                {content}
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default GameNavPills;

"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  href?: string;
  showText?: boolean;
}

export function BrandLogo({
  className,
  size = "md",
  href = "/",
  showText = true,
}: BrandLogoProps) {
  const sizeClasses = {
    sm: "h-9",
    md: "h-11 sm:h-12",
    lg: "h-14 sm:h-16",
  };

  const logoContent = (
    <div
      className={cn(
        "group inline-flex items-center gap-2.5 select-none transition-all duration-300",
        sizeClasses[size],
        className
      )}
    >
      {/* Sacred Jyotish Celestial Emblem */}
      <div className="relative shrink-0 aspect-square h-full flex items-center justify-center">
        {/* Ambient celestial glow behind emblem */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#f3a754]/30 via-[#eeb576]/20 to-transparent blur-md group-hover:blur-lg group-hover:scale-110 transition-all duration-500 pointer-events-none" />

        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative size-full drop-shadow-[0_0_12px_rgba(243,167,84,0.45)] group-hover:drop-shadow-[0_0_18px_rgba(243,167,84,0.7)] group-hover:rotate-6 transition-all duration-500 ease-out"
        >
          <defs>
            <linearGradient id="goldSheen" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF4D9" />
              <stop offset="35%" stopColor="#F5C678" />
              <stop offset="70%" stopColor="#E29B4A" />
              <stop offset="100%" stopColor="#AA6D2E" />
            </linearGradient>

            <linearGradient id="coreGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor="#FFE099" />
              <stop offset="100%" stopColor="#F3A754" />
            </linearGradient>

            <radialGradient id="sunburst" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFE8B3" stopOpacity="0.9" />
              <stop offset="40%" stopColor="#F3A754" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#C7965F" stopOpacity="0" />
            </radialGradient>

            <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Outer Astrological Orbital Ring */}
          <circle
            cx="24"
            cy="24"
            r="22"
            stroke="url(#goldSheen)"
            strokeWidth="0.8"
            strokeOpacity="0.4"
            strokeDasharray="1.5 2.5"
          />

          {/* Cardinal Destiny Dots on Outer Ring */}
          <circle cx="24" cy="2" r="1.2" fill="url(#goldSheen)" />
          <circle cx="24" cy="46" r="1.2" fill="url(#goldSheen)" />
          <circle cx="2" cy="24" r="1.2" fill="url(#goldSheen)" />
          <circle cx="46" cy="24" r="1.2" fill="url(#goldSheen)" />

          {/* Inner Golden Halo Circle */}
          <circle
            cx="24"
            cy="24"
            r="18.5"
            stroke="url(#goldSheen)"
            strokeWidth="1.2"
            strokeOpacity="0.85"
          />

          {/* Sacred Navagraha 8-Pointed Star of Destiny */}
          {/* Cardinal 4-Pointed Primary Star */}
          <path
            d="M24 5 L26.8 19.5 L41 24 L26.8 28.5 L24 43 L21.2 28.5 L7 24 L21.2 19.5 Z"
            fill="url(#goldSheen)"
            opacity="0.95"
          />

          {/* Diagonal 4-Pointed Secondary Star */}
          <path
            d="M24 10 L25.8 20.8 L36 24 L25.8 27.2 L24 38 L22.2 27.2 L12 24 L22.2 20.8 Z"
            transform="rotate(45 24 24)"
            fill="url(#goldSheen)"
            opacity="0.75"
          />

          {/* Sacred Chandra (Crescent Moon) Embrace */}
          <path
            d="M22 13 C29 13 34 18 34 25 C34 32 28 36 22 36 C27.5 35 30.5 30.5 30.5 25 C30.5 19.5 27 14.5 22 13 Z"
            fill="url(#goldSheen)"
            opacity="0.9"
          />

          {/* Central Divya Drishti (Cosmic Third Eye / Radiant Diamond Core) */}
          <circle cx="24" cy="24" r="5.5" fill="url(#sunburst)" />
          <polygon
            points="24,19 28,24 24,29 20,24"
            fill="url(#coreGlow)"
            filter="url(#glowFilter)"
          />

          {/* Sparkling Center Bindu (Point of Pure Consciousness) */}
          <circle cx="24" cy="24" r="1.5" fill="#FFFFFF" />
        </svg>
      </div>

      {/* Brand Typography */}
      {showText && (
        <div className="flex flex-col justify-center leading-none tracking-normal">
          <div className="flex items-baseline gap-0.5">
            <span className="font-sans font-medium text-[0.88rem] sm:text-[1.02rem] tracking-tight text-[#EFE7D8] group-hover:text-white transition-colors drop-shadow-sm">
              MeetYour
            </span>
            <span
              className="font-header font-semibold text-[1.12rem] sm:text-[1.28rem] tracking-normal bg-gradient-to-r from-[#FFF5DE] via-[#F3A754] to-[#E29B4A] bg-clip-text text-transparent group-hover:from-white group-hover:via-[#FCD89B] group-hover:to-[#F3A754] transition-all drop-shadow-[0_0_12px_rgba(243,167,84,0.4)]"
              style={{
                fontFamily: "var(--font-header), 'OPTISerlio', Georgia, serif",
              }}
            >
              Jyotishi
            </span>
          </div>

          <span className="text-[0.52rem] sm:text-[0.58rem] tracking-[0.24em] uppercase font-semibold text-[#C7965F]/80 group-hover:text-[#EEB576] transition-colors -mt-0.5 font-sans">
            Celestial Destiny & Tarot
          </span>
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} aria-label="MeetYourJyotishi Home" className="outline-none">
        {logoContent}
      </Link>
    );
  }

  return logoContent;
}

export default BrandLogo;

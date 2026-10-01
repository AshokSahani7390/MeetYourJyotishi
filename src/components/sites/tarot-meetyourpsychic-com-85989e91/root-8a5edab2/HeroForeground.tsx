"use client";

import React, { useMemo, useCallback, useSyncExternalStore } from "react";
import Image from "next/image";
import { FlameItem } from "./FlameItem";
import { useCandleFlameStore, candleFlameStore } from "@/store/useCandleFlameStore";
import { cn } from "@/lib/utils";

function useMediaQuery(query: string, defaultValue = false) {
  const mediaQuery = useMemo(() => {
    if (typeof window === "undefined") return null;
    return window.matchMedia(query);
  }, [query]);

  const subscribe = useCallback(
    (callback: () => void) => {
      if (!mediaQuery) return () => {};
      mediaQuery.addEventListener("change", callback);
      return () => mediaQuery.removeEventListener("change", callback);
    },
    [mediaQuery]
  );

  const getSnapshot = useCallback(() => {
    return mediaQuery ? mediaQuery.matches : defaultValue;
  }, [mediaQuery, defaultValue]);

  const getServerSnapshot = useCallback(() => defaultValue, [defaultValue]);

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function HeroForeground({ className }: { className?: string }) {
  const { flames, easterActive } = useCandleFlameStore();

  const isTablet = useMediaQuery("(min-width: 768px)", false);
  const isDesktop = useMediaQuery("(min-width: 1024px)", true);

  const showCandleL1 = isDesktop;
  const showCandleR1 = isDesktop;
  const showCandleR2 = isTablet;

  return (
    <div
      className={cn(
        "stack-parent pointer-events-none absolute bottom-24 z-10 grid h-auto w-full scale-120 object-cover select-none md:bottom-32 md:translate-x-0 2xl:bottom-28 2xl:scale-100",
        className
      )}
    >
      {/* 1. Altar Disc of Life Background Graphic */}
      <picture className="stack-child pointer-events-none">
        <source
          media="(min-width: 1024px)"
          srcSet="/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/images/hero-fg-desktop.webp"
        />
        <source
          media="(min-width: 768px)"
          srcSet="/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/images/hero-fg-tablet.webp"
        />
        <source
          media="(max-width: 767px)"
          srcSet="/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/images/hero-fg-mobile.webp"
        />
        <img
          src="/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/images/hero-fg-desktop.webp"
          alt="Disc of life"
          width={2048}
          height={974}
          draggable={false}
          className="w-full h-auto object-cover pointer-events-none"
        />
      </picture>

      {/* 2. Darkness Easter Egg Activated When All Visible Flames Are Extinguished */}
      {easterActive && (
        <div className="stack-child pointer-events-auto absolute inset-0 z-30 flex flex-col items-center justify-center p-4">
          <div className="flex flex-col items-center gap-4 bg-black/60 backdrop-blur-md p-8 rounded-3xl border border-[#EEB576]/30 shadow-[0_0_50px_rgba(238,181,118,0.2)] animate-in fade-in zoom-in duration-700">
            <span className="max-w-[15ch] text-center font-header text-3xl sm:text-5xl text-[#f3a754] drop-shadow-[0_0_20px_rgba(243,167,84,0.6)]">
              The stars reveal your path in darkness
            </span>
            <p className="text-sm text-[#b6b4b4] text-center max-w-md">
              All sacred flames have been extinguished. The altar will reignite in 15 seconds, or click below to restore celestial light.
            </p>
            <button
              onClick={() => candleFlameStore.setAllFlamesOn()}
              className="mt-2 px-6 py-2 rounded-full bg-gradient-to-r from-[#f3a754] to-[#f5c678] text-[#0d0b21] font-semibold text-sm hover:scale-105 transition-transform cursor-pointer shadow-lg"
            >
              Reignite All Flames Now
            </button>
          </div>
        </div>
      )}

      {/* 3. Candle Stands with Responsive 1:1 Parity Matching the Target Site */}
      <div className="stack-child pointer-events-none">
        {/* Candle 1 (Left 1: Single Candlestick with Base - Desktop only >= 1024px) */}
        {showCandleL1 && (
          <div className="hidden lg:block absolute top-[-32%] left-[11%] w-[12.5%] pointer-events-auto">
            <FlameItem
              id="left-1"
              width="75%"
              className="pointer-events-auto mx-auto aspect-square overflow-hidden pointer-events-auto translate-y-[38%]"
              isLit={flames["left-1"]}
            />
            <Image
              src="/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/images/hero-fg-candle-l-1.png"
              alt="Candle Left 1"
              width={547}
              height={1160}
              className="h-full w-full object-contain pointer-events-none"
            />
          </div>
        )}

        {/* Candle 2 (Left 2: Single Tall Candlestick - Always visible across mobile, tablet, desktop) */}
        <div className="absolute top-[-7%] left-[2%] w-[12.5%] md:top-[-9%] md:left-[13%] md:w-[10%] lg:top-[-10.5%] lg:left-[23.1%] lg:w-[7.6%] pointer-events-auto">
          <FlameItem
            id="left-2"
            width="80%"
            className="pointer-events-auto mx-auto aspect-square overflow-hidden pointer-events-auto translate-x-[-4%] translate-y-[35%]"
            isLit={flames["left-2"]}
          />
          <Image
            src="/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/images/hero-fg-candle-l-2.png"
            alt="Candle Left 2"
            width={314}
            height={951}
            className="h-full w-full object-contain pointer-events-none"
          />
        </div>

        {/* Candle 3 (Left 3: Cluster of 4 Candles - Always visible across mobile, tablet, desktop) */}
        <div className="stack-parent absolute top-[28%] left-[13.2%] grid w-[21%] md:top-[28%] md:left-[22.2%] md:w-[15%] lg:top-[27%] lg:left-[29.5%] lg:w-[11.7%] pointer-events-auto">
          <div className="stack-children pointer-events-auto relative h-full w-full">
            <FlameItem
              id="left-3-1"
              width="65%"
              className="pointer-events-auto mx-auto aspect-square overflow-hidden absolute translate-x-[9%] translate-y-[-60%]"
              isLit={flames["left-3-1"]}
            />
            <FlameItem
              id="left-3-2"
              width="29%"
              className="pointer-events-auto mx-auto aspect-square overflow-hidden absolute translate-x-[228%] translate-y-[10%]"
              isLit={flames["left-3-2"]}
            />
            <FlameItem
              id="left-3-3"
              width="22%"
              className="pointer-events-auto mx-auto aspect-square overflow-hidden absolute translate-x-[269%] translate-y-[80%]"
              isLit={flames["left-3-3"]}
            />
            <FlameItem
              id="left-3-4"
              width="29%"
              className="pointer-events-auto mx-auto aspect-square overflow-hidden absolute translate-x-[-18%] translate-y-[29%]"
              isLit={flames["left-3-4"]}
            />
          </div>
          <Image
            src="/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/images/hero-fg-candle-l-3.png"
            alt="Candles Left 3"
            width={482}
            height={599}
            className="h-full w-full object-contain pointer-events-none"
          />
        </div>

        {/* Candle 4 (Right 3: Cluster of 4 Candles including Large Pillar - Always visible across all screens) */}
        <div className="stack-parent absolute top-[23%] left-[60.5%] grid w-[33%] md:left-[57.5%] md:w-[23.5%] lg:left-[55.5%] lg:w-[17.8%] pointer-events-auto">
          <div className="stack-child pointer-events-auto relative h-full w-full">
            <FlameItem
              id="right-3-1"
              width="55%"
              className="pointer-events-auto mx-auto aspect-square overflow-hidden absolute translate-x-[72%] translate-y-[-63%]"
              isLit={flames["right-3-1"]}
            />
            <FlameItem
              id="right-3-2"
              width="25%"
              className="pointer-events-auto mx-auto aspect-square overflow-hidden absolute translate-x-[34%] translate-y-[25%]"
              isLit={flames["right-3-2"]}
            />
            <FlameItem
              id="right-3-3"
              width="20%"
              className="pointer-events-auto mx-auto aspect-square overflow-hidden absolute translate-x-[143%] translate-y-[103%]"
              isLit={flames["right-3-3"]}
            />
            <FlameItem
              id="right-3-4"
              width="20%"
              className="pointer-events-auto mx-auto aspect-square overflow-hidden absolute translate-x-[409%] translate-y-[110%]"
              isLit={flames["right-3-4"]}
            />
          </div>
          <Image
            src="/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/images/hero-fg-candle-r-3.png"
            alt="Candles Right 3"
            width={770}
            height={861}
            className="stack-child h-full w-full object-contain pointer-events-none"
          />
        </div>

        {/* Candle 5 (Right 2: Medium Candlestick - Tablet & Desktop >= 768px) */}
        {showCandleR2 && (
          <div className="hidden md:block absolute top-[-9.8%] left-[77.7%] w-[9%] lg:top-[-9%] lg:left-[70.7%] lg:w-[6.4%] pointer-events-auto">
            <FlameItem
              id="right-2"
              width="105%"
              className="pointer-events-auto mx-auto aspect-square overflow-hidden pointer-events-auto translate-x-[-2%] translate-y-[36%] lg:translate-x-[-1.5%] lg:translate-y-[35%]"
              isLit={flames["right-2"]}
            />
            <Image
              src="/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/images/hero-fg-candle-r-2.png"
              alt="Candle Right 2"
              width={278}
              height={950}
              className="h-full w-full object-contain pointer-events-none"
            />
          </div>
        )}

        {/* Candle 6 (Right 1: Single Candlestick with Base - Desktop only >= 1024px) */}
        {showCandleR1 && (
          <div className="hidden lg:block absolute top-[-27.5%] left-[76.5%] w-[13%] pointer-events-auto">
            <FlameItem
              id="right-1"
              width="70%"
              className="pointer-events-auto mx-auto aspect-square overflow-hidden pointer-events-auto translate-x-[3%] translate-y-[39%]"
              isLit={flames["right-1"]}
            />
            <Image
              src="/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/images/hero-fg-candle-r-1.png"
              alt="Candle Right 1"
              width={562}
              height={1061}
              className="h-full w-full object-contain pointer-events-none"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default HeroForeground;

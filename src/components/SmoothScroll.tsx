"use client";

import React, { useEffect, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

let globalLenis: Lenis | null = null;
const listeners = new Set<() => void>();

function subscribe(callback: () => void) {
  listeners.add(callback);
  return () => {
    listeners.delete(callback);
  };
}

function getSnapshot() {
  return globalLenis;
}

function getServerSnapshot() {
  return null;
}

export function useLenis() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // Initialize Lenis smooth scroll engine
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential deceleration
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      infinite: false,
    });

    globalLenis = lenis;
    listeners.forEach((cb) => cb());

    // Attach class to html for Lenis CSS scoping
    document.documentElement.classList.add("lenis", "lenis-smooth");

    let animationFrameId: number;

    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    // Global anchor link smooth scroll interceptor
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest("a");
      if (!target) return;
      const href = target.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        e.preventDefault();
        const element = document.querySelector<HTMLElement>(href);
        if (element) {
          lenis.scrollTo(element, { offset: -60, duration: 1.4 });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      cancelAnimationFrame(animationFrameId);
      document.removeEventListener("click", handleAnchorClick);
      document.documentElement.classList.remove("lenis", "lenis-smooth");
      lenis.destroy();
      globalLenis = null;
      listeners.forEach((cb) => cb());
    };
  }, []);

  // Reset scroll to top smoothly when route changes in Next.js App Router
  useEffect(() => {
    if (globalLenis) {
      globalLenis.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  return <>{children}</>;
}

export default SmoothScroll;

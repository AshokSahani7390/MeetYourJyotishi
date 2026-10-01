"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useLenis } from "./SmoothScroll";
import { cn } from "@/lib/utils";

export function BackToTop({ className }: { className?: string }) {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const lenis = useLenis();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;

      setProgress(Math.min(100, Math.max(0, scrollPercent)));
      setVisible(scrollY > 280);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
          className={cn("fixed bottom-6 right-6 z-40", className)}
        >
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            title="Scroll back to top"
            className="group relative flex size-12 items-center justify-center rounded-full bg-[#161233]/90 text-white backdrop-blur-xl border border-[#F3A754]/30 shadow-[0_4px_25px_rgba(243,167,84,0.25)] transition-all hover:scale-110 hover:border-[#F3A754] hover:shadow-[0_0_25px_rgba(243,167,84,0.6)] cursor-pointer"
          >
            {/* SVG Circular Progress Ring */}
            <svg className="absolute inset-0 size-full -rotate-90 pointer-events-none" viewBox="0 0 44 44">
              <circle
                cx="22"
                cy="22"
                r={radius}
                className="stroke-white/10"
                strokeWidth="2.5"
                fill="none"
              />
              <circle
                cx="22"
                cy="22"
                r={radius}
                stroke="url(#progressGold)"
                strokeWidth="2.5"
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                className="transition-all duration-150 ease-out"
              />
              <defs>
                <linearGradient id="progressGold" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFF4D9" />
                  <stop offset="50%" stopColor="#F3A754" />
                  <stop offset="100%" stopColor="#7F65F2" />
                </linearGradient>
              </defs>
            </svg>

            {/* Glowing Arrow */}
            <ArrowUp className="size-5 text-[#EEB576] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:text-white" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default BackToTop;

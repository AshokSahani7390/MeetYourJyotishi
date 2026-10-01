"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
      className={cn(
        "relative flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[#EEB576] transition-all hover:scale-105 hover:bg-white/10 hover:border-[#F3A754]/40 hover:shadow-[0_0_15px_rgba(243,167,84,0.3)] cursor-pointer",
        className
      )}
    >
      <motion.div
        key={resolvedTheme}
        initial={{ rotate: -90, scale: 0, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        exit={{ rotate: 90, scale: 0, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="flex items-center justify-center"
      >
        {resolvedTheme === "dark" ? (
          <Sun className="size-4.5 text-[#F3A754]" />
        ) : (
          <Moon className="size-4.5 text-[#7F65F2]" />
        )}
      </motion.div>
    </button>
  );
}

export default ThemeToggle;

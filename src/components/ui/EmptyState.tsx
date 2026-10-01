"use client";

import React from "react";
import { motion } from "framer-motion";
import { SearchX, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

interface EmptyStateProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  actionText?: string;
  onAction?: () => void;
  suggestions?: string[];
  onSelectSuggestion?: (s: string) => void;
  className?: string;
}

export function EmptyState({
  title = "No Celestial Alignments Found",
  description = "The oracle found no archetypes matching your query. Consider broadening your cosmic search or exploring other suits.",
  icon,
  actionText = "Reset Filters",
  onAction,
  suggestions = ["The Fool", "The Lovers", "Ace of Cups", "Wheel of Fortune"],
  onSelectSuggestion,
  className,
}: EmptyStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className={cn(
        "flex flex-col items-center justify-center text-center p-8 sm:p-12 rounded-3xl bg-[#140F2E]/60 border border-white/10 backdrop-blur-md max-w-lg mx-auto shadow-2xl",
        className
      )}
    >
      {/* Ornate Glowing Icon */}
      <div className="relative mb-6">
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#F3A754]/30 via-[#7F65F2]/20 to-transparent blur-xl pointer-events-none" />
        <div className="relative size-20 rounded-full bg-white/5 border border-[#F3A754]/40 flex items-center justify-center text-[#F3A754] shadow-[0_0_25px_rgba(243,167,84,0.3)]">
          {icon || <SearchX className="size-9 text-[#EEB576]" />}
        </div>
      </div>

      {/* Title & Description */}
      <h3 className="font-header text-2xl sm:text-3xl text-white mb-2">{title}</h3>
      <p className="text-sm text-white/70 max-w-sm font-light leading-relaxed mb-6">
        {description}
      </p>

      {/* Suggestions */}
      {suggestions && suggestions.length > 0 && onSelectSuggestion && (
        <div className="w-full mb-6">
          <span className="text-[11px] uppercase tracking-wider text-[#EEB576] font-semibold block mb-2.5">
            Suggested Inquiries
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {suggestions.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => onSelectSuggestion(s)}
                className="px-3 py-1 rounded-full text-xs bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#F3A754]/40 text-white/80 hover:text-white transition-all cursor-pointer"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Primary Action Button */}
      {onAction && (
        <button
          type="button"
          onClick={onAction}
          className="btn-plain-cta px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-[#161233] shadow-lg hover:brightness-110 flex items-center gap-2 cursor-pointer transition-transform hover:scale-105"
        >
          <RotateCcw className="size-3.5" />
          {actionText}
        </button>
      )}
    </motion.div>
  );
}

export default EmptyState;

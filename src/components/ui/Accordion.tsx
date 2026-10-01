"use client";

import React, { createContext, useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionContextType {
  activeId: string | null;
  toggle: (id: string) => void;
}

const AccordionContext = createContext<AccordionContextType | undefined>(undefined);

export function Accordion({
  children,
  className,
  defaultOpenId = null,
}: {
  children: React.ReactNode;
  className?: string;
  defaultOpenId?: string | null;
}) {
  const [activeId, setActiveId] = useState<string | null>(defaultOpenId);

  const toggle = (id: string) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <AccordionContext.Provider value={{ activeId, toggle }}>
      <div className={cn("space-y-3", className)}>{children}</div>
    </AccordionContext.Provider>
  );
}

export function AccordionItem({
  id,
  title,
  children,
  badge,
  className,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
  badge?: string;
  className?: string;
}) {
  const context = useContext(AccordionContext);
  if (!context) throw new Error("AccordionItem must be within Accordion");

  const isOpen = context.activeId === id;

  return (
    <div
      className={cn(
        "rounded-2xl border transition-all duration-300 overflow-hidden",
        isOpen
          ? "bg-[#18123A]/90 border-[#F3A754]/40 shadow-[0_10px_30px_rgba(243,167,84,0.15)]"
          : "bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/[0.07]",
        className
      )}
    >
      <button
        type="button"
        onClick={() => context.toggle(id)}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="font-header text-base sm:text-lg text-white font-medium">
            {title}
          </span>
          {badge && (
            <span className="text-[10px] tracking-wider uppercase font-semibold text-[#EEB576] px-2 py-0.5 rounded-full bg-[#F3A754]/15 border border-[#F3A754]/30">
              {badge}
            </span>
          )}
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className={cn(
            "size-8 rounded-full flex items-center justify-center shrink-0 transition-colors",
            isOpen ? "bg-[#F3A754]/20 text-[#F3A754]" : "bg-white/5 text-white/60"
          )}
        >
          <ChevronDown className="size-4" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm text-white/70 font-light leading-relaxed border-t border-white/5 pt-4">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Accordion;

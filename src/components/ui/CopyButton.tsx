"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check } from "lucide-react";
import { useToast } from "./Toast";
import { cn } from "@/lib/utils";

interface CopyButtonProps {
  text: string;
  label?: string;
  successLabel?: string;
  className?: string;
  showToast?: boolean;
  toastMessage?: string;
}

export function CopyButton({
  text,
  label,
  successLabel = "Copied!",
  className,
  showToast = true,
  toastMessage,
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);

      if (showToast) {
        toast({
          title: "Copied to Clipboard",
          description: toastMessage || `"${text.length > 32 ? text.substring(0, 32) + '...' : text}" is copied.`,
          variant: "success",
          duration: 3000,
        });
      }

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      toast({
        title: "Copy Failed",
        description: "Please check your browser clipboard permissions.",
        variant: "error",
      });
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? successLabel : label || "Copy to clipboard"}
      title={copied ? successLabel : label || "Copy to clipboard"}
      className={cn(
        "group relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer select-none",
        copied
          ? "bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/40 shadow-[0_0_12px_rgba(16,185,129,0.3)]"
          : "bg-white/5 hover:bg-white/10 text-white/70 hover:text-white border border-white/10 hover:border-[#F3A754]/40 hover:shadow-[0_0_12px_rgba(243,167,84,0.25)]",
        className
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        {copied ? (
          <motion.span
            key="copied"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="flex items-center gap-1.5"
          >
            <Check className="size-3.5 text-[#10B981]" />
            <span>{successLabel}</span>
          </motion.span>
        ) : (
          <motion.span
            key="copy"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="flex items-center gap-1.5"
          >
            <Copy className="size-3.5 group-hover:text-[#F3A754] transition-colors" />
            {label && <span>{label}</span>}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}

export default CopyButton;

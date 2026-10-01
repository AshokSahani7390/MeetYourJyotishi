"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertTriangle, AlertCircle, Info, X } from "lucide-react";
import { cn } from "@/lib/utils";

export type ToastVariant = "success" | "info" | "warning" | "error";

export interface ToastItem {
  id: string;
  title: string;
  description?: string;
  variant?: ToastVariant;
  duration?: number;
}

interface ToastContextType {
  toast: (options: Omit<ToastItem, "id">) => void;
  dismiss: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const dismiss = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const toast = useCallback(
    ({ title, description, variant = "info", duration = 4000 }: Omit<ToastItem, "id">) => {
      const id = Math.random().toString(36).substring(2, 9);
      const newToast: ToastItem = { id, title, description, variant, duration };

      setToasts((prev) => [...prev, newToast]);

      if (duration > 0) {
        setTimeout(() => {
          dismiss(id);
        }, duration);
      }
    },
    [dismiss]
  );

  const getVariantStyles = (variant: ToastVariant) => {
    switch (variant) {
      case "success":
        return {
          icon: <CheckCircle2 className="size-5 text-[#10B981] shrink-0" />,
          border: "border-[#10B981]/40",
          glow: "shadow-[0_0_20px_rgba(16,185,129,0.25)]",
          badge: "bg-[#10B981]/15 text-[#10B981]",
        };
      case "warning":
        return {
          icon: <AlertTriangle className="size-5 text-[#F59E0B] shrink-0" />,
          border: "border-[#F59E0B]/40",
          glow: "shadow-[0_0_20px_rgba(245,158,11,0.25)]",
          badge: "bg-[#F59E0B]/15 text-[#F59E0B]",
        };
      case "error":
        return {
          icon: <AlertCircle className="size-5 text-[#EF4444] shrink-0" />,
          border: "border-[#EF4444]/40",
          glow: "shadow-[0_0_20px_rgba(239,68,68,0.25)]",
          badge: "bg-[#EF4444]/15 text-[#EF4444]",
        };
      case "info":
      default:
        return {
          icon: <Info className="size-5 text-[#F3A754] shrink-0" />,
          border: "border-[#F3A754]/40",
          glow: "shadow-[0_0_20px_rgba(243,167,84,0.25)]",
          badge: "bg-[#F3A754]/15 text-[#F3A754]",
        };
    }
  };

  return (
    <ToastContext.Provider value={{ toast, dismiss }}>
      {children}

      {/* Floating Toaster Container */}
      <div
        aria-live="polite"
        className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-sm w-full pointer-events-none"
      >
        <AnimatePresence>
          {toasts.map((t) => {
            const styles = getVariantStyles(t.variant || "info");

            return (
              <motion.div
                key={t.id}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className={cn(
                  "pointer-events-auto relative flex items-start gap-3 p-4 rounded-2xl bg-[#161233]/95 backdrop-blur-xl border text-white shadow-2xl",
                  styles.border,
                  styles.glow
                )}
              >
                {styles.icon}
                <div className="flex-1 space-y-1 pr-2">
                  <h4 className="text-sm font-semibold tracking-tight text-white">{t.title}</h4>
                  {t.description && (
                    <p className="text-xs text-white/70 leading-relaxed font-light">{t.description}</p>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => dismiss(t.id)}
                  aria-label="Close notification"
                  className="text-white/40 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/5 cursor-pointer shrink-0"
                >
                  <X className="size-4" />
                </button>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

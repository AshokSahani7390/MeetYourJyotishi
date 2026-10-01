"use client";

import React, { useState } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export interface PasswordInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  error?: string;
  showIcon?: boolean;
}

export function PasswordInput({
  label,
  error,
  className,
  showIcon = true,
  ...props
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full space-y-1.5">
      {label && (
        <label className="block text-xs font-medium text-white/80 tracking-wide">
          {label}
        </label>
      )}

      <div className="relative flex items-center">
        {showIcon && (
          <div className="absolute left-4 pointer-events-none text-white/40">
            <Lock className="size-4" />
          </div>
        )}

        <input
          type={showPassword ? "text" : "password"}
          className={cn(
            "w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/30 backdrop-blur-md outline-none transition-all",
            "focus:border-[#F3A754]/80 focus:bg-white/[0.08] focus:shadow-[0_0_15px_rgba(243,167,84,0.25)]",
            showIcon && "pl-11",
            "pr-12",
            error && "border-red-500/70 focus:border-red-500",
            className
          )}
          {...props}
        />

        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          aria-label={showPassword ? "Hide password" : "Show password"}
          title={showPassword ? "Hide password" : "Show password"}
          aria-pressed={showPassword}
          className="absolute right-3.5 p-1 rounded-lg text-white/50 hover:text-[#EEB576] transition-colors cursor-pointer hover:bg-white/5"
        >
          <AnimatePresence mode="wait" initial={false}>
            {showPassword ? (
              <motion.div
                key="eye-off"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.15 }}
              >
                <EyeOff className="size-4.5" />
              </motion.div>
            ) : (
              <motion.div
                key="eye"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.15 }}
              >
                <Eye className="size-4.5" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {error && <p className="text-[11px] text-red-400 font-light">{error}</p>}
    </div>
  );
}

export default PasswordInput;

"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Mail, User, ShieldCheck } from "lucide-react";
import { PasswordInput } from "./ui/PasswordInput";
import { useToast } from "./ui/Toast";
import { cn } from "@/lib/utils";

export function AuthModal() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const { toast } = useToast();

  useEffect(() => {
    const handleOpen = () => setOpen(true);
    window.addEventListener("open-auth-modal", handleOpen);
    return () => window.removeEventListener("open-auth-modal", handleOpen);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email.trim())) {
      toast({
        title: "Invalid Email Address",
        description: "Please enter a valid email to enter your celestial sanctuary.",
        variant: "warning",
      });
      return;
    }

    if (!password || password.length < 6) {
      toast({
        title: "Password Too Short",
        description: "Your sacred password must contain at least 6 characters.",
        variant: "warning",
      });
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
      toast({
        title: mode === "login" ? "Welcome Back to the Sanctuary" : "Sacred Account Initiated",
        description: `Blessed day, ${name || email.split("@")[0]}. Your celestial readings are synchronized.`,
        variant: "success",
      });
      setEmail("");
      setPassword("");
      setName("");
    }, 800);
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-[#070514]/80 backdrop-blur-xl"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 380, damping: 28 }}
            className="relative w-full max-w-md rounded-3xl bg-[#151033] border border-[#F3A754]/30 p-6 sm:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.8)] z-10 text-white"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute top-5 right-5 p-1 rounded-lg text-white/40 hover:text-white transition-colors cursor-pointer"
            >
              <X className="size-5" />
            </button>

            {/* Header */}
            <div className="text-center space-y-2 mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#F3A754]/15 text-[#EEB576] border border-[#F3A754]/30">
                <Sparkles className="size-3.5" />
                Member Sanctuary
              </div>
              <h3 className="font-header text-2xl sm:text-3xl text-white">
                {mode === "login" ? "Enter the Sanctuary" : "Begin Your Journey"}
              </h3>
              <p className="text-xs text-white/60 font-light">
                {mode === "login"
                  ? "Access your saved tarot spreads and astrology chart notes."
                  : "Create your free celestial portal for personalized readings."}
              </p>
            </div>

            {/* Mode Switch Tabs */}
            <div className="flex rounded-full bg-white/5 p-1 mb-6 border border-white/10">
              <button
                type="button"
                onClick={() => setMode("login")}
                className={cn(
                  "flex-1 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer",
                  mode === "login"
                    ? "bg-[#7F65F2] text-white shadow-md"
                    : "text-white/60 hover:text-white"
                )}
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => setMode("signup")}
                className={cn(
                  "flex-1 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer",
                  mode === "signup"
                    ? "bg-[#7F65F2] text-white shadow-md"
                    : "text-white/60 hover:text-white"
                )}
              >
                Join Sanctuary
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {mode === "signup" && (
                <div className="space-y-1.5">
                  <label className="block text-xs font-medium text-white/80">Spiritual Name / Seeker</label>
                  <div className="relative flex items-center">
                    <User className="size-4 absolute left-4 text-white/40 pointer-events-none" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Maya Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-2xl bg-white/5 border border-white/10 pl-11 pr-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-[#F3A754] transition-all"
                    />
                  </div>
                </div>
              )}

              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-white/80">Email Address</label>
                <div className="relative flex items-center">
                  <Mail className="size-4 absolute left-4 text-white/40 pointer-events-none" />
                  <input
                    type="email"
                    required
                    placeholder="seeker@destiny.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-2xl bg-white/5 border border-white/10 pl-11 pr-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-[#F3A754] transition-all"
                  />
                </div>
              </div>

              {/* Password Input with Eye Visibility Toggle */}
              <PasswordInput
                label="Sacred Password"
                placeholder="Enter password..."
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-full btn-plain-cta font-semibold text-sm text-[#161233] shadow-lg hover:brightness-110 cursor-pointer flex items-center justify-center gap-2 mt-2"
              >
                {loading ? (
                  <span className="size-4 rounded-full border-2 border-[#161233] border-t-transparent animate-spin" />
                ) : (
                  <>
                    <ShieldCheck className="size-4" />
                    {mode === "login" ? "Enter Sanctuary" : "Create Sanctuary Pass"}
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default AuthModal;

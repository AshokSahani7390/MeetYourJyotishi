"use client";

import React, { useState, useEffect, useSyncExternalStore } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Settings, X, Cookie } from "lucide-react";

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  functional: boolean;
  marketing: boolean;
}

const emptySubscribe = () => () => {};

export function CookieBanner() {
  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
  const [open, setOpen] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [prefs, setPrefs] = useState<CookiePreferences>({
    essential: true,
    analytics: true,
    functional: true,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("meetyourjyotishi-cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setOpen(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const all = { essential: true, analytics: true, functional: true, marketing: true };
    localStorage.setItem("meetyourjyotishi-cookie-consent", JSON.stringify(all));
    setOpen(false);
  };

  const handleEssentialOnly = () => {
    const essential = { essential: true, analytics: false, functional: false, marketing: false };
    localStorage.setItem("meetyourjyotishi-cookie-consent", JSON.stringify(essential));
    setOpen(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("meetyourjyotishi-cookie-consent", JSON.stringify(prefs));
    setOpen(false);
  };

  if (!isClient) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 350, damping: 28 }}
          className="fixed bottom-6 left-6 right-6 sm:right-auto sm:max-w-md z-50 pointer-events-auto"
        >
          <div className="relative rounded-3xl bg-[#140F2E]/95 border border-[#F3A754]/30 p-6 text-white shadow-[0_15px_50px_rgba(0,0,0,0.6)] backdrop-blur-2xl">
            {/* Header */}
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="flex items-center gap-2.5">
                <div className="size-9 rounded-full bg-[#F3A754]/20 border border-[#F3A754]/40 flex items-center justify-center text-[#F3A754]">
                  <Cookie className="size-5" />
                </div>
                <div>
                  <h3 className="font-header text-lg text-white">Cookie Sanctuary</h3>
                  <p className="text-[11px] text-[#EEB576] uppercase tracking-wider font-semibold">
                    GDPR & CCPA Compliance
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleEssentialOnly}
                aria-label="Close cookie banner"
                className="text-white/40 hover:text-white transition-colors p-1 rounded-lg"
              >
                <X className="size-4" />
              </button>
            </div>

            {/* Description */}
            <p className="text-xs text-white/70 leading-relaxed font-light mb-4">
              MeetYourJyotishi uses essential cookies to ensure our digital tarot spreads and celestial soundscapes work seamlessly. With your blessing, we also use analytical cookies to improve astrological algorithms.
            </p>

            {/* Expandable Preferences Panel */}
            <AnimatePresence>
              {showPreferences && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-2.5 py-3 border-t border-white/10 mb-4 overflow-hidden text-xs"
                >
                  <div className="flex items-center justify-between p-2 rounded-xl bg-white/5">
                    <div>
                      <span className="font-medium text-white">Essential Cookies</span>
                      <p className="text-[10px] text-white/50">Required for tarot card shuffles & audio.</p>
                    </div>
                    <span className="text-[11px] font-semibold text-[#10B981]">Always Active</span>
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-xl bg-white/5">
                    <div>
                      <span className="font-medium text-white">Analytics & Performance</span>
                      <p className="text-[10px] text-white/50">Helps refine reading accuracy.</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={prefs.analytics}
                      onChange={(e) => setPrefs({ ...prefs, analytics: e.target.checked })}
                      className="size-4 accent-[#F3A754] cursor-pointer"
                    />
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-xl bg-white/5">
                    <div>
                      <span className="font-medium text-white">Functional Preferences</span>
                      <p className="text-[10px] text-white/50">Remembers your chosen zodiac & sound state.</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={prefs.functional}
                      onChange={(e) => setPrefs({ ...prefs, functional: e.target.checked })}
                      className="size-4 accent-[#F3A754] cursor-pointer"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Actions */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={showPreferences ? handleSavePreferences : handleAcceptAll}
                  className="flex-1 py-2.5 px-4 rounded-full btn-plain-cta text-xs font-semibold text-[#161233] shadow-md hover:brightness-110 cursor-pointer text-center"
                >
                  {showPreferences ? "Save Preferences" : "Accept All Cookies"}
                </button>
                <button
                  type="button"
                  onClick={handleEssentialOnly}
                  className="py-2.5 px-4 rounded-full bg-white/10 hover:bg-white/15 text-xs font-medium text-white/90 border border-white/10 transition-colors cursor-pointer"
                >
                  Essential Only
                </button>
              </div>

              <div className="flex items-center justify-between pt-1 text-[11px] text-white/50">
                <button
                  type="button"
                  onClick={() => setShowPreferences(!showPreferences)}
                  className="hover:text-[#EEB576] transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <Settings className="size-3" />
                  {showPreferences ? "Hide Settings" : "Customize Settings"}
                </button>
                <div className="flex items-center gap-2">
                  <Link href="/privacy" className="hover:text-white transition-colors">
                    Privacy
                  </Link>
                  <span>•</span>
                  <Link href="/terms" className="hover:text-white transition-colors">
                    Terms
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default CookieBanner;

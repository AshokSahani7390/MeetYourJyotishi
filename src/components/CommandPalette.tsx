"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Sparkles,
  BookOpen,
  MessageCircle,
  Phone,
  HelpCircle,
  Mail,
  Shield,
  FileText,
  Sun,
  Moon,
  ArrowUp,
  Share2,
  X,
  Compass,
} from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useLenis } from "./SmoothScroll";
import { useToast } from "./ui/Toast";
import { cn } from "@/lib/utils";

interface CommandItem {
  id: string;
  title: string;
  subtitle: string;
  category: "Navigation" | "Actions" | "Tarot Archetypes";
  icon: React.ReactNode;
  action: () => void;
  keywords?: string[];
}

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const router = useRouter();
  const { resolvedTheme, toggleTheme } = useTheme();
  const lenis = useLenis();
  const { toast } = useToast();

  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => {
    setOpen(false);
    setSearch("");
    setSelectedIndex(0);
  }, []);

  // Global keyboard shortcut listener for Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      } else if (e.key === "Escape" && open) {
        e.preventDefault();
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, handleClose]);

  // Dispatch custom event listener so any UI button can trigger opening
  useEffect(() => {
    const openListener = () => handleOpen();
    window.addEventListener("open-command-palette", openListener);
    return () => window.removeEventListener("open-command-palette", openListener);
  }, [handleOpen]);

  const commands: CommandItem[] = useMemo(
    () => [
      {
        id: "nav-home",
        title: "Home Sanctuary",
        subtitle: "Return to the interactive sacred altar",
        category: "Navigation",
        icon: <Compass className="size-4 text-[#F3A754]" />,
        action: () => {
          router.push("/");
          handleClose();
        },
        keywords: ["home", "altar", "main"],
      },
      {
        id: "nav-cards",
        title: "Tarot Encyclopedia (78 Cards)",
        subtitle: "Explore Major & Minor Arcana card meanings & symbolism",
        category: "Navigation",
        icon: <BookOpen className="size-4 text-[#7F65F2]" />,
        action: () => {
          router.push("/cards");
          handleClose();
        },
        keywords: ["cards", "meanings", "major", "minor", "tarot", "encyclopedia"],
      },
      {
        id: "nav-psychic",
        title: "AI Jyotishi Chat",
        subtitle: "Consult the algorithmic oracle with your spiritual inquiries",
        category: "Navigation",
        icon: <MessageCircle className="size-4 text-[#EEB576]" />,
        action: () => {
          router.push("/psychic");
          handleClose();
        },
        keywords: ["chat", "ai", "oracle", "jyotishi", "consult"],
      },
      {
        id: "nav-psychics",
        title: "Talk to a Jyotishi Advisor",
        subtitle: "Browse vetted Vedic astrologers and spiritual masters",
        category: "Navigation",
        icon: <Phone className="size-4 text-[#10B981]" />,
        action: () => {
          router.push("/psychics");
          handleClose();
        },
        keywords: ["psychics", "jyotishis", "advisors", "phone", "live reading"],
      },
      {
        id: "nav-love",
        title: "Love & Relationship Tarot",
        subtitle: "Interactive 3-card spread exploring soul connections",
        category: "Navigation",
        icon: <Sparkles className="size-4 text-[#EC4899]" />,
        action: () => {
          router.push("/game/love");
          handleClose();
        },
        keywords: ["love", "romance", "game", "cards", "relationship"],
      },
      {
        id: "nav-faq",
        title: "Frequently Asked Questions",
        subtitle: "Clear answers on spreads, accuracy, privacy, and advisors",
        category: "Navigation",
        icon: <HelpCircle className="size-4 text-[#60A5FA]" />,
        action: () => {
          router.push("/faq");
          handleClose();
        },
        keywords: ["faq", "help", "questions", "answers"],
      },
      {
        id: "nav-contact",
        title: "Contact Concierge",
        subtitle: "24/7 hotline and spiritual support inquiry form",
        category: "Navigation",
        icon: <Mail className="size-4 text-[#F59E0B]" />,
        action: () => {
          router.push("/contact");
          handleClose();
        },
        keywords: ["contact", "support", "email", "phone"],
      },
      {
        id: "action-theme",
        title: `Switch to ${resolvedTheme === "dark" ? "Light" : "Dark"} Mode`,
        subtitle: "Toggle between Cosmic Midnight and Astral Daylight",
        category: "Actions",
        icon:
          resolvedTheme === "dark" ? (
            <Sun className="size-4 text-[#F3A754]" />
          ) : (
            <Moon className="size-4 text-[#7F65F2]" />
          ),
        action: () => {
          toggleTheme();
          toast({
            title: `Switched to ${resolvedTheme === "dark" ? "Light" : "Dark"} Mode`,
            description: "Theme preference saved to sanctuary settings.",
            variant: "info",
          });
          handleClose();
        },
        keywords: ["theme", "dark", "light", "mode", "toggle"],
      },
      {
        id: "action-scroll-top",
        title: "Scroll to Altar Top",
        subtitle: "Smoothly navigate to the top of the current page",
        category: "Actions",
        icon: <ArrowUp className="size-4 text-[#EEB576]" />,
        action: () => {
          if (lenis) {
            lenis.scrollTo(0, { duration: 1.2 });
          } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
          handleClose();
        },
        keywords: ["scroll", "top", "up", "navigate"],
      },
      {
        id: "action-copy-url",
        title: "Copy Current URL",
        subtitle: "Share the present sacred portal link with others",
        category: "Actions",
        icon: <Share2 className="size-4 text-[#A78BFA]" />,
        action: () => {
          navigator.clipboard.writeText(window.location.href);
          toast({
            title: "URL Copied to Clipboard",
            description: "The celestial link is ready to share.",
            variant: "success",
          });
          handleClose();
        },
        keywords: ["copy", "url", "share", "link"],
      },
      {
        id: "nav-privacy",
        title: "Privacy Policy",
        subtitle: "Advice Wave, LLC data protection & privacy guidelines",
        category: "Navigation",
        icon: <Shield className="size-4 text-white/60" />,
        action: () => {
          router.push("/privacy");
          handleClose();
        },
        keywords: ["privacy", "gdpr", "ccpa", "security"],
      },
      {
        id: "nav-terms",
        title: "Terms of Use",
        subtitle: "Legal framework, entertainment disclosure, and conditions",
        category: "Navigation",
        icon: <FileText className="size-4 text-white/60" />,
        action: () => {
          router.push("/terms");
          handleClose();
        },
        keywords: ["terms", "conditions", "legal"],
      },
    ],
    [router, resolvedTheme, toggleTheme, lenis, toast, handleClose]
  );

  const filteredCommands = useMemo(() => {
    if (!search.trim()) return commands;
    const q = search.toLowerCase();
    return commands.filter(
      (cmd) =>
        cmd.title.toLowerCase().includes(q) ||
        cmd.subtitle.toLowerCase().includes(q) ||
        cmd.category.toLowerCase().includes(q) ||
        cmd.keywords?.some((k) => k.toLowerCase().includes(q))
    );
  }, [commands, search]);

  const handleKeyDownList = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredCommands.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
    } else if (e.key === "Enter" && filteredCommands[selectedIndex]) {
      e.preventDefault();
      filteredCommands[selectedIndex].action();
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:pt-28">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-[#070514]/80 backdrop-blur-xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -15 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="relative w-full max-w-xl rounded-3xl bg-[#151033] border border-[#F3A754]/30 shadow-[0_25px_70px_rgba(0,0,0,0.8)] overflow-hidden text-white z-10 flex flex-col"
          >
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10 bg-white/5">
              <Search className="size-5 text-[#F3A754] shrink-0" />
              <input
                type="text"
                autoFocus
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={handleKeyDownList}
                placeholder="Search sanctuary, tarot cards, actions... (or jump to page)"
                className="w-full bg-transparent text-sm sm:text-base outline-none text-white placeholder-white/40 font-light"
              />
              {search ? (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="p-1 rounded-lg hover:bg-white/10 text-white/50 hover:text-white"
                >
                  <X className="size-4" />
                </button>
              ) : (
                <div className="flex items-center gap-1 text-[11px] text-[#EEB576] font-mono bg-[#F3A754]/15 px-2 py-0.5 rounded-md border border-[#F3A754]/30">
                  ESC
                </div>
              )}
            </div>

            {/* Command Results List */}
            <div className="max-h-80 overflow-y-auto p-2 space-y-1">
              {filteredCommands.length === 0 ? (
                <div className="py-12 text-center text-white/50 text-sm">
                  <p>No celestial destinations match &ldquo;{search}&rdquo;</p>
                  <p className="text-xs text-[#EEB576] mt-1">Try searching for &quot;cards&quot;, &quot;chat&quot;, &quot;faq&quot;, or &quot;theme&quot;.</p>
                </div>
              ) : (
                filteredCommands.map((cmd, idx) => {
                  const isSelected = idx === selectedIndex;
                  return (
                    <button
                      key={cmd.id}
                      type="button"
                      onClick={() => cmd.action()}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={cn(
                        "w-full flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl text-left transition-all cursor-pointer",
                        isSelected
                          ? "bg-gradient-to-r from-[#7F65F2]/30 to-[#F3A754]/20 border border-[#F3A754]/40 text-white shadow-md"
                          : "text-white/80 hover:bg-white/5 border border-transparent"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={cn(
                            "size-8 rounded-lg flex items-center justify-center transition-colors",
                            isSelected ? "bg-white/15" : "bg-white/5"
                          )}
                        >
                          {cmd.icon}
                        </div>
                        <div>
                          <div className="text-sm font-medium flex items-center gap-2">
                            <span>{cmd.title}</span>
                          </div>
                          <p className="text-xs text-white/50 font-light">{cmd.subtitle}</p>
                        </div>
                      </div>

                      <div className="text-[10px] tracking-wider uppercase font-semibold text-white/40 px-2 py-0.5 rounded bg-white/5">
                        {cmd.category}
                      </div>
                    </button>
                  );
                })
              )}
            </div>

            {/* Bottom Keyboard Shortcuts Guide */}
            <div className="flex items-center justify-between px-5 py-2.5 border-t border-white/10 bg-black/30 text-[11px] text-white/50">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white/80 font-mono">↑</kbd>
                  <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white/80 font-mono">↓</kbd>
                  to navigate
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white/80 font-mono">↵</kbd>
                  to select
                </span>
              </div>
              <span className="flex items-center gap-1 text-[#EEB576]">
                <Sparkles className="size-3" /> MeetYourJyotishi Quick Keys
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default CommandPalette;

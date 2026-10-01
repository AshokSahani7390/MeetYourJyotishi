"use client";

import React, { createContext, useContext, useEffect, useSyncExternalStore } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  resolvedTheme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

let currentTheme: Theme = "dark";
const listeners = new Set<() => void>();

function emitChange() {
  for (const listener of listeners) {
    listener();
  }
}

const themeStore = {
  setTheme(newTheme: Theme) {
    currentTheme = newTheme;
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("meetyourjyotishi-theme", newTheme);
        const root = document.documentElement;
        root.classList.remove("light", "dark");
        root.classList.add(newTheme);
      } catch {}
    }
    emitChange();
  },
  toggleTheme() {
    this.setTheme(currentTheme === "dark" ? "light" : "dark");
  },
  subscribe(listener: () => void) {
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  },
  getSnapshot(): Theme {
    return currentTheme;
  },
  getServerSnapshot(): Theme {
    return "dark";
  },
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(
    themeStore.subscribe,
    themeStore.getSnapshot,
    themeStore.getServerSnapshot
  );

  useEffect(() => {
    try {
      const saved = localStorage.getItem("meetyourjyotishi-theme") as Theme | null;
      if (saved === "dark" || saved === "light") {
        themeStore.setTheme(saved);
      } else {
        themeStore.setTheme("dark");
      }
    } catch {}
  }, []);

  const value: ThemeContextType = {
    theme,
    resolvedTheme: theme,
    setTheme: (t: Theme) => themeStore.setTheme(t),
    toggleTheme: () => themeStore.toggleTheme(),
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

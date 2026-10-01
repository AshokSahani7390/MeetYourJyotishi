"use client";

import { useSyncExternalStore } from "react";

let currentHovered = "none";
const listeners = new Set<() => void>();

export const heroCardStore = {
  getHovered: () => currentHovered,
  setHovered: (id: string) => {
    if (currentHovered !== id) {
      currentHovered = id;
      listeners.forEach((l) => l());
    }
  },
  subscribe: (listener: () => void) => {
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  },
};

export function useHeroCardStore<T>(
  selector: (state: { hovered: string; hover: (id: string) => void }) => T
): T {
  const hovered = useSyncExternalStore(
    heroCardStore.subscribe,
    heroCardStore.getHovered,
    () => "none"
  );
  return selector({ hovered, hover: heroCardStore.setHovered });
}

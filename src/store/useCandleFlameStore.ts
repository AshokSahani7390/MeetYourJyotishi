"use client";

import { useSyncExternalStore } from "react";

export const FLAME_IDS = [
  "left-1",
  "left-2",
  "left-3-1",
  "left-3-2",
  "left-3-3",
  "left-3-4",
  "right-3-1",
  "right-3-2",
  "right-3-3",
  "right-3-4",
  "right-2",
  "right-1",
] as const;

export type FlameId = (typeof FLAME_IDS)[number];

interface FlameState {
  flames: Record<FlameId, boolean>;
  isAllFlamesStarting: boolean;
  easterActive: boolean;
}

const initialFlames: Record<FlameId, boolean> = {
  "left-1": true,
  "left-2": true,
  "left-3-1": true,
  "left-3-2": true,
  "left-3-3": true,
  "left-3-4": true,
  "right-3-1": true,
  "right-3-2": true,
  "right-3-3": true,
  "right-3-4": true,
  "right-2": true,
  "right-1": true,
};

let state: FlameState = {
  flames: { ...initialFlames },
  isAllFlamesStarting: false,
  easterActive: false,
};

const listeners = new Set<() => void>();
const mountedFlames = new Set<FlameId>();

function emitChange() {
  for (const listener of listeners) {
    listener();
  }
}

function playAudio(src: string, volume = 0.5) {
  try {
    const audio = new Audio(src);
    audio.volume = volume;
    audio.play().catch(() => {});
  } catch {}
}

let easterTimeout: NodeJS.Timeout | null = null;

export const candleFlameStore = {
  getState() {
    return state;
  },
  subscribe(listener: () => void) {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },
  registerFlame(id: FlameId) {
    mountedFlames.add(id);
  },
  unregisterFlame(id: FlameId) {
    mountedFlames.delete(id);
  },
  // Single click turns off flame; second click on wick turns it back on!
  toggleFlame(id: FlameId) {
    const isCurrentlyLit = state.flames[id] ?? true;
    const nextLit = !isCurrentlyLit;
    const nextFlames = { ...state.flames, [id]: nextLit };
    
    // Play sound feedback
    if (nextLit) {
      playAudio("/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/audio/flame-start.mp3", 0.5);
    } else {
      playAudio("/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/audio/flame-end.mp3", 0.5);
    }

    // Check if ALL currently mounted flames are extinguished -> triggers Darkness Easter Egg!
    const activeFlameList = mountedFlames.size > 0 ? Array.from(mountedFlames) : FLAME_IDS;
    const allOff = activeFlameList.every((fId) => !nextFlames[fId]);

    if (allOff) {
      playAudio("/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/audio/easter-start.mp3", 0.6);
      if (easterTimeout) clearTimeout(easterTimeout);

      state = {
        ...state,
        flames: nextFlames,
        easterActive: true,
      };
      emitChange();

      // After 15 seconds, automatically relight all flames one by one in cascade!
      easterTimeout = setTimeout(() => {
        candleFlameStore.setAllFlamesOn();
      }, 15000);
      return;
    }

    state = {
      ...state,
      flames: nextFlames,
      easterActive: false,
    };
    emitChange();
  },
  setAllFlamesOn() {
    state = { ...state, isAllFlamesStarting: true, easterActive: false };
    emitChange();

    FLAME_IDS.forEach((id, index) => {
      setTimeout(() => {
        state = {
          ...state,
          flames: { ...state.flames, [id]: true },
        };
        playAudio("/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/audio/flame-start.mp3", 0.2);
        emitChange();
      }, index * 100);
    });

    setTimeout(() => {
      state = { ...state, isAllFlamesStarting: false };
      emitChange();
    }, FLAME_IDS.length * 100 + 300);
  },
  setNearbyFlamesOn(centerId: FlameId) {
    const centerIndex = FLAME_IDS.indexOf(centerId);
    if (centerIndex === -1) return;

    candleFlameStore.toggleFlame(centerId);
    const maxDist = Math.max(centerIndex, FLAME_IDS.length - 1 - centerIndex);

    for (let dist = 1; dist <= maxDist; dist++) {
      const delay = dist * 100;
      const leftIdx = centerIndex - dist;
      const rightIdx = centerIndex + dist;

      if (leftIdx >= 0) {
        setTimeout(() => {
          const lId = FLAME_IDS[leftIdx];
          state = { ...state, flames: { ...state.flames, [lId]: true } };
          emitChange();
        }, delay);
      }
      if (rightIdx < FLAME_IDS.length) {
        setTimeout(() => {
          const rId = FLAME_IDS[rightIdx];
          state = { ...state, flames: { ...state.flames, [rId]: true } };
          emitChange();
        }, delay);
      }
    }
  },
};

const initialServerState: FlameState = {
  flames: { ...initialFlames },
  isAllFlamesStarting: false,
  easterActive: false,
};

export function useCandleFlameStore(): FlameState {
  return useSyncExternalStore(
    candleFlameStore.subscribe,
    candleFlameStore.getState,
    () => initialServerState
  );
}

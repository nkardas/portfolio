"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface RetroModeState {
  isRetroMode: boolean;
  toggleRetroMode: () => void;
  setRetroMode: (value: boolean) => void;
}

export const useRetroMode = create<RetroModeState>()(
  persist(
    (set) => ({
      isRetroMode: false,
      toggleRetroMode: () => set((state) => ({ isRetroMode: !state.isRetroMode })),
      setRetroMode: (value: boolean) => set({ isRetroMode: value }),
    }),
    {
      name: "retro-mode-storage",
    }
  )
);

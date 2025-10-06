"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface VioletModeState {
  isVioletMode: boolean;
  toggleVioletMode: () => void;
  setVioletMode: (value: boolean) => void;
}

export const useVioletMode = create<VioletModeState>()(
  persist(
    (set) => ({
      isVioletMode: false,
      toggleVioletMode: () => set((state) => ({ isVioletMode: !state.isVioletMode })),
      setVioletMode: (value: boolean) => set({ isVioletMode: value }),
    }),
    {
      name: "violet-mode-storage",
    }
  )
);

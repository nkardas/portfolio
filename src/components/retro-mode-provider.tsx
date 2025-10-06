"use client";

import { useEffect } from "react";
import { useRetroMode } from "@/hooks/use-retro-mode";

export function RetroModeProvider() {
  const isRetroMode = useRetroMode((state) => state.isRetroMode);

  useEffect(() => {
    if (isRetroMode) {
      document.documentElement.classList.add("retro-mode");
    } else {
      document.documentElement.classList.remove("retro-mode");
    }
  }, [isRetroMode]);

  return null;
}

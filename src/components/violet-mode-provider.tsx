"use client";

import { useEffect } from "react";
import { useVioletMode } from "@/hooks/use-violet-mode";

export function VioletModeProvider() {
  const isVioletMode = useVioletMode((state) => state.isVioletMode);

  useEffect(() => {
    if (isVioletMode) {
      document.documentElement.classList.add("violet-mode");
    } else {
      document.documentElement.classList.remove("violet-mode");
    }
  }, [isVioletMode]);

  return null;
}

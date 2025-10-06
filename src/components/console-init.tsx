"use client";

import { useEffect } from "react";
import { initConsoleEasterEgg } from "@/lib/console-easter-egg";

export function ConsoleInit() {
  useEffect(() => {
    // Only run in browser
    if (typeof window !== "undefined") {
      initConsoleEasterEgg();
    }
  }, []);

  return null;
}

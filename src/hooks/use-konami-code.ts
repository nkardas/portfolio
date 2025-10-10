"use client";

import { useEffect, useState } from "react";
import { useSound } from "./use-sound";

const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export function useKonamiCode() {
  const [isActive, setIsActive] = useState(false);
  const { playSound } = useSound();

  useEffect(() => {
    let keys: string[] = [];

    const handleKeyDown = (e: KeyboardEvent) => {
      keys = [...keys, e.key];

      // Keep only the last 10 keys
      if (keys.length > KONAMI_CODE.length) {
        keys.shift();
      }

      // Check if the sequence matches
      if (
        keys.length === KONAMI_CODE.length &&
        keys.every((key, index) => key === KONAMI_CODE[index])
      ) {
        playSound("konami");
        setIsActive(true);
        keys = [];
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [playSound]);

  const reset = () => setIsActive(false);

  return { isActive, reset };
}

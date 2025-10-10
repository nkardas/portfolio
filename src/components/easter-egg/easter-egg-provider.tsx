"use client";

import { useKonamiCode } from "@/hooks/use-konami-code";
import { SecretMenu } from "./secret-menu";

export function EasterEggProvider() {
  const { isActive, reset } = useKonamiCode();

  const handleLaunchSnake = () => {
    const win = window as Window & { openSnake?: () => void };
    if (typeof win.openSnake === "function") {
      win.openSnake();
    }
  };

  return (
    <SecretMenu
      isActive={isActive}
      onClose={reset}
      onLaunchSnake={handleLaunchSnake}
    />
  );
}

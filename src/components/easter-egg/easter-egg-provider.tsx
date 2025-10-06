"use client";

import { useKonamiCode } from "@/hooks/use-konami-code";
import { SecretMenu } from "./secret-menu";

export function EasterEggProvider() {
  const { isActive, reset } = useKonamiCode();

  const handleLaunchSnake = () => {
    if (typeof (window as any).openSnake === "function") {
      (window as any).openSnake();
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

"use client";

import { useState, useEffect } from "react";
import { SnakeGame } from "./snake-game";

export function SnakeProvider() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Expose the snake command globally
    (window as Window & { openSnake?: () => void }).openSnake = () => {
      setIsOpen(true);
    };

    return () => {
      delete (window as Window & { openSnake?: () => void }).openSnake;
    };
  }, []);

  return <SnakeGame isOpen={isOpen} onClose={() => setIsOpen(false)} />;
}

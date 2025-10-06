"use client";

import { useState, useEffect } from "react";
import { SnakeGame } from "./snake-game";

export function SnakeProvider() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Expose the snake command globally
    (window as any).openSnake = () => {
      setIsOpen(true);
    };

    return () => {
      delete (window as any).openSnake;
    };
  }, []);

  return <SnakeGame isOpen={isOpen} onClose={() => setIsOpen(false)} />;
}

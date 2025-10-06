"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, RotateCcw } from "lucide-react";

interface SnakeGameProps {
  isOpen: boolean;
  onClose: () => void;
}

type Position = { x: number; y: number };
type Direction = "UP" | "DOWN" | "LEFT" | "RIGHT";

const GRID_SIZE = 20;
const CELL_SIZE = 20;
const INITIAL_SPEED = 150;

export function SnakeGame({ isOpen, onClose }: SnakeGameProps) {
  const [snake, setSnake] = useState<Position[]>([{ x: 10, y: 10 }]);
  const [food, setFood] = useState<Position>({ x: 15, y: 15 });
  const [direction, setDirection] = useState<Direction>("RIGHT");
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(INITIAL_SPEED);

  const generateFood = useCallback(() => {
    const newFood = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    };
    setFood(newFood);
  }, []);

  const resetGame = useCallback(() => {
    setSnake([{ x: 10, y: 10 }]);
    setDirection("RIGHT");
    setGameOver(false);
    setScore(0);
    setSpeed(INITIAL_SPEED);
    generateFood();
    setIsPlaying(false);
  }, [generateFood]);

  const startGame = () => {
    resetGame();
    setIsPlaying(true);
  };

  useEffect(() => {
    if (!isPlaying || gameOver) return;

    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowUp":
          if (direction !== "DOWN") setDirection("UP");
          break;
        case "ArrowDown":
          if (direction !== "UP") setDirection("DOWN");
          break;
        case "ArrowLeft":
          if (direction !== "RIGHT") setDirection("LEFT");
          break;
        case "ArrowRight":
          if (direction !== "LEFT") setDirection("RIGHT");
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [direction, isPlaying, gameOver]);

  useEffect(() => {
    if (!isPlaying || gameOver) return;

    const moveSnake = () => {
      setSnake((prevSnake) => {
        const head = prevSnake[0];
        let newHead: Position;

        switch (direction) {
          case "UP":
            newHead = { x: head.x, y: head.y - 1 };
            break;
          case "DOWN":
            newHead = { x: head.x, y: head.y + 1 };
            break;
          case "LEFT":
            newHead = { x: head.x - 1, y: head.y };
            break;
          case "RIGHT":
            newHead = { x: head.x + 1, y: head.y };
            break;
        }

        // Check wall collision
        if (
          newHead.x < 0 ||
          newHead.x >= GRID_SIZE ||
          newHead.y < 0 ||
          newHead.y >= GRID_SIZE
        ) {
          setGameOver(true);
          setIsPlaying(false);
          return prevSnake;
        }

        // Check self collision
        if (prevSnake.some((segment) => segment.x === newHead.x && segment.y === newHead.y)) {
          setGameOver(true);
          setIsPlaying(false);
          return prevSnake;
        }

        const newSnake = [newHead, ...prevSnake];

        // Check food collision
        if (newHead.x === food.x && newHead.y === food.y) {
          setScore((s) => s + 10);
          setSpeed((s) => Math.max(50, s - 5));
          generateFood();
          return newSnake;
        }

        newSnake.pop();
        return newSnake;
      });
    };

    const gameLoop = setInterval(moveSnake, speed);
    return () => clearInterval(gameLoop);
  }, [direction, food, speed, isPlaying, gameOver, generateFood]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-background border-2 border-primary rounded-xl shadow-2xl shadow-primary/50 overflow-hidden max-w-2xl w-full">
              {/* Terminal Header */}
              <div className="bg-muted border-b border-primary/20 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-sm font-semibold text-primary ml-2">nk@terminal ~ snake</span>
                </div>
                <button
                  onClick={onClose}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Game Content */}
              <div className="p-6 bg-card">
                <div className="flex flex-col items-center gap-4">
                  {/* Score */}
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">SCORE</p>
                    <p className="text-4xl font-bold text-primary">{score}</p>
                  </div>

                  {/* Game Board */}
                  <div
                    className="relative border-2 border-primary/30 rounded-lg overflow-hidden"
                    style={{
                      width: GRID_SIZE * CELL_SIZE,
                      height: GRID_SIZE * CELL_SIZE,
                      background: "repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(139, 122, 184, 0.05) 20px, rgba(139, 122, 184, 0.05) 21px), repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(139, 122, 184, 0.05) 20px, rgba(139, 122, 184, 0.05) 21px)",
                    }}
                  >
                    {/* Snake */}
                    {snake.map((segment, index) => (
                      <div
                        key={index}
                        className="absolute transition-all duration-100"
                        style={{
                          left: segment.x * CELL_SIZE,
                          top: segment.y * CELL_SIZE,
                          width: CELL_SIZE - 2,
                          height: CELL_SIZE - 2,
                          backgroundColor: index === 0 ? "#9F8DCB" : "#8B7AB8",
                          borderRadius: index === 0 ? "4px" : "2px",
                        }}
                      />
                    ))}

                    {/* Food */}
                    <div
                      className="absolute animate-pulse"
                      style={{
                        left: food.x * CELL_SIZE,
                        top: food.y * CELL_SIZE,
                        width: CELL_SIZE - 2,
                        height: CELL_SIZE - 2,
                        backgroundColor: "#10b981",
                        borderRadius: "50%",
                      }}
                    />

                    {/* Game Over Overlay */}
                    {gameOver && (
                      <div className="absolute inset-0 bg-background/90 flex items-center justify-center">
                        <div className="text-center">
                          <p className="text-3xl font-bold text-primary mb-2">GAME OVER</p>
                          <p className="text-muted-foreground mb-4">Final Score: {score}</p>
                        </div>
                      </div>
                    )}

                    {/* Start Overlay */}
                    {!isPlaying && !gameOver && (
                      <div className="absolute inset-0 bg-background/90 flex items-center justify-center">
                        <div className="text-center">
                          <p className="text-2xl font-bold text-primary mb-4">Ready to play?</p>
                          <p className="text-sm text-muted-foreground mb-2">Use arrow keys to move</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Controls */}
                  <div className="flex gap-3">
                    <button
                      onClick={startGame}
                      disabled={isPlaying && !gameOver}
                      className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Play className="w-4 h-4" />
                      {gameOver ? "Play Again" : "Start"}
                    </button>
                    <button
                      onClick={resetGame}
                      className="flex items-center gap-2 px-6 py-3 bg-muted text-foreground rounded-lg font-semibold hover:bg-muted/80 transition-colors"
                    >
                      <RotateCcw className="w-4 h-4" />
                      Reset
                    </button>
                  </div>

                  {/* Instructions */}
                  <div className="text-center text-xs text-muted-foreground space-y-1">
                    <p>← → ↑ ↓ to move | Eat green dots to grow</p>
                    <p>Don't hit the walls or yourself!</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

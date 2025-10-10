"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { X, Sparkles } from "lucide-react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

interface KonamiEasterEggProps {
  isActive: boolean;
  onClose: () => void;
}

export function KonamiEasterEgg({ isActive, onClose }: KonamiEasterEggProps) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (isActive) {
      // Generate random particles
      const newParticles = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 20 + 10,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 0.5,
      }));
      setParticles(newParticles);

      // Auto-close after 10 seconds
      const timeout = setTimeout(() => {
        onClose();
      }, 10000);

      return () => clearTimeout(timeout);
    }
  }, [isActive, onClose]);

  return (
    <AnimatePresence>
      {isActive && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(139, 122, 184, 0.3) 0%, transparent 70%)",
            }}
          />

          {/* Particles */}
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="fixed z-50 pointer-events-none"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: particle.size,
                height: particle.size,
              }}
              initial={{ scale: 0, rotate: 0, opacity: 0 }}
              animate={{
                scale: [0, 1, 1, 0],
                rotate: [0, 180, 360],
                opacity: [0, 1, 1, 0],
                y: [0, -100],
              }}
              transition={{
                duration: particle.duration,
                delay: particle.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-purple-600 blur-sm" />
            </motion.div>
          ))}

          {/* Center Message */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
          >
            <div className="relative pointer-events-auto">
              <motion.div
                className="bg-card/95 backdrop-blur-xl border-2 border-primary rounded-2xl p-12 shadow-2xl shadow-primary/50"
                animate={{
                  boxShadow: [
                    "0 0 40px rgba(139, 122, 184, 0.5)",
                    "0 0 80px rgba(139, 122, 184, 0.8)",
                    "0 0 40px rgba(139, 122, 184, 0.5)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="text-center space-y-6">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="inline-block"
                  >
                    <Sparkles className="w-16 h-16 text-primary" />
                  </motion.div>

                  <div>
                    <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                      🎮 Konami Code Activated!
                    </h2>
                    <p className="text-xl text-muted-foreground mb-2">
                      You found the secret!
                    </p>
                    <p className="text-sm text-muted-foreground">
                      ↑↑↓↓←→←→BA
                    </p>
                  </div>

                  <div className="pt-4">
                    <p className="text-sm text-muted-foreground italic">
                      &quot;In a world of 0s and 1s, be the undefined value.&quot;
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

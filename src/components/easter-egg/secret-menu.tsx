"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Palette, Sparkles, Award, Volume2 } from "lucide-react";
import { useRetroMode } from "@/hooks/use-retro-mode";
import { useVioletMode } from "@/hooks/use-violet-mode";
import { useAchievements } from "@/hooks/use-achievements";
import { useSound } from "@/hooks/use-sound";

interface SecretMenuProps {
  isActive: boolean;
  onClose: () => void;
  onLaunchSnake: () => void;
}

export function SecretMenu({ isActive, onClose, onLaunchSnake }: SecretMenuProps) {
  const { isRetroMode, toggleRetroMode } = useRetroMode();
  const { isVioletMode, toggleVioletMode } = useVioletMode();
  const { unlockAchievement } = useAchievements();
  const { isSoundEnabled, toggleSound, playSound } = useSound();

  // Unlock konami_master achievement when menu opens
  React.useEffect(() => {
    if (isActive) {
      unlockAchievement("konami_master");
    }
  }, [isActive, unlockAchievement]);

  const menuItems = [
    {
      icon: Play,
      label: "Launch Snake Game",
      description: "Play the classic snake game",
      action: () => {
        unlockAchievement("snake_player");
        onLaunchSnake();
        onClose();
      },
      color: "from-green-500 to-emerald-600",
      disabled: false,
    },
    {
      icon: Palette,
      label: isRetroMode ? "Exit Retro Mode" : "Retro Mode",
      description: isRetroMode ? "Back to normal mode" : "Enable 8-bit pixel art mode",
      action: () => {
        if (!isRetroMode) {
          unlockAchievement("retro_lover");
        }
        toggleRetroMode();
        console.log(`🕹️ Retro Mode ${isRetroMode ? "disabled" : "enabled"}!`);
      },
      color: "from-orange-500 to-red-600",
      disabled: false,
    },
    {
      icon: Sparkles,
      label: isVioletMode ? "Exit Violet Intensity" : "Violet Intensity",
      description: isVioletMode ? "Back to normal mode" : "Enable intense violet mode",
      action: () => {
        if (!isVioletMode) {
          unlockAchievement("violet_fan");
        }
        toggleVioletMode();
        console.log(`💜 Violet Intensity ${isVioletMode ? "disabled" : "enabled"}!`);
      },
      color: "from-purple-500 to-pink-600",
      disabled: false,
    },
    {
      icon: Award,
      label: "Achievements",
      description: "View your unlocked achievements",
      action: () => {
        const win = window as Window & { openAchievements?: () => void };
        if (typeof win.openAchievements === "function") {
          win.openAchievements();
        }
        onClose();
      },
      color: "from-yellow-500 to-orange-600",
      disabled: false,
    },
    {
      icon: Volume2,
      label: isSoundEnabled ? "Disable Sounds" : "Enable Sounds",
      description: isSoundEnabled ? "Turn off sound effects" : "Turn on retro sound effects",
      action: () => {
        unlockAchievement("sound_explorer");
        toggleSound();
        console.log(`🔊 Sound Effects ${isSoundEnabled ? "disabled" : "enabled"}!`);
      },
      color: "from-blue-500 to-cyan-600",
      disabled: false,
    },
  ];

  return (
    <AnimatePresence>
      {isActive && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Secret Menu */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-card/95 backdrop-blur-xl border-2 border-primary rounded-2xl shadow-2xl shadow-primary/50 max-w-md w-full pointer-events-auto">
              {/* Header */}
              <div className="relative p-6 border-b border-primary/20">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="text-center space-y-2">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="inline-block"
                  >
                    <Sparkles className="w-12 h-12 text-primary mx-auto" />
                  </motion.div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                    Secret Menu
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Konami Code Unlocked! 🎮
                  </p>
                </div>
              </div>

              {/* Menu Items */}
              <div className="p-6 space-y-3 max-h-[60vh] overflow-y-auto">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => {
                      playSound("click");
                      item.action();
                    }}
                    onMouseEnter={() => playSound("hover")}
                    disabled={item.disabled}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all group relative overflow-hidden ${
                      item.disabled
                        ? "border-border bg-muted/50 opacity-50 cursor-not-allowed"
                        : "border-border hover:border-primary hover:shadow-lg hover:shadow-primary/20"
                    }`}
                  >
                    {!item.disabled && (
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                      />
                    )}

                    <div className="relative flex items-start gap-4">
                      <div
                        className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 ${
                          item.disabled ? "opacity-50" : ""
                        }`}
                      >
                        <item.icon className="w-6 h-6 text-white" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-foreground mb-1">
                          {item.label}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-primary/20 text-center">
                <p className="text-xs text-muted-foreground italic">
                  &quot;With great power comes great easter eggs&quot; 🥚
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

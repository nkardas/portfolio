"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Trophy } from "lucide-react";
import { useEffect } from "react";
import { useSound } from "@/hooks/use-sound";

interface AchievementToastProps {
  title: string;
  description: string;
  icon: string;
  show: boolean;
  onHide: () => void;
}

export function AchievementToast({
  title,
  description,
  icon,
  show,
  onHide,
}: AchievementToastProps) {
  const { playSound } = useSound();

  useEffect(() => {
    if (show) {
      playSound("achievement");
      const timer = setTimeout(() => {
        onHide();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [show, onHide, playSound]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, x: 100, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 100, scale: 0.8 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          className="fixed bottom-6 right-6 z-50 pointer-events-auto"
        >
          <div className="bg-card/95 backdrop-blur-xl border-2 border-yellow-500 rounded-xl shadow-2xl shadow-yellow-500/50 p-4 min-w-[300px]">
            <div className="flex items-start gap-3">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center text-2xl flex-shrink-0">
                {icon}
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <Trophy className="w-4 h-4 text-yellow-500" />
                  <span className="text-xs font-semibold text-yellow-500 uppercase tracking-wide">
                    Achievement Unlocked!
                  </span>
                </div>
                <h3 className="font-bold text-foreground mb-1">{title}</h3>
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

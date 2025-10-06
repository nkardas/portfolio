"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Lock, Trophy } from "lucide-react";
import { useAchievements } from "@/hooks/use-achievements";

interface AchievementsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AchievementsModal({ isOpen, onClose }: AchievementsModalProps) {
  const { achievements, getUnlockedCount, getTotalCount } = useAchievements();
  const achievementsList = Object.values(achievements);
  const unlockedCount = getUnlockedCount();
  const totalCount = getTotalCount();
  const progress = Math.round((unlockedCount / totalCount) * 100);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-card/95 backdrop-blur-xl border-2 border-primary rounded-2xl shadow-2xl shadow-primary/50 max-w-2xl w-full pointer-events-auto max-h-[80vh] overflow-hidden flex flex-col">
              {/* Header */}
              <div className="relative p-6 border-b border-primary/20">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="space-y-4">
                  <div className="text-center space-y-2">
                    <motion.div
                      animate={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                      className="inline-block"
                    >
                      <Trophy className="w-12 h-12 text-yellow-500 mx-auto" />
                    </motion.div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent">
                      Achievements
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      {unlockedCount} / {totalCount} Unlocked
                    </p>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full"
                      />
                    </div>
                    <p className="text-xs text-center text-muted-foreground">
                      {progress}% Complete
                    </p>
                  </div>
                </div>
              </div>

              {/* Achievements Grid */}
              <div className="p-6 overflow-y-auto flex-1">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {achievementsList.map((achievement, index) => (
                    <motion.div
                      key={achievement.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        achievement.unlocked
                          ? "border-yellow-500/50 bg-yellow-500/5"
                          : "border-border bg-muted/30"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl flex-shrink-0 ${
                            achievement.unlocked
                              ? "bg-gradient-to-br from-yellow-500 to-orange-600"
                              : "bg-muted"
                          }`}
                        >
                          {achievement.unlocked ? (
                            achievement.icon
                          ) : (
                            <Lock className="w-6 h-6 text-muted-foreground" />
                          )}
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h3
                              className={`font-semibold ${
                                achievement.unlocked
                                  ? "text-foreground"
                                  : "text-muted-foreground"
                              }`}
                            >
                              {achievement.unlocked || !achievement.secret
                                ? achievement.title
                                : "???"}
                            </h3>
                            {achievement.secret && (
                              <span className="text-xs px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30">
                                Secret
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {achievement.unlocked || !achievement.secret
                              ? achievement.description
                              : "Hidden achievement"}
                          </p>
                          {achievement.unlocked && achievement.unlockedAt && (
                            <p className="text-xs text-muted-foreground mt-2">
                              Unlocked {new Date(achievement.unlockedAt).toLocaleDateString()}
                            </p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-primary/20 text-center">
                <p className="text-xs text-muted-foreground italic">
                  Keep exploring to unlock more achievements! 🏆
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Achievement, AchievementId } from "@/types/achievement";

interface AchievementsState {
  achievements: Record<AchievementId, Achievement>;
  unlockAchievement: (id: AchievementId) => void;
  isUnlocked: (id: AchievementId) => boolean;
  getUnlockedCount: () => number;
  getTotalCount: () => number;
}

const defaultAchievements: Record<AchievementId, Achievement> = {
  first_visit: {
    id: "first_visit",
    title: "First Steps",
    description: "Visit the portfolio for the first time",
    icon: "👋",
    unlocked: false,
  },
  konami_master: {
    id: "konami_master",
    title: "Konami Master",
    description: "Unlock the secret menu with the Konami Code",
    icon: "🎮",
    unlocked: false,
    secret: true,
  },
  snake_player: {
    id: "snake_player",
    title: "Snake Charmer",
    description: "Play the Snake game",
    icon: "🐍",
    unlocked: false,
  },
  retro_lover: {
    id: "retro_lover",
    title: "Retro Enthusiast",
    description: "Enable Retro Mode",
    icon: "🕹️",
    unlocked: false,
  },
  violet_fan: {
    id: "violet_fan",
    title: "Violet Vibes",
    description: "Enable Violet Intensity Mode",
    icon: "💜",
    unlocked: false,
  },
  sound_explorer: {
    id: "sound_explorer",
    title: "Sound Explorer",
    description: "Toggle sound effects",
    icon: "🔊",
    unlocked: false,
  },
  achievement_hunter: {
    id: "achievement_hunter",
    title: "Achievement Hunter",
    description: "Unlock all achievements",
    icon: "🏆",
    unlocked: false,
    secret: true,
  },
  speed_reader: {
    id: "speed_reader",
    title: "Speed Reader",
    description: "Read through all projects in under 30 seconds",
    icon: "⚡",
    unlocked: false,
    secret: true,
  },
  theme_switcher: {
    id: "theme_switcher",
    title: "Theme Switcher",
    description: "Switch between light and dark mode 5 times",
    icon: "🌓",
    unlocked: false,
  },
  explorer: {
    id: "explorer",
    title: "Explorer",
    description: "Visit every page of the portfolio",
    icon: "🗺️",
    unlocked: false,
  },
};

export const useAchievements = create<AchievementsState>()(
  persist(
    (set, get) => ({
      achievements: defaultAchievements,

      unlockAchievement: (id: AchievementId) => {
        set((state) => {
          const achievement = state.achievements[id];
          if (achievement && !achievement.unlocked) {
            const updated = {
              ...state.achievements,
              [id]: {
                ...achievement,
                unlocked: true,
                unlockedAt: new Date(),
              },
            };

            // Check if all achievements are unlocked (for achievement_hunter)
            const allUnlocked = Object.values(updated).every(
              (a) => a.id === "achievement_hunter" || a.unlocked
            );

            if (allUnlocked && !updated.achievement_hunter.unlocked) {
              updated.achievement_hunter = {
                ...updated.achievement_hunter,
                unlocked: true,
                unlockedAt: new Date(),
              };
            }

            return { achievements: updated };
          }
          return state;
        });
      },

      isUnlocked: (id: AchievementId) => {
        return get().achievements[id]?.unlocked || false;
      },

      getUnlockedCount: () => {
        return Object.values(get().achievements).filter((a) => a.unlocked).length;
      },

      getTotalCount: () => {
        return Object.keys(get().achievements).length;
      },
    }),
    {
      name: "achievements-storage",
    }
  )
);

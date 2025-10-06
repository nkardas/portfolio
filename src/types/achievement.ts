export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedAt?: Date;
  secret?: boolean;
}

export type AchievementId =
  | "first_visit"
  | "konami_master"
  | "snake_player"
  | "retro_lover"
  | "violet_fan"
  | "sound_explorer"
  | "achievement_hunter"
  | "speed_reader"
  | "theme_switcher"
  | "explorer";

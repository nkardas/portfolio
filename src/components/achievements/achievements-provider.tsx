"use client";

import { useEffect, useState } from "react";
import { useAchievements } from "@/hooks/use-achievements";
import { AchievementToast } from "./achievement-toast";
import { AchievementsModal } from "./achievements-modal";
import { AchievementId } from "@/types/achievement";

export function AchievementsProvider() {
  const { achievements, unlockAchievement } = useAchievements();
  const [showModal, setShowModal] = useState(false);
  const [toastQueue, setToastQueue] = useState<AchievementId[]>([]);
  const [currentToast, setCurrentToast] = useState<AchievementId | null>(null);

  // Unlock first_visit on mount
  useEffect(() => {
    unlockAchievement("first_visit");
  }, [unlockAchievement]);

  // Listen for achievement unlocks
  useEffect(() => {
    const handleAchievement = (event: CustomEvent) => {
      const achievementId = event.detail.id as AchievementId;
      const achievement = achievements[achievementId];

      if (achievement && !achievement.unlocked) {
        setToastQueue((queue) => [...queue, achievementId]);
      }
    };

    window.addEventListener("unlock-achievement", handleAchievement as EventListener);
    return () => window.removeEventListener("unlock-achievement", handleAchievement as EventListener);
  }, [achievements]);

  // Process toast queue
  useEffect(() => {
    if (!currentToast && toastQueue.length > 0) {
      const [next, ...rest] = toastQueue;
      setCurrentToast(next);
      setToastQueue(rest);
    }
  }, [currentToast, toastQueue]);

  // Open modal on command
  useEffect(() => {
    const handleOpenAchievements = () => {
      setShowModal(true);
    };

    (window as Window & { openAchievements?: () => void }).openAchievements = handleOpenAchievements;
    return () => {
      delete (window as Window & { openAchievements?: () => void }).openAchievements;
    };
  }, []);

  const currentAchievement = currentToast ? achievements[currentToast] : null;

  return (
    <>
      {currentAchievement && (
        <AchievementToast
          title={currentAchievement.title}
          description={currentAchievement.description}
          icon={currentAchievement.icon}
          show={!!currentToast}
          onHide={() => setCurrentToast(null)}
        />
      )}
      <AchievementsModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}

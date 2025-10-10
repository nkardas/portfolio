"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SoundState {
  isSoundEnabled: boolean;
  toggleSound: () => void;
  setSound: (value: boolean) => void;
  playSound: (soundName: SoundEffect) => void;
}

export type SoundEffect =
  | "click"
  | "success"
  | "achievement"
  | "error"
  | "hover"
  | "transition"
  | "snake_eat"
  | "snake_die"
  | "konami";

// Create oscillator-based sounds (retro beep sounds)
function createBeepSound(frequency: number, duration: number, type: OscillatorType = "square"): void {
  if (typeof window === "undefined" || !window.AudioContext) return;

  try {
    const AudioContextConstructor = window.AudioContext || (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextConstructor) return;
    const audioContext = new AudioContextConstructor();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.value = frequency;
    oscillator.type = type;

    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration);
  } catch (error) {
    console.warn("Could not play sound:", error);
  }
}

export const useSound = create<SoundState>()(
  persist(
    (set, get) => ({
      isSoundEnabled: false,

      toggleSound: () => {
        const newValue = !get().isSoundEnabled;
        set({ isSoundEnabled: newValue });
        if (newValue) {
          createBeepSound(880, 0.1);
        }
      },

      setSound: (value: boolean) => set({ isSoundEnabled: value }),

      playSound: (soundName: SoundEffect) => {
        if (!get().isSoundEnabled) return;

        // Different frequencies for different sounds (retro game style)
        switch (soundName) {
          case "click":
            createBeepSound(800, 0.05);
            break;
          case "success":
            createBeepSound(523, 0.1);
            setTimeout(() => createBeepSound(659, 0.1), 100);
            setTimeout(() => createBeepSound(784, 0.15), 200);
            break;
          case "achievement":
            createBeepSound(523, 0.1);
            setTimeout(() => createBeepSound(659, 0.1), 100);
            setTimeout(() => createBeepSound(784, 0.1), 200);
            setTimeout(() => createBeepSound(1047, 0.2), 300);
            break;
          case "error":
            createBeepSound(200, 0.2);
            break;
          case "hover":
            createBeepSound(600, 0.03);
            break;
          case "transition":
            createBeepSound(440, 0.1);
            setTimeout(() => createBeepSound(554, 0.1), 80);
            break;
          case "snake_eat":
            createBeepSound(1000, 0.05);
            break;
          case "snake_die":
            createBeepSound(300, 0.1);
            setTimeout(() => createBeepSound(250, 0.1), 100);
            setTimeout(() => createBeepSound(200, 0.2), 200);
            break;
          case "konami":
            createBeepSound(659, 0.1);
            setTimeout(() => createBeepSound(784, 0.1), 100);
            setTimeout(() => createBeepSound(880, 0.1), 200);
            setTimeout(() => createBeepSound(1047, 0.2), 300);
            break;
        }
      },
    }),
    {
      name: "sound-storage",
    }
  )
);

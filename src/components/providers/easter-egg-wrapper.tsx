'use client';

import dynamic from 'next/dynamic';

// Lazy load Easter Eggs (only loaded when triggered)
const EasterEggProvider = dynamic(
  () => import('@/components/easter-egg/easter-egg-provider').then(mod => ({ default: mod.EasterEggProvider })),
  { ssr: false }
);

const SnakeProvider = dynamic(
  () => import('@/components/games/snake-provider').then(mod => ({ default: mod.SnakeProvider })),
  { ssr: false }
);

export function EasterEggWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <EasterEggProvider />
      <SnakeProvider />
    </>
  );
}

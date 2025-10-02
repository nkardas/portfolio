"use client";

import { LogoCompact } from "./logo-compact";
import { LogoCompactAnimated } from "./logo-compact-animated";
import { LogoLarge } from "./logo-large";
import { LogoLargeAnimated } from "./logo-large-animated";

/**
 * Composant Logo principal - Exporte tous les variants
 *
 * Usage:
 * import { Logo } from "@/components/ui/logo"
 *
 * <Logo.Compact size={48} variant="default" theme="light" />
 * <Logo.CompactAnimated size={48} variant="default" theme="light" autoPlay />
 * <Logo.Large variant="default" theme="light" />
 * <Logo.LargeAnimated variant="default" theme="light" autoPlay />
 */
export const Logo = {
  Compact: LogoCompact,
  CompactAnimated: LogoCompactAnimated,
  Large: LogoLarge,
  LargeAnimated: LogoLargeAnimated,
};

export { LogoCompact, LogoCompactAnimated, LogoLarge, LogoLargeAnimated };

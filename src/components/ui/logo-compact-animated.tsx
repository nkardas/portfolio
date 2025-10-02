"use client";

import { motion } from "framer-motion";

interface LogoCompactAnimatedProps {
  className?: string;
  variant?: "default" | "mono";
  theme?: "light" | "dark";
  size?: number;
  autoPlay?: boolean;
  delay?: number; // ms before animation starts
}

/**
 * Logo Compact "nK" avec animation color transition
 * Usage: <LogoCompactAnimated size={48} variant="default" theme="light" autoPlay />
 */
export function LogoCompactAnimated({
  className = "",
  variant = "default",
  theme = "light",
  size = 48,
  autoPlay = true,
  delay = 0,
}: LogoCompactAnimatedProps) {
  const fontSize = (size / 48) * 28; // Scale proportionnellement

  // Couleurs selon variant et theme
  const getColors = () => {
    if (variant === "mono") {
      return theme === "light"
        ? { n: "#1A1A1A", k: "#1A1A1A" }
        : { n: "#FFFFFF", k: "#FFFFFF" };
    }
    // default variant
    return theme === "light"
      ? { n: "#1A1A1A", kStart: "#1A1A1A", kEnd: "#8B7AB8" }
      : { n: "#FFFFFF", kStart: "#FFFFFF", kEnd: "#9F8DCB" };
  };

  const colors = getColors();

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="nKardas logo"
    >
      <text
        x="50%"
        y="50%"
        dominantBaseline="central"
        textAnchor="middle"
        fontFamily="'Geist Mono', monospace"
        fontWeight="600"
        fontSize={fontSize}
        letterSpacing="-0.02em"
      >
        {/* n - statique */}
        <tspan fill={colors.n}>n</tspan>

        {/* K - avec color transition (seulement pour variant default) */}
        {variant === "default" ? (
          <motion.tspan
            initial={{ fill: colors.kStart }}
            animate={
              autoPlay
                ? { fill: colors.kEnd }
                : { fill: colors.kStart }
            }
            transition={{
              duration: 0.8,
              delay: delay / 1000,
              ease: "easeInOut",
            }}
          >
            K
          </motion.tspan>
        ) : (
          <tspan fill={colors.k}>K</tspan>
        )}
      </text>
    </svg>
  );
}

import React from "react";

interface LogoCompactProps {
  className?: string;
  variant?: "default" | "mono";
  theme?: "light" | "dark";
  size?: number;
}

/**
 * Logo Compact "nK"
 * Usage: <LogoCompact size={48} variant="default" />
 */
export function LogoCompact({
  className = "",
  variant = "default",
  theme = "light",
  size = 48,
}: LogoCompactProps) {
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
      ? { n: "#1A1A1A", k: "#8B7AB8" }
      : { n: "#FFFFFF", k: "#9F8DCB" };
  };

  const { n: nColor, k: kColor } = getColors();

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
        <tspan fill={nColor}>n</tspan>
        <tspan fill={kColor}>K</tspan>
      </text>
    </svg>
  );
}

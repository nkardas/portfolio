import React from "react";

interface LogoLargeProps {
  className?: string;
  variant?: "default" | "mono";
  theme?: "light" | "dark";
}

/**
 * Logo Large "./nkardas" avec surlignage violet incliné (skew -2deg)
 * Usage: <LogoLarge variant="default" theme="light" />
 */
export function LogoLarge({
  className = "",
  variant = "default",
  theme = "light",
}: LogoLargeProps) {
  // Couleurs selon variant et theme
  const getColors = () => {
    if (variant === "mono") {
      return theme === "light"
        ? { text: "#1A1A1A", accent: "#1A1A1A" }
        : { text: "#FFFFFF", accent: "#FFFFFF" };
    }
    // default variant
    return theme === "light"
      ? { text: "#1A1A1A", accent: "#8B7AB8" }
      : { text: "#FFFFFF", accent: "#9F8DCB" };
  };

  const c = getColors();

  return (
    <div className={`inline-flex items-center font-mono text-4xl font-semibold tracking-tight ${className}`}>
      <span className="relative inline-block">
        <span
          className="absolute rounded-sm"
          style={{
            backgroundColor: c.accent,
            opacity: 0.3,
            bottom: "0.1em",
            top: "0.3em",
            left: 0,
            right: 0,
            transformOrigin: "left",
            transform: "skewY(-2deg)",
          }}
        />
        <span className="relative" style={{ color: c.text }}>
          ./nkardas
        </span>
      </span>
    </div>
  );
}

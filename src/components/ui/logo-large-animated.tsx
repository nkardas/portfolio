"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface LogoLargeAnimatedProps {
  className?: string;
  variant?: "default" | "mono";
  theme?: "light" | "dark";
  autoPlay?: boolean;
  typingSpeed?: number; // ms per character
  highlightDelay?: number; // ms before highlight appears
}

/**
 * Logo Large avec animation de typing + surlignage incliné (skew -2deg)
 * Usage: <LogoLargeAnimated variant="default" theme="light" autoPlay />
 */
export function LogoLargeAnimated({
  className = "",
  variant = "default",
  theme = "light",
  autoPlay = true,
  typingSpeed = 100,
  highlightDelay = 300,
}: LogoLargeAnimatedProps) {
  const text = "./nkardas";
  const [displayedText, setDisplayedText] = useState("");
  const [showHighlight, setShowHighlight] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

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

  useEffect(() => {
    if (!autoPlay) return;

    let currentIndex = 0;
    setIsTyping(true);
    setShowHighlight(false);
    setDisplayedText("");

    const typingInterval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
        // Afficher le surlignage après un délai
        setTimeout(() => {
          setShowHighlight(true);
        }, highlightDelay);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [autoPlay, typingSpeed, highlightDelay, text]);

  return (
    <div className={`inline-flex items-center font-mono text-4xl font-semibold tracking-tight ${className}`}>
      <span className="relative inline-block">
        {/* Surlignage animé incliné */}
        <motion.span
          className="absolute rounded-sm"
          initial={{ opacity: 0 }}
          animate={{
            opacity: showHighlight ? 0.3 : 0,
            transform: showHighlight
              ? "scaleX(1) skewY(-2deg)"
              : "scaleX(0) skewY(-2deg)",
          }}
          transition={{
            opacity: { duration: 0.3 },
            transform: { duration: 0.5, ease: "easeOut" },
          }}
          style={{
            backgroundColor: c.accent,
            bottom: "0.1em",
            top: "0.3em",
            left: 0,
            right: 0,
            transformOrigin: "left",
          }}
        />

        {/* Texte avec typing */}
        <span className="relative" style={{ color: c.text }}>
          {displayedText}
          {/* Cursor clignotant pendant le typing */}
          {isTyping && (
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{ color: c.accent }}
            >
              |
            </motion.span>
          )}
        </span>
      </span>
    </div>
  );
}

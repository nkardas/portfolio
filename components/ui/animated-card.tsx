"use client";

import { motion } from "framer-motion";
import { scaleOnHover } from "@/lib/animations";

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

/**
 * Card avec animation de scale au hover
 * Usage: <AnimatedCard>...</AnimatedCard>
 */
export function AnimatedCard({
  children,
  className = "",
  href,
}: AnimatedCardProps) {
  const Component = href ? motion.a : motion.div;

  return (
    <Component
      href={href}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      variants={scaleOnHover}
      className={className}
    >
      {children}
    </Component>
  );
}

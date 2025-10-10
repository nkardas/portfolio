"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { useParams } from "next/navigation";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

/**
 * Section qui apparaît en fade-in depuis le bas lors du scroll
 * Usage: <AnimatedSection>...</AnimatedSection>
 */
export function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: AnimatedSectionProps) {
  const params = useParams();
  const locale = params.locale as string;

  return (
    <motion.div
      key={`animated-section-${locale}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px", amount: 0.3 }}
      variants={fadeInUp}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

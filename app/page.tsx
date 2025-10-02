"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { AnimatedCard } from "@/components/ui/animated-card";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function Home() {
  const projects = ["Projet 1", "Projet 2", "Projet 3"];

  return (
    <div className="min-h-screen p-8 sm:p-20 space-y-20">
      {/* Hero Section */}
      <AnimatedSection className="text-center max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">Némo Kardassevitch</h1>
        <p className="text-xl text-muted-foreground">
          Développeur Full Stack & Étudiant
        </p>
      </AnimatedSection>

      {/* À propos */}
      <AnimatedSection delay={0.2} className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">À propos</h2>
        <p className="text-muted-foreground">
          Portfolio en construction avec Next.js 15, Tailwind CSS et Framer
          Motion.
        </p>
      </AnimatedSection>

      {/* Projets avec Stagger Animation */}
      <AnimatedSection delay={0.3}>
        <h2 className="text-3xl font-bold mb-8 text-center">Projets</h2>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {projects.map((project, i) => (
            <motion.div key={i} variants={staggerItem}>
              <AnimatedCard className="p-6 border rounded-lg bg-card hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">{project}</h3>
                <p className="text-sm text-muted-foreground">
                  Description du projet avec animation scale au hover
                </p>
              </AnimatedCard>
            </motion.div>
          ))}
        </motion.div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection delay={0.4} className="text-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium"
        >
          Me contacter
        </motion.button>
      </AnimatedSection>
    </div>
  );
}

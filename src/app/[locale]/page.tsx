"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { AnimatedCard } from "@/components/ui/animated-card";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations();
  const projects = [
    t('projects.project1'),
    t('projects.project2'),
    t('projects.project3')
  ];

  return (
    <div className="min-h-screen p-8 sm:p-20 space-y-20">
      <div className="fixed top-8 right-8">
        <LanguageSwitcher />
      </div>

      <AnimatedSection className="text-center max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">{t('hero.name')}</h1>
        <p className="text-xl text-muted-foreground">
          {t('hero.role')}
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.2} className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">{t('about.title')}</h2>
        <p className="text-muted-foreground">
          {t('about.description')}
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.3}>
        <h2 className="text-3xl font-bold mb-8 text-center">{t('projects.title')}</h2>
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
                  {t('projects.description')}
                </p>
              </AnimatedCard>
            </motion.div>
          ))}
        </motion.div>
      </AnimatedSection>

      <AnimatedSection delay={0.4} className="text-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium"
        >
          {t('contact.cta')}
        </motion.button>
      </AnimatedSection>
    </div>
  );
}

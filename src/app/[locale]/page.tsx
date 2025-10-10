"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { AnimatedCard } from "@/components/ui/animated-card";
import { Logo } from "@/components/ui/logo";
import { useTheme } from "@/components/providers/theme-provider";
import { ContactForm } from "@/components/contact-form";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { projects as allProjects } from "@/data/projects";
import { useState } from "react";

export default function Home() {
  const t = useTranslations();
  const { theme } = useTheme();
  const params = useParams();
  const locale = params.locale as string;
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  // Get top 3 projects sorted by order
  const topProjects = [...allProjects]
    .sort((a, b) => (a.order || 999) - (b.order || 999))
    .slice(0, 3)
    .map(project => ({
      slug: project.slug,
      title: t(`projectsList.${project.slug}.title`),
      description: t(`projectsList.${project.slug}.description`)
    }));

  return (
    <div key={locale} className="min-h-screen pt-20">
      <AnimatedSection className="min-h-screen flex flex-col items-center justify-center text-center px-8 -mt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Logo.LargeAnimated variant="default" theme={theme} autoPlay />
        </motion.div>
        <p className="text-lg text-muted-foreground mb-4">
          {t('hero.greeting')}
        </p>
        <h1 className="text-6xl sm:text-7xl font-bold mb-6 tracking-tight">{t('hero.name')}</h1>
        <p className="text-2xl sm:text-3xl text-primary font-medium">
          {t('hero.role')}
        </p>
      </AnimatedSection>

      <section className="py-32 px-8 bg-muted/30">
        <AnimatedSection delay={0.2} className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6">{t('about.title')}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            {t('about.description')}
          </p>
          <Link href={`/${locale}/cv`}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-primary text-primary rounded-xl font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {t('about.cvButton')}
            </motion.button>
          </Link>
        </AnimatedSection>
      </section>

      <section className="py-32 px-8">
        <AnimatedSection delay={0.3} className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-16 text-center">{t('projects.title')}</h2>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {topProjects.map((project, i) => (
              <motion.div key={project.slug} variants={staggerItem} className="flex">
                <Link href={`/${locale}/projects/${project.slug}`} className="flex w-full">
                  <AnimatedCard className="group p-8 border border-border rounded-xl bg-card hover:shadow-xl hover:border-primary/50 transition-all duration-300 flex flex-col h-full w-full">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                      <span className="text-2xl text-primary">0{i + 1}</span>
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                    <p className="text-muted-foreground leading-relaxed flex-1">
                      {project.description}
                    </p>
                  </AnimatedCard>
                </Link>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <Link href={`/${locale}/projects`}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-primary text-primary rounded-xl font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {t('projects.viewAll')}
              </motion.button>
            </Link>
          </motion.div>
        </AnimatedSection>
      </section>

      <section id="contact" className="py-32 px-8 bg-muted/30">
        <AnimatedSection delay={0.4} className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6">{t('contact.title')}</h2>
          <p className="text-lg text-muted-foreground mb-12">
            {t('contact.description')}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsContactFormOpen(true)}
            className="px-10 py-4 bg-primary text-primary-foreground rounded-xl font-medium text-lg hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
          >
            {t('contact.cta')}
          </motion.button>
        </AnimatedSection>
      </section>

      {isContactFormOpen && (
        <ContactForm onClose={() => setIsContactFormOpen(false)} />
      )}
    </div>
  );
}

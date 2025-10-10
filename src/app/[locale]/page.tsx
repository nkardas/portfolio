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
        <AnimatedSection delay={0.4} className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold mb-6">{t('contact.title')}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('contact.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-6">{t('contact.info.title')}</h3>
                <div className="space-y-4">
                  <motion.a
                    href="mailto:contact@nkardas.fr"
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <p className="text-sm text-muted-foreground">{t('contact.info.email')}</p>
                      <p className="font-medium">contact@nkardas.fr</p>
                    </div>
                  </motion.a>

                  <motion.a
                    href="https://linkedin.com/in/nemokardassevitch"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                    <div className="text-left">
                      <p className="text-sm text-muted-foreground">LinkedIn</p>
                      <p className="font-medium">Némo Kardassevitch</p>
                    </div>
                  </motion.a>

                  <motion.a
                    href="https://github.com/nkardas"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <p className="text-sm text-muted-foreground">GitHub</p>
                      <p className="font-medium">@nkardas</p>
                    </div>
                  </motion.a>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
                <p className="text-sm text-muted-foreground">
                  {t('contact.info.availability')}
                </p>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-center justify-center h-full bg-card border border-border rounded-2xl p-12"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold mb-4">{t('contact.cta.title')}</h3>
                <p className="text-muted-foreground">
                  {t('contact.cta.subtitle')}
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsContactFormOpen(true)}
                className="px-10 py-4 bg-primary text-primary-foreground rounded-xl font-medium text-lg hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
              >
                {t('contact.cta.button')}
              </motion.button>
            </motion.div>
          </div>
        </AnimatedSection>
      </section>

      {isContactFormOpen && (
        <ContactForm onClose={() => setIsContactFormOpen(false)} />
      )}
    </div>
  );
}

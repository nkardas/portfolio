"use client";

import { AnimatedSection } from "@/components/ui/animated-section";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Download, GraduationCap, Briefcase, Code, Globe, Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";

export default function CVPage() {
  const t = useTranslations("cv");
  const params = useParams();
  const locale = params.locale as string;

  const handleDownloadPDF = () => {
    const pdfUrl = `/cv/CV-Nemo-Kardassevitch-${locale.toUpperCase()}.pdf`;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = `CV-Nemo-Kardassevitch-${locale.toUpperCase()}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const skills = {
    programming: ["JavaScript", "TypeScript", "Python", "C/C++", "PHP", "SQL", "Swift", "HTML/CSS"],
    webFrameworks: ["React", "Next.js", "Node.js", "Tailwind CSS", "Framer Motion"],
    embedded: ["Verilog", "Arduino", "STM32", "PCB Design", "Circuit Design"],
    tools: ["Git", "Docker", "Linux"]
  };

  const experiences = [
    {
      title: t("experience.freelance.title"),
      company: t("experience.freelance.company"),
      period: t("experience.freelance.period"),
      location: t("experience.freelance.location"),
      description: t("experience.freelance.description")
    },
    {
      title: t("experience.spygen.title"),
      company: t("experience.spygen.company"),
      period: t("experience.spygen.period"),
      location: t("experience.spygen.location"),
      description: t("experience.spygen.description")
    },
    {
      title: t("experience.bde.title"),
      company: t("experience.bde.company"),
      period: t("experience.bde.period"),
      location: t("experience.bde.location"),
      description: t("experience.bde.description")
    },
    {
      title: t("experience.anfr.title"),
      company: t("experience.anfr.company"),
      period: t("experience.anfr.period"),
      location: t("experience.anfr.location"),
      description: t("experience.anfr.description")
    },
    {
      title: t("experience.kora.title"),
      company: t("experience.kora.company"),
      period: t("experience.kora.period"),
      location: t("experience.kora.location"),
      description: t("experience.kora.description")
    }
  ];

  const education = [
    {
      degree: t("education.snu.degree"),
      school: t("education.snu.school"),
      period: t("education.snu.period"),
      description: t("education.snu.description")
    },
    {
      degree: t("education.ismin.degree"),
      school: t("education.ismin.school"),
      period: t("education.ismin.period"),
      description: t("education.ismin.description")
    },
    {
      degree: t("education.prepa.degree"),
      school: t("education.prepa.school"),
      period: t("education.prepa.period"),
      description: t("education.prepa.description")
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Header Section */}
      <AnimatedSection className="max-w-4xl mx-auto px-8 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
          <div className="flex-1">
            <h1 className="text-5xl font-bold mb-2">Némo Kardassevitch</h1>
            <p className="text-2xl text-primary font-medium mb-4">
              {locale === 'fr' ? 'Ingénieur Logiciel & Électronique' : 'Software & Electronics Engineer'}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-muted-foreground">
              <a
                href={`mailto:${t("contact.email")}`}
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">{t("contact.email")}</span>
              </a>
              <a
                href={`tel:${t("contact.phone")}`}
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">{t("contact.phone")}</span>
              </a>
              <a
                href={`https://${t("contact.github")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Github className="w-4 h-4" />
                <span className="text-sm">{t("contact.github")}</span>
              </a>
              <a
                href={`https://${t("contact.linkedin")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span className="text-sm">{t("contact.linkedin")}</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{t("contact.location")}</span>
              </div>
            </div>
          </div>
          <motion.button
            onClick={handleDownloadPDF}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
          >
            <Download className="w-5 h-5" />
            {t("downloadPdf")}
          </motion.button>
        </div>
      </AnimatedSection>

      <div className="max-w-4xl mx-auto px-8 space-y-16">
        {/* Education Section */}
        <AnimatedSection delay={0.1}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-3xl font-semibold">{t("education.title")}</h2>
          </div>

          <div className="border-l-2 border-primary/20 pl-6 ml-5 space-y-8">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="absolute -left-[29px] top-2 w-4 h-4 rounded-full bg-primary"></div>
                <div className="mb-1">
                  <span className="text-sm text-muted-foreground">{edu.period}</span>
                </div>
                <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
                <p className="text-primary font-medium mb-2">{edu.school}</p>
                <p className="text-muted-foreground">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Experience Section */}
        <AnimatedSection delay={0.2}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-3xl font-semibold">{t("experience.title")}</h2>
          </div>

          <div className="border-l-2 border-primary/20 pl-6 ml-5 space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="absolute -left-[29px] top-2 w-4 h-4 rounded-full bg-primary"></div>
                <div className="mb-1">
                  <span className="text-sm text-muted-foreground">{exp.period}</span>
                </div>
                <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                <p className="text-primary font-medium mb-1">{exp.company}</p>
                <p className="text-sm text-muted-foreground mb-2">{exp.location}</p>
                <p className="text-muted-foreground">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Skills Section */}
        <AnimatedSection delay={0.3}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Code className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-3xl font-semibold">{t("skills.title")}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-primary">{t("skills.programming")}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.programming.map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium hover:border-primary/50 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 text-primary">{t("skills.webFrameworks")}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.webFrameworks.map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium hover:border-primary/50 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 text-primary">{t("skills.embedded")}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.embedded.map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium hover:border-primary/50 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 text-primary">{t("skills.tools")}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium hover:border-primary/50 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Languages Section */}
        <AnimatedSection delay={0.4}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Globe className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-3xl font-semibold">{t("languages.title")}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 border border-border rounded-xl bg-card hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-semibold mb-2">{t("languages.french")}</h3>
              <p className="text-muted-foreground">{t("languages.frenchLevel")}</p>
            </div>
            <div className="p-6 border border-border rounded-xl bg-card hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-semibold mb-2">{t("languages.english")}</h3>
              <p className="text-muted-foreground">{t("languages.englishLevel")}</p>
            </div>
            <div className="p-6 border border-border rounded-xl bg-card hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-semibold mb-2">{t("languages.chinese")}</h3>
              <p className="text-muted-foreground">{t("languages.chineseLevel")}</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}

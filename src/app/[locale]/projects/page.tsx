"use client";

import { useState } from "react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { ProjectCard } from "@/components/projects/project-card";
import { projects } from "@/data/projects";
import { ProjectCategory } from "@/types/project";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function ProjectsPage() {
  const t = useTranslations("projects");
  const params = useParams();
  const locale = params.locale as string;

  const [selectedCategory, setSelectedCategory] =
    useState<ProjectCategory | "all">("all");

  const categories: (ProjectCategory | "all")[] = [
    "all",
    "web",
    "electronics",
    "school",
    "personal",
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.categories.includes(selectedCategory));

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Header */}
      <AnimatedSection className="max-w-7xl mx-auto px-8 py-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
            <Briefcase className="w-6 h-6 text-primary" />
          </div>
          <h1 className="text-5xl font-bold">{t("allProjectsTitle")}</h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-2xl">
          {t("viewAll")}
        </p>
      </AnimatedSection>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-8 mb-12">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "bg-card border border-border hover:border-primary/50"
              }`}
            >
              {t(`categories.${category}`)}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-8">
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                locale={locale}
                index={index}
              />
            ))}
          </div>
        ) : (
          <AnimatedSection>
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                Aucun projet dans cette catégorie
              </p>
            </div>
          </AnimatedSection>
        )}
      </div>
    </div>
  );
}

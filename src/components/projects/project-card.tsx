"use client";

import { Project, ProjectCategory } from "@/types/project";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { Calendar } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  locale: string;
  index: number;
}

const categoryColors: Record<ProjectCategory, string> = {
  web: "bg-blue-500/10 text-blue-500 border-blue-500/20",
  electronics: "bg-amber-500/10 text-amber-500 border-amber-500/20",
  school: "bg-green-500/10 text-green-500 border-green-500/20",
  personal: "bg-purple-500/10 text-purple-500 border-purple-500/20",
  professional: "bg-indigo-500/10 text-indigo-500 border-indigo-500/20",
};

export function ProjectCard({ project, locale, index }: ProjectCardProps) {
  const t = useTranslations("projects");
  const tProjects = useTranslations("projectsList");

  const title = tProjects(`${project.slug}.title`);
  const description = tProjects(`${project.slug}.description`);

  const formattedDate = new Date(project.date + "-01").toLocaleDateString(
    locale,
    {
      year: "numeric",
      month: "long",
    }
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Link
        href={`/${locale}/projects/${project.slug}`}
        className="group block h-full"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="h-full border border-border rounded-xl overflow-hidden bg-card hover:border-primary/50 transition-all duration-300 shadow-lg shadow-black/5 hover:shadow-primary/10"
        >
          {/* Image */}
          <div className="relative w-full aspect-video bg-muted overflow-hidden">
            <Image
              src={project.image}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Content */}
          <div className="p-6 space-y-3">
            {/* Category Badges */}
            <div className="flex items-center gap-2 flex-wrap">
              {project.categories.map((category) => (
                <span
                  key={category}
                  className={`text-xs font-medium px-3 py-1 rounded-full border ${categoryColors[category]}`}
                >
                  {t(`categories.${category}`)}
                </span>
              ))}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
              {title}
            </h3>

            {/* Description */}
            <p className="text-muted-foreground text-sm line-clamp-2">
              {description}
            </p>

            {/* Date */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
              <Calendar className="w-4 h-4" />
              <span>{formattedDate}</span>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

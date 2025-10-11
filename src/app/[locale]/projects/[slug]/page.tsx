import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import { AnimatedSection } from "@/components/ui/animated-section";
import { MarkdownContent } from "@/components/ui/markdown-content";
import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, ExternalLink } from "lucide-react";
import { readFile } from "fs/promises";
import { join } from "path";

interface ProjectPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  const locales = ["fr", "en"];
  const params: { locale: string; slug: string }[] = [];

  for (const locale of locales) {
    for (const project of projects) {
      params.push({ locale, slug: project.slug });
    }
  }

  return params;
}

async function getProjectContent(slug: string, locale: string) {
  try {
    const filePath = join(
      process.cwd(),
      "content",
      "projects",
      slug,
      `${locale}.md`
    );
    const content = await readFile(filePath, "utf-8");
    return content;
  } catch {
    return null;
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const t = await getTranslations("projects");
  const tProjects = await getTranslations("projectsList");

  const title = tProjects(`${project.slug}.title`);
  const description = tProjects(`${project.slug}.description`);

  const formattedDate = new Date(project.date + "-01").toLocaleDateString(
    locale,
    {
      year: "numeric",
      month: "long",
    }
  );

  const content = await getProjectContent(slug, locale);

  return (
    <div key={`${slug}-${locale}`} className="min-h-screen pt-20 pb-24">
      {/* Back Button - Fixed positioning */}
      <div className="max-w-6xl mx-auto px-8 py-6">
        <AnimatedSection>
          <Link
            href={`/${locale}/projects`}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">{t("backToProjects")}</span>
          </Link>
        </AnimatedSection>
      </div>

      {/* Hero Section */}
      <AnimatedSection delay={0.1} className="max-w-6xl mx-auto px-8 mb-16">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left: Text Content */}
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-3 flex-wrap">
              {project.categories.map((category) => (
                <span
                  key={category}
                  className="text-sm font-semibold px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20"
                >
                  {t(`categories.${category}`)}
                </span>
              ))}
              <span className="text-sm text-muted-foreground flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {formattedDate}
              </span>
            </div>

            <div>
              <h1 className="text-6xl font-bold mb-6 leading-tight">{title}</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {description}
              </p>
            </div>

            {project.link && (
              <div className="pt-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40"
                >
                  <ExternalLink className="w-5 h-5" />
                  {t("externalLink")}
                </a>
              </div>
            )}
          </div>

          {/* Right: Project Image */}
          <div className="w-full lg:w-2/5">
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-border shadow-2xl">
              <Image
                src={project.image}
                alt={title}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-8 mb-16">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      </div>

      {/* Content Section */}
      {content ? (
        <div className="max-w-4xl mx-auto px-8">
          <MarkdownContent content={content} />
        </div>
      ) : (
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center py-24 border-2 border-dashed border-border rounded-2xl">
            <p className="text-muted-foreground text-lg">
              {locale === "fr"
                ? "Contenu détaillé à venir..."
                : "Detailed content coming soon..."}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

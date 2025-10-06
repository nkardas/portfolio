import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "personal-website",
    categories: ["web", "personal"],
    date: "2025-10",
    image: "/projects/personal-website.svg",
    link: "https://nkardas.fr",
    featured: true,
    order: 1,
  },
  {
    slug: "project-placeholder-1",
    categories: ["electronics"],
    date: "2025-09",
    image: "/projects/placeholder.svg",
    featured: false,
    order: 2,
  },
  {
    slug: "project-placeholder-2",
    categories: ["school", "electronics"],
    date: "2025-08",
    image: "/projects/placeholder.svg",
    featured: false,
    order: 3,
  },
  {
    slug: "project-placeholder-3",
    categories: ["web"],
    date: "2025-07",
    image: "/projects/placeholder.svg",
    featured: false,
    order: 4,
  },
  {
    slug: "project-placeholder-4",
    categories: ["personal"],
    date: "2025-06",
    image: "/projects/placeholder.svg",
    featured: false,
    order: 5,
  },
  {
    slug: "project-placeholder-5",
    categories: ["electronics", "school"],
    date: "2025-05",
    image: "/projects/placeholder.svg",
    featured: false,
    order: 6,
  },
];

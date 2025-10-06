export type ProjectCategory = "web" | "electronics" | "school" | "personal";

export interface Project {
  slug: string;
  categories: ProjectCategory[]; // Changed to array
  date: string;
  image: string;
  link?: string;
  featured: boolean;
  order: number;
}

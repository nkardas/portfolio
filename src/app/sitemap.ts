import { MetadataRoute } from 'next'
import { projects } from '@/data/projects'
import { routing } from '@/i18n/routing'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nkardas.fr'
  const locales = routing.locales

  // Static pages
  const staticPages = ['', '/projects', '/cv']

  const staticUrls: MetadataRoute.Sitemap = []

  // Add static pages for each locale
  locales.forEach(locale => {
    staticPages.forEach(page => {
      staticUrls.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'weekly' : 'monthly',
        priority: page === '' ? 1.0 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map(l => [l, `${baseUrl}/${l}${page}`])
          )
        }
      })
    })
  })

  // Add project pages for each locale
  const projectUrls: MetadataRoute.Sitemap = []

  locales.forEach(locale => {
    projects.forEach(project => {
      projectUrls.push({
        url: `${baseUrl}/${locale}/projects/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: {
          languages: Object.fromEntries(
            locales.map(l => [`${l}`, `${baseUrl}/${l}/projects/${project.slug}`])
          )
        }
      })
    })
  })

  return [...staticUrls, ...projectUrls]
}

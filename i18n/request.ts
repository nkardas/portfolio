import { getRequestConfig } from 'next-intl/server'
import { notFound } from 'next/navigation'

export const locales = ['fr', 'en'] as const
export const defaultLocale = 'fr' as const

export type Locale = (typeof locales)[number]

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as Locale)) notFound()

  return {
    messages: (await import(`../messages/${locale}.json`)).default
  }
})

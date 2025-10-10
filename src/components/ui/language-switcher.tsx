'use client'

import { useParams, usePathname, useRouter } from 'next/navigation'

export function LanguageSwitcher() {
  const params = useParams()
  const locale = params.locale as string
  const pathname = usePathname()
  const router = useRouter()

  const switchLocale = (newLocale: string) => {
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`)
    router.push(newPathname)
    // Scroll to top after language change
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 100)
  }

  return (
    <div className="flex items-center gap-2 text-sm font-mono">
      <button
        onClick={() => switchLocale('fr')}
        className={`transition-opacity ${
          locale === 'fr' ? 'font-bold opacity-100' : 'opacity-50 hover:opacity-75'
        }`}
      >
        FR
      </button>
      <span className="opacity-30">/</span>
      <button
        onClick={() => switchLocale('en')}
        className={`transition-opacity ${
          locale === 'en' ? 'font-bold opacity-100' : 'opacity-50 hover:opacity-75'
        }`}
      >
        EN
      </button>
    </div>
  )
}

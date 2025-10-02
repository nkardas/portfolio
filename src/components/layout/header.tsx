'use client'

import { Logo } from '@/components/ui/logo'
import { LanguageSwitcher } from '@/components/ui/language-switcher'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { useTheme } from '@/components/providers/theme-provider'
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import Link from 'next/link'

export function Header() {
  const t = useTranslations('navigation')
  const params = useParams()
  const locale = params.locale as string
  const { theme } = useTheme()
  const [isHovered, setIsHovered] = useState(false)

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault()
    const contactSection = document.querySelector('#contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
        <Link
          href={`/${locale}`}
          className="flex items-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {isHovered ? (
            <Logo.LargeAnimated variant="default" theme={theme} autoPlay />
          ) : (
            <Logo.Large variant="default" theme={theme} />
          )}
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            href={`/${locale}/projects`}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            {t('projects')}
          </Link>
          <Link
            href={`/${locale}/cv`}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            {t('cv')}
          </Link>
          <button
            onClick={scrollToContact}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            {t('contact')}
          </button>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <LanguageSwitcher />
          </div>
        </nav>

        <button className="md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  )
}

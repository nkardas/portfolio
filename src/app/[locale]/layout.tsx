import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { Header } from '@/components/layout/header';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { EasterEggProvider } from '@/components/easter-egg/easter-egg-provider';
import { SnakeProvider } from '@/components/games/snake-provider';
import { RetroModeProvider } from '@/components/retro-mode-provider';
import { VioletModeProvider } from '@/components/violet-mode-provider';
import { AchievementsProvider } from '@/components/achievements/achievements-provider';
import { ConsoleInit } from '@/components/console-init';
import "../globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nkardas.fr'),
  title: {
    default: "Némo Kardassevitch - Ingénieur Logiciel & Électronique",
    template: "%s | Némo Kardassevitch"
  },
  description: "Étudiant ingénieur ISMIN à l'École des Mines de Saint-Étienne, spécialisé en microélectronique et informatique. Du système embarqué au développement web/mobile fullstack.",
  keywords: [
    "Némo Kardassevitch",
    "nkardas",
    "ingénieur logiciel",
    "développeur fullstack",
    "Next.js",
    "React",
    "TypeScript",
    "électronique",
    "systèmes embarqués",
    "ISMIN",
    "Mines Saint-Étienne",
    "freelance",
    "portfolio"
  ],
  authors: [{ name: "Némo Kardassevitch", url: "https://nkardas.fr" }],
  creator: "Némo Kardassevitch",
  publisher: "Némo Kardassevitch",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    alternateLocale: ["en_US"],
    url: "https://nkardas.fr",
    siteName: "Némo Kardassevitch",
    title: "Némo Kardassevitch - Ingénieur Logiciel & Électronique",
    description: "Portfolio et projets d'un ingénieur fullstack passionné par la tech et l'innovation",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Némo Kardassevitch - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Némo Kardassevitch - Ingénieur Logiciel & Électronique",
    description: "Portfolio et projets d'un ingénieur fullstack passionné par la tech et l'innovation",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.svg", type: "image/svg+xml", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${geistMono.variable} font-mono antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <ConsoleInit />
            <RetroModeProvider />
            <VioletModeProvider />
            <AchievementsProvider />
            <Header />
            {children}
            <EasterEggProvider />
            <SnakeProvider />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

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
  title: "Némo Kardassevitch",
  description: "Portfolio et CV de Némo Kardassevitch - Ingénieur Logiciel & Électronique",
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

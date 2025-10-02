import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Némo Kardassevitch • Développeur Full Stack",
  description: "Portfolio et CV de Némo Kardassevitch - Développeur Full Stack & Étudiant. Passionné par les technologies web modernes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistMono.variable} font-mono antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

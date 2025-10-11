"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { useState } from "react";
import { LogoCompact } from "@/components/ui/logo-compact";
import { LogoCompactAnimated } from "@/components/ui/logo-compact-animated";

export function Footer() {
  const params = useParams();
  const locale = (params.locale as string) || "fr";
  const t = useTranslations("footer");
  const [isLogoHovered, setIsLogoHovered] = useState(false);

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/nkardas",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/nemokardassevitch",
      icon: Linkedin,
    },
    {
      name: "Email",
      href: "mailto:contact@nkardas.fr",
      icon: Mail,
    },
  ];

  const footerLinks = [
    {
      title: t("navigation.title"),
      links: [
        { name: t("navigation.home"), href: `/${locale}` },
        { name: t("navigation.projects"), href: `/${locale}/projects` },
        { name: t("navigation.cv"), href: `/${locale}/cv` },
      ],
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Link
                href={`/${locale}`}
                className="inline-block"
                onMouseEnter={() => setIsLogoHovered(true)}
                onMouseLeave={() => setIsLogoHovered(false)}
              >
                {isLogoHovered ? (
                  <LogoCompactAnimated className="w-12 h-12" />
                ) : (
                  <LogoCompact className="w-12 h-12" />
                )}
              </Link>
              <p className="text-muted-foreground mt-2">
                {t("tagline")}
              </p>
            </motion.div>
          </div>

          {/* Navigation */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="space-y-4"
            >
              <h4 className="font-semibold text-foreground">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-foreground">{t("connect")}</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span>© {currentYear} Némo Kardassevitch.</span>
              <span className="hidden md:inline">•</span>
              <span className="flex items-center gap-1">
                {t("madeWith")} <Heart className="w-4 h-4 text-red-500 fill-red-500" /> {t("using")} Next.js
              </span>
            </div>

            <div className="flex gap-6">
              <Link
                href={`/${locale}/legal`}
                className="hover:text-primary transition-colors"
              >
                {t("legal")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

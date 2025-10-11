"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Search } from "lucide-react";
import { usePathname } from "next/navigation";

export default function RootNotFound() {
  const pathname = usePathname();
  const locale = pathname?.startsWith('/en') ? 'en' : 'fr';

  const content = {
    fr: {
      title: "Page non trouvée",
      description: "Désolé, la page que vous cherchez n'existe pas.",
      home: "Accueil",
      back: "Retour",
      projects: "Projets"
    },
    en: {
      title: "Page not found",
      description: "Sorry, the page you are looking for does not exist.",
      home: "Home",
      back: "Back",
      projects: "Projects"
    }
  };

  const t = content[locale];

  return (
    <div className="min-h-screen flex items-center justify-center px-8 bg-background text-foreground">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <motion.h1
            className="text-9xl font-bold bg-gradient-to-r from-[#8B7AB8] via-[#9F8DCB] to-[#8B7AB8] bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              backgroundSize: "200% 200%",
            }}
          >
            404
          </motion.h1>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-semibold mb-4">{t.title}</h2>
          <p className="text-lg text-muted-foreground">
            {t.description}
          </p>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href={`/${locale}`}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-3 bg-[#8B7AB8] text-white rounded-xl font-medium hover:opacity-90 transition-opacity shadow-lg"
            >
              <Home className="w-5 h-5" />
              {t.home}
            </motion.button>
          </Link>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-8 py-3 border-2 border-border rounded-xl font-medium hover:border-[#8B7AB8]/50 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            {t.back}
          </motion.button>

          <Link href={`/${locale}/projects`}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-3 border-2 border-border rounded-xl font-medium hover:border-[#8B7AB8]/50 transition-colors"
            >
              <Search className="w-5 h-5" />
              {t.projects}
            </motion.button>
          </Link>
        </motion.div>

      </div>
    </div>
  );
}

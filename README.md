# nKardas Portfolio

Site personnel de Némo Kardassevitch - Portfolio et CV interactif bilingue avec design system moderne.

## ✨ Fonctionnalités

- 🌍 **Internationalisation (i18n)** - Français & Anglais avec next-intl
- 🌓 **Dark Mode** - Theme switcher avec next-themes et persistance
- 🎨 **Design System** - Logo animé, palette de couleurs cohérente, typographie Geist
- 📄 **CV Interactif** - Page CV avec téléchargement PDF (FR/EN)
- 🚀 **Portfolio Projets** - Filtres par catégorie, cartes animées
- ✨ **Animations** - Framer Motion pour des transitions fluides
- 📱 **Responsive Design** - Mobile-first avec Tailwind CSS v4
- ⚡ **Performance** - Next.js 15 + React 19 + Turbopack

## 🚀 Stack Technique

- **Framework**: Next.js 15 (App Router) avec Turbopack
- **React**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **i18n**: next-intl
- **Theme**: next-themes
- **Fonts**: Geist Sans & Geist Mono
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📁 Structure du projet

```
portfolio/
├── src/
│   ├── app/
│   │   ├── [locale]/          # Routes internationalisées
│   │   │   ├── page.tsx       # Homepage
│   │   │   ├── cv/            # CV page
│   │   │   ├── projects/      # Portfolio projets
│   │   │   └── legal/         # Mentions légales
│   │   ├── icon.tsx           # Favicon dynamique
│   │   └── apple-icon.tsx     # Apple touch icon
│   ├── components/
│   │   ├── ui/                # Composants UI (logo, theme-toggle, etc.)
│   │   └── layout/            # Header, Footer, Navigation
│   ├── lib/                   # Utilities et helpers
│   └── i18n/                  # Configuration i18n
├── messages/
│   ├── en.json                # Traductions anglais
│   └── fr.json                # Traductions français
├── public/
│   ├── cv/                    # CV JSON et PDF (FR/EN)
│   ├── projects/              # Images des projets
│   ├── favicon.svg            # Favicon SVG
│   └── icon.svg               # Icon haute résolution
└── docs/                      # Documentation Docusaurus
```

## 🎨 Design System

### Logo
- **Logo Compact** (`nK`) - Animations au hover, variantes light/dark
- **Logo Full** (`nKardas`) - Version complète avec animations
- Favicons générés dynamiquement avec Next.js

### Couleurs
- **Primary**: Violet (`#8B7AB8` / `#9F8DCB`)
- **Background**: Adaptatif light/dark
- **Accents**: Cohérents avec la marque

### Typographie
- **Sans**: Geist Sans (texte principal)
- **Mono**: Geist Mono (code, logo)

## 🛠️ Commandes

```bash
# Développement
npm run dev

# Build production
npm run build

# Démarrer en production
npm start

# Linting
npm run lint
```

## 🌐 Internationalisation

Le site supporte le français et l'anglais. Les traductions sont gérées via `next-intl` avec les fichiers dans `messages/`.

Pour ajouter une nouvelle langue :
1. Créer `messages/[locale].json`
2. Ajouter la locale dans `i18n/routing.ts`
3. Mettre à jour le sélecteur de langue

## 📝 CV

Les CV sont stockés en JSON dans `public/cv/` :
- `CV-Nemo-Kardassevitch-FR.json`
- `CV-Nemo-Kardassevitch-EN.json`

Les PDF sont générés et téléchargeables depuis la page `/cv`.

## 📚 Documentation

La documentation de développement complète est disponible dans `/docs` (Docusaurus) :
- Architecture et conventions
- Composants UI
- Design system
- Guide i18n
- Roadmap du projet

## 🚢 Déploiement

Le site est déployé sur Vercel avec :
- Preview deployments pour chaque PR
- Optimisation automatique des images
- Edge Functions pour i18n

---

Créé avec Next.js 15 + React 19 + Turbopack ⚡

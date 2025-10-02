# nKardas Portfolio

Site personnel de Némo Kardassevitch - Portfolio et CV interactif.

## 🚀 Stack Technique

- **Framework**: Next.js 15 (App Router) avec Turbopack
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Fonts**: Geist Sans & Geist Mono
- **Deployment**: Vercel (à venir)

## 📁 Structure du projet

```
portfolio/
├── app/                  # App Router pages
│   ├── layout.tsx       # Layout principal
│   ├── page.tsx         # Page d'accueil
│   └── globals.css      # Styles globaux
├── components/
│   ├── ui/              # Composants UI réutilisables
│   ├── layout/          # Header, Footer, Navigation
│   └── sections/        # Sections de pages (Hero, About, Projects...)
├── lib/                 # Utilities et helpers
├── public/
│   ├── images/          # Images et assets
│   └── fonts/           # Fonts personnalisées
└── styles/              # Styles additionnels
```

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

## 📝 Documentation

La documentation de développement complète est disponible dans `/docs` (Docusaurus).

---

Créé avec Next.js 15 + Turbopack ⚡

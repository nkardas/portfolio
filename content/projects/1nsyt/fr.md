# 1NSYT - Extension Chrome IA pour LinkedIn

## Vue d'ensemble

**1NSYT** (prononcé "One Insight") est une extension Chrome éducative qui génère des **insights IA personnalisés** sur les profils LinkedIn. Le système complet combine scraping web, intelligence artificielle (Mistral AI), cache distribué et conformité GDPR avec dashboard d'administration.

## Contexte et Objectifs

Projet personnel développé pour explorer l'écosystème des extensions Chrome modernes (Manifest V3) tout en maîtrisant une stack fullstack complète. L'objectif pédagogique couvre le développement d'extensions, l'intégration d'IA générative, l'architecture serverless, et l'implémentation d'une conformité GDPR exemplaire.

**⚠️ Projet éducatif uniquement** : Non destiné à un usage commercial, peut violer les conditions d'utilisation de LinkedIn. Démonstration de compétences techniques et de bonnes pratiques (GDPR, documentation, architecture).

## Fonctionnalités Principales

### Extension Chrome

**Détection intelligente** : Hover sur un profil LinkedIn → scraping automatique des données publiques (nom, titre, expérience, compétences) → génération d'insights en temps réel.

**Génération IA personnalisée** :
- Résumé en 2 phrases du parcours professionnel
- 3 conversation starters adaptés au contexte (4 modes : networking, recruiting, jobsearch, sales)
- Cache local (Chrome Storage) et distant (Redis) pour performances optimales

**Conformité GDPR** :
- Flow de consentement explicite avant toute collecte
- Droit d'accès, portabilité (export JSON) et effacement (suppression compte)
- Purge automatique après 1 an
- Privacy policy détaillée

### Backend API (Next.js 15)

**Architecture serverless** sur Vercel avec :
- PostgreSQL (Neon) + Prisma ORM pour persistance type-safe
- Redis (Upstash) avec TTL 7 jours pour cache distribué
- Mistral Small API (15x moins cher que GPT-4, ~$0.0003/insight, EU-based)
- Vercel Cron pour purge automatique GDPR

### Dashboard Admin

**Analytics temps réel** :
- Statistiques (utilisateurs, insights générés, coûts IA, cache hit rate)
- Charts (insights/jour, distribution des modes, évolution)
- Gestion utilisateurs (recherche, filtres, export CSV)
- Insights (liste complète, métadonnées détaillées, export JSON/CSV)
- Analyse des prompts pour optimisation du modèle

## Architecture Technique

### Extension (Manifest V3)

**Content Script** (`linkedin.js`) : Détecte le hover sur profils, scrape les données publiques, communique avec le service worker.

**Service Worker** (`background/service-worker.js`) : Vérifie le cache local, appelle l'API backend si cache miss, stocke les résultats.

**Popup UI** : Affiche les insights avec design épuré, mode switcher, lien vers settings.

### Backend Stack

- **Next.js 15** : API Routes serverless avec TypeScript strict
- **Prisma** : ORM type-safe avec migrations, 3 tables (User, Insight, UserAnalytics)
- **PostgreSQL** : Base de données serverless (Neon) avec pooling
- **Redis** : Cache distribué (Upstash) pour minimiser coûts IA
- **Mistral Small** : IA générative EU (GDPR), $0.2/1M tokens in, $0.6/1M tokens out

### Infrastructure

**Vercel** : Déploiement automatique, serverless functions, Cron jobs
**Neon** : PostgreSQL serverless avec auto-scaling
**Upstash** : Redis serverless sans gestion d'infrastructure

## Technologies Utilisées

**Extension** : Vanilla JavaScript (Manifest V3), Chrome APIs (storage, scripting, tabs)
**Backend** : Next.js 15, TypeScript, Prisma ORM, PostgreSQL, Redis, Mistral AI API
**Admin UI** : Tailwind CSS v4, Recharts (visualisations), export CSV/JSON
**Documentation** : Docusaurus 3 (30+ pages)
**DevOps** : Vercel (CI/CD), Git, ESLint, Prettier

## Défis Techniques

**Manifest V3 & CSP** : Respecter les contraintes strictes de Content Security Policy (pas d'eval, inline scripts limités), utiliser Vanilla JS pour éviter les problèmes de build.

**Cache distribué** : Implémenter une stratégie à 2 niveaux (Chrome Storage local + Redis distant) pour optimiser latence et coûts tout en gérant l'invalidation.

**GDPR compliance** : Concevoir un système complet de gestion des consentements, exports et suppressions avec cascade DB, purge automatique et audit trail.

**Scraping robuste** : Gérer les multiples layouts de profils LinkedIn, éviter les détections anti-bot, parser les données inconsistantes.

**Optimisation coûts IA** : Atteindre >70% de cache hit rate, minimiser tokens avec prompts optimisés, choisir Mistral Small (15x moins cher que GPT-4).

## Résultats

✅ Extension fonctionnelle avec génération d'insights en <2s
✅ Cache hit rate >70% réduisant drastiquement les coûts IA
✅ Conformité GDPR complète (consentement, droits utilisateurs, purge auto)
✅ Dashboard admin avec analytics détaillés et gestion utilisateurs
✅ Documentation technique exhaustive (Docusaurus, 30+ pages)
✅ Architecture serverless scalable et maintenable

**Métriques** :
- ~3000+ lignes de code
- 12 API endpoints
- 6 pages extension + 5 pages admin
- Coût moyen : $0.0003 par insight

## Compétences Développées

- Développement d'extensions Chrome (Manifest V3, Content Scripts, Service Workers)
- Architecture fullstack serverless (Next.js, Vercel, serverless functions)
- Intégration IA générative (Mistral AI, prompt engineering, optimisation coûts)
- Base de données (PostgreSQL, Prisma ORM, migrations)
- Cache distribué (Redis, stratégies d'invalidation)
- Conformité GDPR (consentement, droits utilisateurs, data privacy)
- Dashboard admin (analytics, charts, gestion utilisateurs)
- Documentation technique (Docusaurus, architecture, API reference)
- DevOps (CI/CD Vercel, Cron jobs, monitoring)

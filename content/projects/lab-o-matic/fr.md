# Lab-O-Matic - LIMS Professionnel

## Vue d'ensemble

Application web de gestion pour laboratoire industriel. Suivi des échantillons, planification des analyses et génération automatique de rapports. Mission freelance en production.

## Contexte du Projet

Le projet s'est déroulé en deux phases : un **stage de 2ème année d'ingénieur** de 4 mois en avril 2025 pour développer le MVP et poser les fondations techniques, puis une **mission freelance autonome** démarrée en septembre 2025 pour étendre les fonctionnalités, intégrer les systèmes externes et assurer le déploiement en production.

### Responsabilités
- Analyse des besoins et conception de l'architecture fullstack
- Développement complet backend (NestJS) et frontend (Next.js 15)
- Intégration avec Firebase Auth et services externes
- Déploiement en production et maintenance continue

## Architecture Technique

### Stack Backend
- **NestJS** : Framework Node.js enterprise avec architecture modulaire
- **Prisma ORM** : Gestion PostgreSQL avec type-safety complète
- **Swagger/OpenAPI** : Documentation API et génération automatique de SDK
- **Firebase Admin** : Authentification et gestion des utilisateurs

### Stack Frontend
- **Next.js 15 + React 19** : SSR, Turbopack, optimisations modernes
- **Tailwind CSS v4 + shadcn/ui** : Design system avec composants Radix UI
- **TanStack Query** : Cache intelligent et synchronisation serveur
- **Zustand** : State management léger et performant
- **React Hook Form + Zod** : Validation de formulaires robuste

### Infrastructure
- **Docker** : Containerisation pour environnements reproductibles
- **Google Cloud Platform** : Hébergement avec CI/CD automatisé
- **SDK auto-généré** : Type-safety complète frontend ↔ backend

## Fonctionnalités Principales

### Gestion de Laboratoire
- Suivi complet des échantillons avec traçabilité
- Planification et assignation des analyses en temps réel
- Génération automatique de rapports PDF conformes
- Tableaux de bord avec KPIs et métriques opérationnelles
- Export des données (Excel, CSV)

### Expérience Utilisateur
- Interface intuitive avec mode sombre/clair
- Design responsive (desktop, tablette, mobile)
- Temps de chargement < 2s grâce au SSR et code splitting
- Notifications temps réel et indicateurs de progression

### Sécurité
- Authentification Firebase avec sessions sécurisées
- Validation double (client + serveur) avec Zod
- Type-safety end-to-end (TypeScript)
- Tests unitaires et d'intégration (Jest, NestJS Testing)

## Défis Techniques

**Architecture scalable** : Séparation claire frontend/backend, optimisation des queries DB et stratégie de cache avec TanStack Query pour maintenir les performances.

**Synchronisation des données** : Gestion d'états complexes entre client, serveur et DB avec optimistic updates pour une UI réactive et résolution intelligente des conflits concurrents.

**Intégrations externes** : Firebase Authentication intégré dans NestJS, système d'emails transactionnels (Brevo) avec gestion fine des templates et erreurs.

**Developer Experience** : SDK auto-généré depuis OpenAPI, hot reload instantané (Turbopack), tooling strict (ESLint, Prettier, TypeScript).

## Résultats & Impact

**Déploiement réussi** : Application en production utilisée quotidiennement avec stabilité élevée, monitoring actif et performances optimales.

**Valeur métier** : Automatisation des processus manuels, traçabilité complète, rapports conformes aux standards, architecture évolutive.

**Expérience professionnelle** : Premier projet client de la conception au déploiement, gestion autonome validée par la transition stage → freelance, expertise sur stack moderne production-ready.

## Technologies Utilisées

**Frontend** : Next.js 15, React 19, TypeScript, Tailwind CSS v4, shadcn/ui, TanStack Query, Zustand, React Hook Form, Zod

**Backend** : NestJS, Prisma ORM, PostgreSQL, Swagger/OpenAPI, Firebase Admin, Brevo

**DevOps** : Docker, Google Cloud Platform, CI/CD, Git, npm, ESLint, Prettier

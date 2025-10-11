# nkardas.fr - Portfolio Personnel

## Vue d'ensemble

Site portfolio personnel présentant mes projets et mon parcours professionnel. Développé avec les technologies web modernes en mettant l'accent sur les performances et l'expérience utilisateur.

## Contexte du Projet

Création d'un site portfolio moderne servant de vitrine professionnelle. L'objectif était de concevoir une plateforme intuitive permettant de présenter efficacement mon travail tout en explorant les dernières technologies web, notamment Next.js 15 avec Turbopack et Tailwind CSS v4.

### Responsabilités
- Conception et développement complet du site
- Intégration du système de thème clair/sombre
- Configuration de l'internationalisation FR/EN
- Optimisation des performances et du SEO
- Documentation technique

## Architecture Technique

### Frontend
Le site utilise Next.js 15 avec App Router pour le rendu côté serveur et la génération statique des pages. L'interface est construite avec React 19 et TypeScript pour garantir la fiabilité du code. Tailwind CSS v4 gère le styling avec un système de design cohérent, tandis que Framer Motion assure des animations fluides.

### Internationalisation
L'application supporte nativement le français et l'anglais grâce à next-intl. Le système détecte automatiquement la langue du navigateur et génère des URLs localisées pour un meilleur référencement. Toutes les pages et composants sont traduits, incluant les messages d'erreur et les métadonnées SEO.

### Design System
Un système de thème complet permet de basculer entre mode clair et sombre avec persistance des préférences. Le design s'adapte automatiquement à tous les écrans avec une approche mobile-first. Les logos animés existent en deux variantes selon le contexte d'utilisation.

## Fonctionnalités Principales

### Présentation des Projets
Système complet de gestion des projets avec support Markdown pour le contenu détaillé. Chaque projet dispose d'une page dédiée avec images, descriptions multilingues et métadonnées. Un système de filtrage par catégorie facilite la navigation entre les différents types de projets.

### Formulaire de Contact
Formulaire fonctionnel avec validation côté client et serveur utilisant React Hook Form et Zod. L'envoi d'emails est géré par Resend API avec double notification : confirmation pour le visiteur et alerte pour le propriétaire. Les messages d'erreur sont contextuels et traduits.

### Page CV Interactive
Curriculum vitae complet avec sections pour la formation, l'expérience professionnelle et les compétences techniques. Fonction de téléchargement PDF intégrée pour faciliter le partage. L'affichage s'adapte aux différentes tailles d'écran.

## Défis Techniques

**Animations performantes** : Utilisation avancée de Framer Motion pour créer des animations fluides sans impacter les performances. Optimisation des transitions de page et des animations de layout avec gestion du scroll.

**Tailwind CSS v4 beta** : Adoption précoce de Tailwind v4 avec configuration PostCSS personnalisée et support des variables CSS natives. Adaptation aux changements de syntaxe et résolution des problèmes de compatibilité.

**Internationalisation complète** : Gestion des traductions sur l'ensemble du site avec génération statique des pages localisées. Configuration du middleware next-intl pour le routing automatique.

## Résultats & Impact

**Site professionnel opérationnel** : Portfolio entièrement fonctionnel présentant efficacement les projets et compétences avec une navigation intuitive et un design moderne.

**Performances optimales** : Temps de chargement rapides grâce à la génération statique et au code splitting automatique. Images optimisées au format WebP avec lazy loading.

**Expérience utilisateur soignée** : Interface responsive fonctionnant sur tous les appareils avec animations fluides et feedback visuel pour toutes les interactions.

## Technologies Utilisées

**Frontend** : Next.js 15, React 19, TypeScript, Tailwind CSS v4, Framer Motion

**Internationalisation** : next-intl avec support FR/EN

**Formulaires** : React Hook Form, Zod, Resend API

**Infrastructure** : Vercel serverless, déploiement automatique

**Documentation** : Docusaurus avec versioning Git

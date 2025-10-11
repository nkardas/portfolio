# 1NSYT - Extension Chrome IA pour LinkedIn

## Vue d'ensemble

Extension Chrome utilisant l'intelligence artificielle pour analyser les profils LinkedIn. Application complète avec dashboard administrateur.

## Contexte du Projet

Projet éducatif développé pour maîtriser l'écosystème des extensions Chrome modernes et l'intégration d'intelligence artificielle. L'objectif était de créer une application complète avec dashboard administrateur, conformité RGPD et architecture serverless.

**⚠️ Note** : Projet à vocation pédagogique uniquement, non destiné à un usage commercial.

### Responsabilités
- Conception et développement de l'extension Chrome
- Création de l'API backend et du système de cache
- Intégration de l'IA pour la génération de contenu
- Mise en place de la conformité RGPD
- Développement du dashboard administrateur

## Fonctionnalités Principales

### Extension Chrome
- Détection automatique des profils LinkedIn
- Génération d'insights personnalisés en temps réel
- 4 modes d'analyse (networking, recrutement, recherche d'emploi, vente)
- Système de cache pour performances optimales
- Gestion complète des consentements RGPD

### Dashboard Administrateur
- Statistiques en temps réel
- Graphiques d'utilisation
- Gestion des utilisateurs
- Export des données
- Analyse des coûts

## Architecture Technique

### Extension
- Chrome Manifest V3
- Détection intelligente des profils
- Communication avec l'API backend
- Stockage local pour le cache

### Backend
- API serverless avec Next.js 15
- Base de données PostgreSQL
- Cache Redis distribué
- Intelligence artificielle Mistral AI
- Tâches automatiques planifiées

### Sécurité et Conformité
- Consentement explicite avant collecte
- Droits d'accès et suppression des données
- Export de données personnelles
- Purge automatique après 1 an
- Politique de confidentialité détaillée

## Défis Techniques

**Architecture serverless** : Conception d'une infrastructure scalable sans serveur dédié, optimisation des coûts et gestion du cache distribué.

**Conformité RGPD** : Mise en place complète de la protection des données avec système de consentement, exports et suppressions automatiques.

**Optimisation des coûts** : Stratégie de cache à deux niveaux réduisant les appels à l'IA de plus de 70%.

**Extension Chrome** : Respect des contraintes strictes de sécurité imposées par Chrome.

## Résultats & Impact

**Application fonctionnelle** : Extension opérationnelle avec génération d'insights en moins de 2 secondes et taux de cache supérieur à 70%.

**Compétences techniques** : Maîtrise des extensions Chrome, architecture serverless, intégration d'IA et conformité RGPD.

**Documentation complète** : Plus de 30 pages de documentation technique couvrant l'architecture, les API et les guides d'utilisation.

## Technologies Utilisées

**Extension** : Chrome Manifest V3, JavaScript, Chrome APIs

**Backend** : Next.js 15, PostgreSQL, Redis, Mistral AI

**Interface** : Tailwind CSS, Recharts

**Infrastructure** : Vercel serverless, déploiement automatique

**Documentation** : Docusaurus

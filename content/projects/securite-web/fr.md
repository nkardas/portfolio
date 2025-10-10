# Sécurité Web - Pentesting et Applications Vulnérables

## Vue d'ensemble

Projet pratique de **cybersécurité offensive et défensive** explorant les vulnérabilités web courantes (OWASP Top 10) à travers le pentesting d'applications volontairement vulnérables (DVWA) et le développement d'une application intentionnellement faillible (PyFlaSQL).

## Contexte et Objectifs

Dans le cadre du cours "Sécurité des réseaux informatiques pour le Web et l'IoT", le projet vise à acquérir des compétences pratiques en tests de pénétration éthiques, identification et exploitation de vulnérabilités, et développement sécurisé d'applications web. L'approche pédagogique combine apprentissage théorique et exploitation pratique contrôlée.

## Structure du Projet

### 1. PortSwigger Academy
Plateforme d'apprentissage avec laboratoires pratiques couvrant diverses vulnérabilités web (SQL Injection, XSS, CSRF, etc.).

### 2. Pentesting sur DVWA
Tests de pénétration sur **Damn Vulnerable Web Application** (PHP/MySQL) avec 3 niveaux de difficulté (Low, Medium, High) pour explorer les vulnérabilités et leurs contre-mesures progressives.

### 3. Développement de PyFlaSQL
Création d'une application Flask (Python) intentionnellement vulnérable pour démonstration éducative des failles OWASP Top 10 2021.

## Vulnérabilités Exploitées

### File Inclusion (LFI/RFI)

**Principe** : Inclusion de fichiers non autorisés (locaux ou distants) par manipulation des paramètres d'entrée.

**Exploitation** :
- **Low** : Aucune validation → `../../../../../../etc/passwd`
- **Medium** : Protection `str_replace()` → Contournement `..././..././` (double encodage)
- **High** : Fichier doit commencer par `file` → `file:///etc/passwd`

**Contre-mesure** : Whitelist stricte de fichiers autorisés, validation des chemins, désactivation de `allow_url_include`.

### SQL Injection

**Principe** : Injection de code SQL malveillant via les paramètres non sanitizés.

**Exploitation** :
- **Low** : `1' OR '1'='1` → Affichage de tous les utilisateurs
- **Medium** : Formulaire POST avec `mysqli_real_escape_string()` contournable
- **High** : Session avec protection améliorée

**Techniques** : Union-based, Blind, Time-based, SQLMap pour automatisation

**Contre-mesure** : Requêtes préparées (prepared statements), validation stricte, principe du moindre privilège pour DB.

### Cross-Site Scripting (XSS)

**Principe** : Injection de scripts JavaScript malveillants dans les pages web.

**Types** :
- **Stored XSS** : Script stocké en base de données (ex: commentaires)
- **Reflected XSS** : Script dans l'URL reflété par l'application
- **DOM-based XSS** : Manipulation du DOM côté client

**Exploitation** : `<script>alert(document.cookie)</script>`, vol de cookies, redirection malveillante

**Contre-mesure** : Échappement HTML, Content Security Policy (CSP), HttpOnly cookies.

### Command Injection

**Principe** : Exécution de commandes shell arbitraires via les paramètres d'entrée.

**Exploitation** : `127.0.0.1; cat /etc/passwd`, `127.0.0.1 && whoami`

**Contre-mesure** : Éviter `exec()`, `system()`, validation stricte, sandboxing.

### CSRF (Cross-Site Request Forgery)

**Principe** : Forcer un utilisateur authentifié à exécuter une action non désirée.

**Exploitation** : Formulaire HTML auto-submit vers l'application cible avec actions administratives

**Contre-mesure** : Tokens CSRF uniques par session, validation de l'origine (Referer/Origin headers), SameSite cookies.

## Développement de PyFlaSQL

**Objectif** : Créer une application Flask intentionnellement vulnérable pour démonstration éducative.

**Vulnérabilités implémentées** :
- SQL Injection (requêtes brutes)
- XSS (pas d'échappement HTML)
- CSRF (pas de tokens)
- Injection de commandes
- Gestion insécurisée des sessions

**Apprentissages** : Comprendre comment les vulnérabilités sont introduites dans le code et comment les corriger (versioning sécurisé vs vulnérable).

## Technologies Utilisées

**Pentesting** : DVWA (PHP/MySQL), Burp Suite, SQLMap, PortSwigger Academy
**Développement** : Python, Flask, SQLite
**Outils** : Kali Linux, netcat, reverse shells, serveurs HTTP Python

## Défis et Apprentissages

**Contournement de protections** : Apprendre à identifier et contourner les protections faibles (filtres mal implémentés, validation insuffisante).

**Exploitation éthique** : Maîtriser les techniques offensives dans un cadre contrôlé et légal pour mieux défendre.

**Pensée attaquant** : Développer une mentalité de recherche de failles pour sécuriser ses propres applications.

**Bonnes pratiques** : Comprendre l'importance de la validation côté serveur, des requêtes préparées, de l'échappement HTML et des tokens CSRF.

## Résultats

✅ Exploitation réussie des vulnérabilités OWASP Top 10 sur DVWA (tous niveaux)
✅ Application PyFlaSQL fonctionnelle démontrant les failles courantes
✅ Compréhension approfondie des mécanismes d'attaque et contre-mesures
✅ Compétences en pentesting éthique et développement sécurisé

## Compétences Développées

- Tests de pénétration éthiques (pentesting)
- Exploitation de vulnérabilités web (SQL Injection, XSS, CSRF, LFI/RFI, Command Injection)
- Utilisation d'outils offensifs (Burp Suite, SQLMap)
- Développement d'applications web (Flask, Python)
- Analyse de code et identification de failles de sécurité
- Mise en œuvre de contre-mesures et bonnes pratiques OWASP

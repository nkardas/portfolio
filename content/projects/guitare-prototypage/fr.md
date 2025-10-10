# Guitare d'Entraînement - Capteurs Capacitifs

## Vue d'ensemble

Conception d'une **guitare d'entraînement pour débutants** utilisant des **capteurs capacitifs** pour détecter la pression sur les cordes et frettes. Affichage visuel temps réel via matrice LED pour aider les apprentis guitaristes à placer correctement leurs doigts et appuyer avec la bonne pression.

## Problématique

L'apprentissage de la guitare reste difficile pour les débutants : la pression sur les cordes doit être correcte pour obtenir le bon son, mais un novice sans oreille musicale ne peut pas détecter facilement si la pression est insuffisante. Les notes sonnent faux mais l'erreur est difficile à identifier. **Comment aider un débutant à savoir s'il appuie correctement sur les cordes ?**

## Solution Innovante

### Principe des Capteurs Capacitifs

Les cordes et frettes métalliques de guitare électrique sont utilisées comme **capteurs capacitifs à 1 électrode** : l'électrode positive (5V) est la corde ou frette, l'électrode négative est le doigt du guitariste (masse). Le contact modifie la capacité de manière détectable. En combinant les informations corde + frette, on identifie quelle note est jouée.

### Affichage Visuel

**Matrice LED 4×2** (4 cordes × 2 frettes) : chaque LED représente une case du manche et s'allume quand corde ET frette sont correctement appuyées. Cet affichage localise précisément l'erreur, contrairement à un écran OLED qui afficherait seulement la note.

## Validation Théorique

### Simulation COMSOL Multiphysics

**Cordes (2D)** : Rectangle 0.5mm × 1m (acier plaqué nickel) avec distance doigt-corde variable (0-20mm)
- Contact : **5 nF**
- Sans contact : **~10 pF**
- Variation **×500** → détectable ✅

**Frettes** : Rectangle 20mm × 30mm avec corde et doigt
- Contact : **3 nF**
- Sans contact : **~10 pF**
- Variation détectable ✅

## Architecture du Prototype

### Hardware

**Microcontrôleur** : STM32 Nucleo-L476RG
**Capteurs** : TLC555 (circuit oscillateur pour mesure capacitive)
**Affichage** : Matrice LED 4×2 avec multiplexage
**Prototype** : 4 cordes guitare + 2 frettes pour démonstration

### Mesure Capacitive

**Principe TLC555** : La fréquence d'oscillation dépend de la capacité de la corde/frette. Le timer du STM32 mesure cette fréquence pour déterminer si la corde/frette est touchée.

**Formule** : f = 1.44 / ((R1 + 2×R2) × C)

**Détection** :
- Seuil corde : 4 kHz (contact < 4 kHz)
- Seuil frette : 600 Hz (contact < 600 Hz)

### Traitement et Affichage

Le STM32 lit les fréquences des capteurs cordes et frettes, détermine quelles notes sont jouées, et allume les LEDs correspondantes sur la matrice 4×2. L'algorithme gère le multiplexage pour un affichage stable.

## Technologies Utilisées

**Électronique** : STM32 L476RG, TLC555 (oscillateur), matrice LED 4×2
**Capteurs** : Capteurs capacitifs (cordes et frettes comme électrodes)
**Programmation** : C embarqué, timers, GPIO
**Simulation** : COMSOL Multiphysics (validation capacitive)

## Défis Techniques

**Calibration des seuils** : Déterminer expérimentalement les fréquences de coupure pour distinguer contact/non-contact avec fiabilité malgré les variations de capacité parasites.

**Multiplexage LED** : Implémenter un affichage stable sans scintillement avec contraintes de temps réel et gestion des timers STM32.

**Interférences** : Minimiser le bruit électromagnétique et les capacités parasites qui affectent la précision de mesure.

**Ergonomie** : Adapter les seuils à différents types de doigts (taille, humidité de la peau) et styles de jeu.

## Résultats

✅ Détection capacitive fonctionnelle pour cordes et frettes
✅ Affichage LED temps réel localisant précisément les notes jouées
✅ Validation COMSOL confirmant la faisabilité (variation ×500)
✅ Prototype 4 cordes × 2 frettes démontrant le concept

**Perspectives** : Extension à 6 cordes et plus de frettes, ajout d'un mode d'apprentissage guidé, intégration d'un métronome, et application mobile compagnon.

## Compétences Développées

- Conception de capteurs capacitifs (principe 1 électrode)
- Simulation physique (COMSOL Multiphysics)
- Électronique analogique (TLC555, oscillateurs)
- Programmation embarquée STM32 (timers, GPIO)
- Multiplexage et affichage matriciel
- Prototypage rapide et validation expérimentale

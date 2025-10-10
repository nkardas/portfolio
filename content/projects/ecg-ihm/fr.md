# ECG IHM - Dispositif Électrocardiographique Portable

## Vue d'ensemble

Conception et réalisation d'un **dispositif ECG portable intégré**, de la fabrication des électrodes en salle blanche jusqu'à l'affichage en temps réel. Projet multidisciplinaire couvrant la microfabrication, l'électronique embarquée et le traitement du signal biomédical.

## Contexte et Objectifs

Le projet vise à développer un prototype fonctionnel d'électrocardiogramme portable en maîtrisant l'intégralité de la chaîne de mesure : électrodes personnalisées fabriquées en salle blanche, carte d'acquisition pour le traitement du signal, et interface d'affichage. L'enjeu est de créer des électrodes performantes fonctionnant uniquement à l'eau (sans gel conducteur) et d'assurer une visualisation temps réel du signal ECG.

![Synoptique du système ECG](/projects/ecg-ihm-synoptique.png)

## Architecture du Système

### Électrodes ECG (Microfabrication)

Les électrodes sont fabriquées sur substrat **Kapton flexible** en salle blanche selon un processus en 6 étapes : traitement plasma O₂ pour activation de surface, photolithographie avec résine S1813, évaporation sous vide de Ti/Au (100nm), lift-off, nettoyage et revêtement PEDOT:PSS (polymère conducteur).

**Performances obtenues** :
- Impédance ~7 Ω comparable aux électrodes commerciales
- Fonctionnement à l'eau sans gel conducteur
- Validation par spectroscopie d'impédance (diagramme de Nyquist)

### Carte d'Acquisition (STM32)

La carte intègre des **composants CMS soudés par refusion** avec alimentation ±15V. Le microcontrôleur STM32 capture le signal ECG, applique un **filtrage FIR** (CMSIS-DSP) pour éliminer le bruit, et transmet les données en temps réel via **UART** vers Serial Plot pour visualisation.

**Caractéristiques** :
- Traitement du signal en temps réel
- Filtrage numérique FIR performant
- Communication série pour monitoring

### Interface d'Affichage

Deux approches ont été explorées : une **matrice OLED** multicouche (ITO/HTL/EML/ETL/Al) fabriquée par évaporation thermique avec contrôle d'épaisseur en temps réel, et une solution alternative avec **matrice LED 8×8** commandée par carte de multiplexage pour affichage de texte défilant.

## Technologies Utilisées

**Microfabrication** : Photolithographie, évaporation sous vide Ti/Au, PEDOT:PSS, Kapton flexible
**Électronique** : STM32, CMSIS-DSP, UART, PCB CMS, refusion
**Caractérisation** : Spectroscopie d'impédance, ellipsométrie, oscilloscope

## Défis Techniques

**Microfabrication** : Maîtriser l'uniformité des dépôts en évaporation, gérer l'environnement contrôlé (oxygène, humidité) et assurer la précision du lift-off.

**Électronique** : Résoudre les problèmes de vias défectueuses lors de la soudure CMS, déboguer méthodiquement la carte de multiplexage, et stabiliser le traitement multi-filtres.

**OLED** : Faire face à un pic d'oxygène lors de l'ouverture de chambre (défaut machine) et corriger l'oubli de la couche HBL qui causait des tensions excessives (13-20V).

## Résultats

**Réussites** :
✅ Électrodes performantes sans gel conducteur (impédance ~7 Ω)
✅ Signal ECG capté, filtré et visualisé en temps réel
✅ Affichage LED fonctionnel avec texte défilant

**Limitations** :
⚠️ Second filtre instable
⚠️ Calcul automatique du BPM non implémenté
⚠️ Matrice OLED non exploitable hors environnement neutre

## Compétences Développées

- Techniques de salle blanche (photolithographie, évaporation, lift-off)
- Caractérisation optique (ellipsométrie) et électrique (spectroscopie d'impédance)
- Traitement du signal biomédical en temps réel (filtrage FIR)
- Fabrication et débogage de circuits électroniques (PCB CMS)
- Intégration multidisciplinaire (chimie, physique, électronique, informatique)
- Rigueur scientifique et débogage méthodique

# Serre Connectée IoT - Agriculture Intelligente

## Vue d'ensemble

Conception d'une **serre connectée** utilisant les technologies IoT et LoRaWAN pour optimiser les conditions de croissance agricole tout en minimisant la consommation de ressources. Système complet avec capteurs environnementaux, transmission longue distance, visualisation cloud (Datacake) et automatisation des actionneurs.

## Contexte et Objectifs

L'agriculture fait face à des défis majeurs : impact carbone (10-12% des émissions humaines), raréfaction de l'eau et conditions climatiques difficiles. Le projet répond à la problématique : **comment utiliser l'IoT pour améliorer la productivité des serres tout en optimisant les ressources ?**

Objectifs : surveiller en temps réel les conditions environnementales, transmettre les données vers le cloud pour analyse, et automatiser les actionneurs (chauffage, ventilation, irrigation) selon les besoins réels.

![Synoptique du système](/projects/serre-iot-synoptique.png)

## Architecture du Système

### Capteurs Environnementaux

- **BME680 (I2C)** : Température, humidité, pression, qualité de l'air (IAQ)
- **LM94021 (ADC)** : Température de référence (stabilité)
- Collecte des données toutes les 15 secondes

### Microcontrôleur (Carte OCASS)

**Traitement local** :
- Acquisition multi-capteurs (I2C, ADC, UART)
- Conditionnement et formatage des données
- Contrôle des actionneurs via downlinks LoRaWAN
- Programmation C embarqué avec timers (Timer 6 pour acquisition)

### Transmission LoRaWAN

**Caractéristiques** :
- Portée : 2-5 km en zone urbaine, jusqu'à 15 km en zone rurale
- Faible consommation énergétique (autonomie longue durée)
- Fréquence : 868 MHz (EU), communication bidirectionnelle
- Réseau public The Things Network (TTN)

**Protocole** :
- Activation ABP (Authentication By Personalization)
- Uplinks : Données capteurs en paquets optimisés
- Downlinks : Commandes d'actionneurs depuis le cloud

### Plateforme Cloud (Datacake)

**Visualisation et analyse** :
- Tableaux de bord temps réel avec graphiques personnalisables
- Historique des données pour analyse des tendances
- Alertes configurables (seuils température, humidité)
- API pour intégration avec services tiers

![Dashboard Datacake](/projects/serre-iot-dashboard.png)

## Défis Techniques

**Optimisation LoRaWAN** : Respecter les limites de duty cycle (< 1% du temps d'émission), minimiser la taille des trames pour économiser l'énergie et respecter les contraintes réglementaires.

**Fiabilité des capteurs** : Gérer les erreurs de lecture I2C, calibrer l'ADC pour le LM94021, et valider la cohérence des mesures entre capteurs redondants.

**Automatisation** : Implémenter la logique de contrôle des actionneurs via downlinks LoRaWAN avec gestion des latences réseau et des pertes de paquets.

**Intégration cloud** : Configurer le pipeline TTN → Datacake, formater les payloads (encodeur/décodeur JavaScript), et créer des dashboards pertinents.

## Technologies Utilisées

**Hardware** : BME680, LM94021, carte OCASS, actionneurs (relais)

**Communication** : LoRaWAN (868 MHz), The Things Network (TTN), I2C, ADC, UART

**Programmation** : C embarqué, configuration LoRaWAN

**Cloud** : Datacake (dashboards, alertes, API)

## Compétences Développées

- Systèmes embarqués (C, timers, ADC, I2C, UART)
- Protocoles IoT (LoRaWAN, ABP, gestion duty cycle)
- Architecture cloud (TTN, Datacake, API)
- Capteurs environnementaux et calibration
- Automatisation et contrôle à distance
- Optimisation énergétique pour systèmes autonomes

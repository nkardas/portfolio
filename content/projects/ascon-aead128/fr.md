# ASCON-AEAD128 - Chiffrement Authentifié

## Vue d'ensemble

Implémentation en **SystemVerilog** de l'algorithme **ASCON-AEAD128**, un algorithme de chiffrement authentifié avec données associées (AEAD). Ce projet développe une solution matérielle pour sécuriser les communications en garantissant confidentialité, authenticité et intégrité des messages.

## Contexte et Objectifs

Le projet répond au besoin de communication sécurisée entre deux parties (Alice et Bob) souhaitant échanger des messages confidentiels tout en se protégeant contre l'espionnage et la falsification. ASCON-AEAD128 combine trois garanties de sécurité essentielles :

- **Confidentialité** : Le contenu du message est chiffré et illisible pour un tiers
- **Authenticité** : Un tag d'authentification prouve l'identité de l'expéditeur
- **Intégrité** : Le destinataire peut vérifier que le message n'a pas été altéré

Le destinataire recalcule le tag à partir du message chiffré pour valider simultanément l'identité de l'expéditeur et l'intégrité du contenu.

## Architecture Matérielle

### Phases de l'algorithme

L'implémentation suit les quatre phases standard d'ASCON :

1. **Initialisation** : Configuration avec la clé secrète et le nonce
2. **Données associées** : Traitement des métadonnées non chiffrées
3. **Chiffrement** : Transformation du texte clair en texte chiffré
4. **Finalisation** : Génération du tag d'authentification

### Composants matériels

- **Registres d'état (320 bits)** : Stockage des valeurs intermédiaires de l'algorithme
- **Opérations XOR** : Combinaison cryptographique des données
- **Multiplexeurs** : Routage dynamique des flux de données
- **Module de permutation** : Transformations cryptographiques complexes
- **Machine d'états finis (FSM)** : Orchestration séquentielle des opérations
- **Compteurs** : Gestion des blocs de données et des rondes de permutation

## Défis Techniques

**Synchronisation** : Coordonner les opérations de permutation avec les changements d'état de la FSM pour respecter le timing de l'algorithme.

**Optimisation matérielle** : Équilibrer performance et consommation de ressources FPGA (registres, LUTs, DSPs).

**Validation** : Vérifier la conformité avec les vecteurs de test officiels d'ASCON via chronogrammes et simulations.

## Résultats

✅ Chiffrement et authentification conformes aux spécifications ASCON
✅ Validation réussie avec vecteurs de test officiels
✅ Architecture matérielle optimisée pour FPGA
✅ Chronogrammes confirmant le comportement attendu

## Technologies

**Langage** : SystemVerilog
**Algorithme** : ASCON-AEAD128
**Cible** : FPGA (circuits programmables)
**Outils** : Simulation matérielle, chronogrammes

## Compétences Développées

- Conception de systèmes cryptographiques en hardware
- Modélisation de circuits numériques en SystemVerilog
- Architecture de machines d'états finis complexes
- Algorithmes de chiffrement authentifié (AEAD)
- Validation par simulation et vecteurs de test

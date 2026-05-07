---
sidebar_position: 1
title: Souveraineté Numérique à l'Université de Bangui
description: Étude de cas sur l'implémentation de Matrix comme levier de souveraineté.
---

# La Matrice comme Levier de Souveraineté Numérique

Cet article présente les résultats de nos recherches menées au sein du **Laboratoire LITNA** concernant la communication institutionnelle à l'Université de Bangui (RCA).

## 1. Introduction
Dans le contexte actuel de dépendance aux infrastructures cloud étrangères, la République Centrafricaine, à travers ses institutions académiques, doit reprendre le contrôle de ses données. 

## 2. Problématique
Comment assurer une communication sécurisée et souveraine tout en garantissant l'interopérabilité ?
* Dépendance aux GAFAM.
* Sécurité des échanges académiques.
* Infrastructure réseau locale (utilisation des **TV White Spaces**).

## 3. Architecture Proposée
Nous avons implémenté une solution basée sur le protocole **Matrix** et le serveur **Synapse**, couplée à une gestion d'identité via **Keycloak**.

### Modélisation du trafic (5G MBS)
Dans le cadre de l'optimisation des flux de groupe, nous utilisons des mécanismes inspirés de la 5G :
$$T_{total} = \sum_{i=1}^{n} (D_{i} + P_{i})$$

Où :
- $D_{i}$ représente le délai de distribution.
- $P_{i}$ représente la priorité du paquet multicast.

## 4. Résultats (IRASET 2026)
L'implémentation à l'Université de Bangui a démontré :
1. Une réduction de la latence pour les communications internes.
2. Une maîtrise totale des journaux d'accès (logs).
3. Une résilience accrue face aux coupures d'accès Internet international.

---
*Auteur : Nathan Zoh-Ponguele* *Directeur de thèse : Pr. Samuel Ouya* *Co-directeur : Dr. Edgard Ndassimba*

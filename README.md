# UATM-GASA Formation

Site de présentation de l'Université Africaine de Technologie et de Management (UATM-GASA), réalisé avec React et Vite.

## Fonctionnalités

- Présentation de l'université et de son fondateur.
- Présentation des filières, des grandes étapes de l'établissement et des campus.
- Carte interactive pour localiser les campus.
- Liens directs vers les pages officielles des filières, des admissions et du contact.
- Statistiques animées, avec respect des préférences de réduction des animations du navigateur.
- Mise en page adaptée aux appareils mobiles.

## Prérequis

- Node.js compatible avec Vite 8.
- npm.

## Installation

À la racine du projet, installer les dépendances :

```bash
npm install
```

## Développement

Lancer le serveur local :

```bash
npm run dev
```

Vite affiche l'adresse locale à ouvrir dans le navigateur et recharge automatiquement la page lors des modifications.

## Vérification et production

Construire le site optimisé :

```bash
npm run build
```

Prévisualiser localement la version produite :

```bash
npm run preview
```

Exécuter Oxlint :

```bash
npm run lint
```

## Organisation du projet

```text
src/
  assets/       Images et logo
  components/   Sections et composants React
  data.js       Contenus, coordonnées, liens et statistiques
  index.css     Styles globaux et responsive
  App.jsx       Assemblage des sections du site
  main.jsx      Point d'entrée React
public/         Ressources statiques
index.html      Document HTML et icône du site
```

Les contenus principaux (coordonnées, liens, filières, campus et statistiques) sont centralisés dans `src/data.js`. Le logo de l'université est également utilisé comme icône de l'onglet du navigateur.

## Liens officiels

- Site : [uatm-gasa.com](https://uatm-gasa.com)
- Filières : [uatm-gasa.com/filieres](https://uatm-gasa.com/filieres)
- Admissions : [uatm-gasa.com/admission](https://uatm-gasa.com/admission)
- Contact : [uatm-gasa.com/contact](https://uatm-gasa.com/contact)

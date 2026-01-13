# Ark'Anges - Site Web

Site web de l'association Ark'Anges, une OBNL québécoise d'accompagnement des personnes atteintes de cancer.

## Technologies

- **React 18** avec TypeScript
- **Material-UI (MUI)** pour les composants
- **SASS** avec modules pour les styles
- **React Router** pour la navigation
- **Vite** comme outil de build

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev
```

Le site sera accessible sur `http://localhost:3000`

## Build

```bash
npm run build
```

Les fichiers de production seront générés dans le dossier `dist`.

## Structure du projet

```
src/
├── components/       # Composants réutilisables (Layout, Navigation, Footer)
├── pages/           # Pages du site
│   ├── Home/        # Page d'accueil
│   ├── About/       # À propos
│   ├── Actions/     # Nos actions
│   ├── Events/      # Événements
│   ├── Partners/    # Partenaires
│   ├── Support/     # Nous soutenir
│   └── Contact/     # Contact
└── styles/          # Styles globaux et variables SASS
```

## Caractéristiques

- Design élégant et professionnel
- Palette de couleurs : violet profond, bleu nuit, indigo, avec accents dorés
- Responsive (desktop, tablette, mobile)
- Accessibilité de base
- Animations légères et subtiles
- Architecture modulaire et maintenable

## Notes

- Le système de paiement en ligne n'est pas encore intégré (voir page "Nous soutenir")
- Les formulaires de contact utilisent des alertes pour la démonstration (à remplacer par un système d'envoi d'email réel)

# Cabine

SPA personnel pour composer des tenues sur un avatar SVG, à la manière d'un écran de création de personnage, à partir des pièces réelles du vestiaire.

Site déployé : https://jean-baptiste-paris.github.io/cabine/

## Stack

Vue 3, Vite, TypeScript strict, Vitest, ESLint et Prettier. Hébergement statique sur GitHub Pages, déployé à chaque push sur `main`.

## Commandes

```bash
npm install       # installer les dépendances
npm run dev       # serveur de développement
npm run test      # tests Vitest
npm run lint      # ESLint et vérification Prettier
npm run format    # formater le code avec Prettier
npm run build     # vérification des types et build de production dans dist/
```

## Arborescence

- `src/models` : types et fabriques (`BaseModel`, `Piece`, `Tenue`)
- `src/config` : constantes métier (emplacements, gabarits, teintes, états de port)
- `src/components`, `src/composables` : à venir

# CLAUDE.md

Ce fichier guide Claude Code dans ce dépôt. Il prend le pas sur le `CLAUDE.md` du dossier parent, qui concerne un vault Obsidian sans rapport.

## Projet

Cabine : SPA personnel pour composer des tenues sur un avatar SVG, façon écran de création de personnage. Utilisateur unique, interface en français, mobile d'abord. Déployé sur https://jean-baptiste-paris.github.io/cabine/ à chaque push sur `main`.

## Stack (décidée)

- Vue 3 + Vite + TypeScript strict. État partagé par un simple `reactive()`, pas de Pinia.
- Pas de bibliothèque d'UI ni de framework CSS : variables CSS (`src/styles/tokens.css`) et styles scopés dans les composants.
- Vitest, ESLint, Prettier. `npm run lint` vérifie aussi le formatage.
- Ne pas ajouter de dépendance sans accord.

## Sources de vérité

1. **Les spécifications font foi** : note de cadrage, user stories, spécifications techniques, backlog. Elles fixent le modèle de données, les noms de champs, les listes fermées, le format CSV et le périmètre des lots.
2. **Le dossier de design** (`docs/design/`) porte les intentions d'interface : couleurs d'interface, typographie, composants, écrans, comportements, calques et règles de visibilité de l'avatar. Les maquettes `*.dc.html` sont des références visuelles, pas du code à copier.

Quand le design contredit les specs, on suit les specs. Divergences connues :

| Sujet   | On suit (specs)                                                                                                        | On ignore (design)                                                   |
| ------- | ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| Teintes | 14 teintes des specs (dont kaki, gris, noir, blanc), clé = nom (`'vert forêt'`), définies dans `src/config/teintes.ts` | Moutarde, bleu pétrole, gris flanelle, anthracite ; clés sans accent |
| Pièce   | Champ `gabarit`                                                                                                        | Champ `forme`                                                        |
| Tenue   | `pieces` : id de pièce ou `null` ; `etats { haut_rentre, maille_rentree, manches, col }`                               | `pieces` par code ; `port { topOut, knitOut, rolled, colOpen }`      |
| CSV     | Tags séparés par `\|` ; l'import ne fait que créer des pièces                                                          | Tags séparés par `,` ; mise à jour si le code existe                 |
| Stack   | Vue 3 + TS                                                                                                             | Correspondance Django, HTMX, Alpine, Tailwind du § 7                 |

Les hex des teintes communes aux deux listes reprennent les valeurs du design.

## Conventions

- Code et commentaires en français, noms de domaine en français (`Piece`, `Tenue`, `emplacement`, `teinte`).
- Types dérivés des constantes `as const` de `src/config`, sans duplication.
- Cibles tactiles d'au moins 44 px ; une teinte est toujours accompagnée de son nom.
- Ne pas pousser ni modifier le dépôt GitHub sans accord explicite.

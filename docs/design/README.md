# Cabine — dossier de design

Export de la maquette validée, direction **D « Salon × Atelier »**, au 19 octobre 2026. Ce dossier est prévu pour être déposé dans la doc du projet (par exemple `docs/design/`) et lu par un humain comme par Claude Code.

| Fichier | Contenu | Quand le lire |
|---|---|---|
| `DESIGN.md` | Spécification complète : tokens, composants, 9 écrans, règles de l'avatar, données induites, accessibilité, questions ouvertes | Toujours en premier |
| `tokens.json` | Couleurs, 14 teintes, 12 emplacements (préfixe de code, hauteur de zone), polices, rayons, tailles | Pour générer des constantes ou des fixtures |
| `tokens.css` | Les mêmes tokens en bloc `@theme` (Tailwind v4) ; remplacer `@theme` par `:root` sans Tailwind | Pour l'intégration CSS |
| `avatar.svg` | Silhouette de référence en calques nommés (`id`, `data-slot`, `data-variant`) | Pour implémenter le rendu de l'avatar |
| `maquettes/*.dc.html` | Sources des maquettes : HTML stylé + logique de référence (non exécutable seul, voir DESIGN.md § 7) | Pour retrouver une valeur exacte ou un comportement |

Correspondance des maquettes :

| Fichier | Écran |
|---|---|
| `D-mobile.dc.html`, `D-tablette.dc.html` | Composition |
| `Catalogue.dc.html` | Catalogue |
| `Fiche-piece.dc.html` | Fiche pièce |
| `Import-CSV.dc.html`, `Import-rapport.dc.html` | Import CSV (fichier, puis rapport) |
| `Tenues.dc.html` | Tenues sauvegardées |
| `Filtres.dc.html` | Filtres |
| `Synchro.dc.html`, `Conflit.dc.html` | Synchronisation et conflit |
| `Avatar.dc.html` | Composant avatar |

## Extrait suggéré pour `CLAUDE.md`

```markdown
## Design
- Spécification UI : docs/design/DESIGN.md (source de vérité pour couleurs, typographie, écrans et comportements).
- Tokens : docs/design/tokens.css (Tailwind v4 @theme) et docs/design/tokens.json.
- Avatar : docs/design/avatar.svg — respecter l'ordre des calques et les règles de visibilité de DESIGN.md §4.
- Les fichiers docs/design/maquettes/*.dc.html sont des références visuelles, pas du code à copier tel quel.
- Interface en français ; cibles tactiles ≥ 44 px ; aucune couleur sans libellé.
```

Maquette en ligne (canevas interactif, mode Play) : https://claude.ai/artifact/972687e9-54ff-4dfd-9624-126fe6d8340e

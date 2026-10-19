# Cabine — Spécification UI

Direction retenue : **D « Salon × Atelier »** (structure « écran de création de personnage » de la direction B, palette chaude et claire de la direction A).

- Application personnelle : un seul utilisateur, aucun compte, interface en français.
- Mobile d'abord : maquettes en 390 × 844. L'écran Composition existe aussi en tablette (maquette 1180 × 820, à partir de 768 px).
- Hors périmètre : motifs de tissu, photos de vêtements, alertes de style, comptes utilisateurs.

Fichiers associés : `tokens.json` / `tokens.css` (valeurs), `avatar.svg` (silhouette en calques), `maquettes/` (sources des maquettes, voir § 7).

---

## 1. Tokens

### 1.1 Couleurs d'interface

| Token | Hex | Usage |
|---|---|---|
| `paper` | `#F3EBDD` | Fond de page |
| `surface` | `#FBF6EC` | Cartes, tiroir, panneaux, champs |
| `surface-sunk` | `#EADFCB` | Élément actif (onglet du rail tablette, entrée de menu), tags posés |
| `halo` | `#EDE3D1` | Disque derrière l'avatar |
| `plinth` | `#DDD0BA` | Ellipse-socle sous l'avatar |
| `rule` | `#DDD0BA` | Bordures de cartes, séparateurs de sections |
| `rule-soft` | `#E6DBC6` | Séparateurs entre rangées d'une même carte |
| `border` | `#CDBEA5` | Bordures de champs, boutons secondaires, puces |
| `border-dashed` | `#A8977C` | Contours pointillés (ajout, ouvrir les filtres, zone de dépôt) |
| `ink` | `#2A211C` | Texte principal ; fond du segment actif |
| `muted` | `#6B5D52` | Texte secondaire (≥ 4,5:1 sur `paper` et `surface`) |
| `accent` | `#6E1F2B` | Bordeaux : CTA, flèches, onglet actif, titres d'écran, sélection |
| `accent-hover` | `#4F141E` | Survol des liens |
| `on-accent` | `#FBF6EC` | Texte sur `accent` ou `ink` |
| `success-bg` / `success` | `#E3E6D6` / `#2F4A3A` | Synchro à jour, conflit résolu, badge « Nouvelle » |
| `danger-bg` / `danger-border` | `#F1DEDF` / `#D9B9BD` | Conflit, erreur, lignes rejetées (texte en `accent`) |
| `disabled-bg` | `#E6DBC6` | CTA désactivé (texte `muted`) |
| `scrim` | `rgba(42,33,28,.42)` | Voile derrière tiroir, menu, dialogue |
| `mannequin` | `#E4D9C5` | Peau neutre de l'avatar |
| `mannequin-line` | `#2A211C` | Contour de l'avatar |

### 1.2 Teintes des pièces (liste fermée de 14)

Ordre d'affichage dans les sélecteurs (grille 7 × 2 dans la fiche, 4 colonnes dans Filtres) :

| id | Libellé | Hex |
|---|---|---|
| `ecru` | Écru | `#E9DFC7` |
| `camel` | Camel | `#B5884F` |
| `moutarde` | Moutarde | `#C29A3A` |
| `terracotta` | Terracotta | `#C0704F` |
| `rouille` | Rouille | `#A4532B` |
| `bordeaux` | Bordeaux | `#6E2230` |
| `marron` | Marron | `#6B4A33` |
| `sauge` | Sauge | `#9AA58A` |
| `olive` | Olive | `#6F6B3A` |
| `vert-foret` | Vert forêt | `#2F4A3A` |
| `bleu-petrole` | Bleu pétrole | `#2E5560` |
| `marine` | Marine | `#26324A` |
| `gris-flanelle` | Gris flanelle | `#8A8780` |
| `anthracite` | Anthracite | `#3A3A3C` |

Une pastille de teinte a toujours une bordure 1 px `muted`, pour que l'écru reste visible sur le fond. « Aucun » = pastille transparente à bordure **pointillée**.

### 1.3 Typographie (Google Fonts)

| Rôle | Police | Réglages |
|---|---|---|
| Titre d'écran | Libre Caslon Text 700 | 15 px (17–18 px pour le logo « CABINE »), capitales, `letter-spacing: .28em` (.32em pour le logo), couleur `accent` |
| Sous-titre d'en-tête | Libre Caslon Text 400 italique | 12 px, `muted` |
| Nom de pièce | Libre Caslon Text 400 | 16 px (liste), 19 px (carte focus), 24 px (tablette) |
| Titre de section | Libre Caslon Text 700 | 13 px, capitales, `.2em`, `accent` |
| Interface (boutons, champs, texte) | Figtree 400/500/600 | 13–15 px ; CTA 15 px 600 |
| Libellé de champ / surtitre | Figtree 600 | 11 px, capitales, `.14em`, `muted` |
| Extraits CSV uniquement | IBM Plex Mono 400 | 11–11,5 px |

### 1.4 Dimensions

- Gouttière : 16 px en mobile, 20 px en tablette.
- Cibles tactiles ≥ 44 × 44 px partout.
- Hauteurs : CTA 52, champ 48, bouton secondaire 44–48, puce 34–38, segment 32–36, rangée de liste 60, flèche d'avatar 52 (mobile) / 56 (tablette).
- Rayons : champ et bouton 12, carte 14–16, tiroir 22 (haut seulement), dialogue 18, puce en pilule, segment 8–10.
- Icônes : trait 1,5–1,8 px, viewBox 24, `currentColor`, extrémités arrondies. Aucune emoji.

---

## 2. Composants

**En-tête d'écran.** Grille `52px | 1fr | 52px`, padding `12px 8px 0`.
- Gauche : retour (chevron) ou menu.
- Centre : TITRE en capitales espacées + sous-titre italique (compteur, étape ou contexte).
- Droite : action ponctuelle (ajouter, effacer) ou vide.

**Boutons.**
- Primaire : fond `accent`, texte `on-accent`, h52, r12.
- Secondaire : bordure `border`, texte `ink`.
- Destructif secondaire : bordure `border`, texte `accent`.
- Texte : `accent` 600, sans fond.

**Puce de filtre actif.** Pilule h34, fond `surface`, bordure `border`, pastille de teinte 10 px optionnelle, libellé, croix. Le tap sur la puce entière retire le filtre (`aria-label="Retirer le filtre X"`).

**Bascule de tag (Filtres).** Pilule h38. Inactive : bordure `border`, texte `ink`. Active : fond `ink`, texte `on-accent`.

**Contrôle d'état de port.** Contour `rule` r10, libellé en capitales `muted`, puis 2 boutons. Le segment actif a le fond `ink` et le texte `on-accent`.

**Tiroir (mobile).**
- Bottom sheet `surface`, r22 en haut, poignée 40 × 4 `border`.
- En-tête : `‹` LIBELLÉ (Caslon, capitales, `accent`) + « N pièces » `›` `✕`. Les flèches font défiler la pièce de l'emplacement sans fermer.
- Grille de 3 colonnes de vignettes (pastille 30, nom, code), fond `paper`. La première vignette est **Aucun**. Vignette sélectionnée : bordure 1,5 px `accent`.
- Toucher une vignette sélectionne la pièce **et ferme** le tiroir. Toucher le voile ou `✕` ferme.

**Panneau latéral (tablette).** Même contenu en 2 colonnes, 360 px à droite, bordure gauche `rule`. Il ne se ferme pas quand on sélectionne. S'il est replié, il affiche un état vide (« Panneau replié »). Le CTA « Sauvegarder la tenue » est fixé en bas du panneau.

**Carte de liste.** Fond `surface`, bordure `rule`, r14 ; rangées séparées par `rule-soft`.

**Dialogue de confirmation.** `role="alertdialog"`, centré, r18, titre Caslon 20, texte `muted`, boutons [Annuler (secondaire)] [Action (primaire)].

**Menu latéral (mobile).** Panneau gauche de 290 px, fond `surface`, voile à droite. Entrées : Composition (active), Catalogue, Tenues sauvegardées, Filtres | séparateur | Import CSV, Synchronisation (avec l'état à droite).

---

## 3. Écrans

Navigation mobile : depuis Composition, le menu ouvre le menu latéral, le cintre ouvre Tenues, le bouton filtre ouvre Filtres. Les autres écrans ont un retour en haut à gauche.

### 3.1 Composition (`maquettes/D-mobile.dc.html`, `maquettes/D-tablette.dc.html`)

**Mobile, de haut en bas :**
1. En-tête : menu | « CABINE » + « Composition · N pièces » | cintre (→ Tenues).
2. Rangée défilante des filtres actifs + bouton filtre rond pointillé (→ Filtres).
3. Scène (h 380) : disque `halo` Ø300, socle `plinth`, avatar 166 × 380 centré, flèches ‹ › rondes (bordure `accent`, fond `surface`) de part et d'autre.
4. Carte de la pièce focus : pastille 40, « VESTE · 2 / 12 », nom (Caslon), code, bouton « Parcourir » (→ tiroir).
5. États de port, en rangée défilante (seulement ceux qui s'appliquent).
6. Barre d'onglets des 12 emplacements (pastille + libellé). Un séparateur vertical isole les 6 accessoires. Onglet actif : texte et soulignement 2 px `accent`.
7. CTA « Sauvegarder la tenue ».

**Modèle de focus.**
- Un seul emplacement est actif à la fois (`focus`, par défaut `veste`).
- Les flèches font défiler **la pièce de l'emplacement focus** dans la liste `[Aucun, pièces correspondant aux filtres…]`, en boucle.
- Toucher un onglet change le focus.

**Position des flèches.** Elles suivent la zone du corps de l'emplacement focus. Hauteur en coordonnées du viewBox de l'avatar (0–460) :

| manteau | veste | maille | haut | pantalon | chaussures | écharpe | ceinture | cravate | montre | lunettes | chaussettes |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 205 | 168 | 150 | 122 | 300 | 422 | 92 | 210 | 130 | 198 | 36 | 410 |

- `y = Y × hauteurAvatar / 460`.
- `top flèche = clamp(0, y − taille/2, hauteurScène − taille)`.
- Une ligne horizontale pointillée `accent` à 50 % d'opacité est tracée à `y`, entre les flèches. Animer le déplacement (≈ 200 ms ease-out) si `prefers-reduced-motion` le permet.

**États de port.** N'afficher que ceux qui s'appliquent :

| État | Valeurs | Affiché si |
|---|---|---|
| `topOut` | Haut : Rentré / Sorti | un haut est porté |
| `knitOut` | Maille : Rentrée / Sortie (par défaut : Sortie) | une maille est portée |
| `rolled` | Manches : Déroulées / Relevées | un haut est porté **et** ni veste ni manteau |
| `colOpen` | Col : Ouvert / Fermé (par défaut : Ouvert) | un haut est porté **et** pas de cravate |

Un état masqué n'agit pas sur l'avatar : les manches sont déroulées sous une veste, le col est fermé avec une cravate.

**Sauvegarde.** Le libellé passe à « Tenue sauvegardée » jusqu'à la modification suivante. Le choix du nom est à définir (voir § 8).

**Tablette (≥ 768 px).**
- Rail vertical de 220 px à gauche : logo, les 12 emplacements avec le nom de la pièce portée, un intertitre « Accessoires ». Actif : bordure gauche 2 px `accent` + fond `surface-sunk`.
- Centre : puces de filtres, scène (disque Ø420, avatar 244 × 560, flèches 56 à 44 px des bords), légende centrée « VESTE · 2 / 12 · VES-02 » + nom en Caslon 24, états de port.
- Droite : panneau latéral (§ 2). Choisir un emplacement dans le rail le met en focus **et** ouvre le panneau.

### 3.2 Catalogue (`maquettes/Catalogue.dc.html`)

- En-tête : retour | « CATALOGUE » + « N pièces · 12 emplacements » | bouton rond `accent` « + » (→ fiche vide).
- Champ de recherche (nom, code, matière).
- Rangée de raccourcis par emplacement avec compteur (ancres vers les sections).
- Sections par emplacement : titre de section + « N pièces » ; carte de liste. Rangée : pastille 32, nom (Caslon 16), « CODE · matière », chevron. La rangée entière mène à la fiche.
- Pied : [Importer un CSV] [Filtres].

### 3.3 Fiche pièce (`maquettes/Fiche-piece.dc.html`)

- En-tête : retour | « FICHE PIÈCE » + « Emplacement · CODE ».
- Carte d'aperçu : pastille 56 de la teinte courante, nom, « emplacement · forme · teinte ».
- Champs dans l'ordre :
  - **Nom** (texte).
  - **Emplacement** et **Forme**, sur une rangée de 2 colonnes (listes déroulantes ; les options de Forme dépendent de l'emplacement).
  - **Teinte** (grille 7 × 2 de pastilles 32 dans des cibles 44, `aria-pressed`). Sélection : anneau `0 0 0 2px paper, 0 0 0 4px accent`. Le nom de la teinte apparaît dans la légende.
  - **Matière** (texte).
  - **Tags** : boîte avec les tags posés (puce `surface-sunk` + croix) et un champ « Ajouter un tag ». Dessous, « *Suggestions* » : des puces pointillées « + tag » qui ajoutent au tap. Les tags déjà posés n'y figurent pas.
  - **Notes** (zone de texte, 3 lignes).
  - **Code**, avec l'aide « Proposé d'après l'emplacement, modifiable. Doit rester unique. »
- Pied : [Supprimer] (secondaire, texte `accent`) [Enregistrer] (primaire).

### 3.4 Import CSV, étape 1 (`maquettes/Import-CSV.dc.html`)

- Sous-titre : « Étape 1 sur 2 · Fichier ».
- État vide : zone pointillée, icône fichier, « Choisir un fichier .csv », bouton « Parcourir les fichiers ». CTA « Lancer l'import » désactivé.
- Fichier choisi : carte avec le nom, « N lignes détectées · séparateur « ; » », bouton retirer, aperçu des 3 premières lignes (mono). CTA actif.
- Bloc « Format attendu » toujours visible (voir § 5).

### 3.5 Import CSV, rapport (`maquettes/Import-rapport.dc.html`)

- Deux tuiles : **N pièces importées** (« x nouvelles · y mises à jour ») et **N lignes rejetées** (bordure `danger-border`, chiffre `accent`).
- « Lignes rejetées » : rangées avec « L. n° », la raison en `accent` 600 et la ligne brute en mono tronquée.
- « Pièces importées » : liste repliable (4 rangées puis « Tout voir (N) »). Chaque rangée a un badge « Nouvelle » (`success-bg`) ou « Mise à jour » (`surface-sunk`).
- Pied : [Réimporter] [Voir le catalogue].

### 3.6 Tenues sauvegardées (`maquettes/Tenues.dc.html`)

- Carte par tenue :
  - Mini-avatar 64 × 148 sur fond `halo`.
  - Nom (Caslon 18), « N pièces · M accessoires », bande de pastilles des pièces principales.
  - Actions : [Rappeler] (primaire, recharge la tenue dans Composition), [crayon] renommer, [corbeille] supprimer (icône en `accent`).
- Renommer : la carte passe en édition (champ à bordure `accent`, [Valider] [Annuler]).
- Supprimer : dialogue « Supprimer « Nom » ? ». Texte : la tenue est retirée de cet appareil puis des autres à la prochaine synchro ; les pièces restent au catalogue.
- État vide : « Aucune tenue sauvegardée » + rappel du bouton de sauvegarde.

### 3.7 Filtres (`maquettes/Filtres.dc.html`)

- En-tête : fermer (✕) | « FILTRES » + « N filtres actifs » | « Effacer ».
- **Teintes** : grille de 4 colonnes de bascules (pastille 30 + nom, `aria-pressed`). Active : fond `surface`, bordure `accent`, coche ronde `accent` sur la pastille.
- **Tags** : pilules-bascules (§ 2).
- Règle affichée : à l'intérieur d'un groupe, OU (au moins une valeur) ; entre les groupes, ET (implicite).
- CTA : « Appliquer N filtres » (ou « Afficher toutes les pièces » s'il n'y en a aucun) → retour Composition. Les filtres restreignent les pièces proposées par les flèches et le tiroir.

### 3.8 Synchronisation (`maquettes/Synchro.dc.html`)

- Carte d'état (`role="status"`) : icône ronde, titre (Caslon 19), détail.

| État | Titre | Détail | Couleurs |
|---|---|---|---|
| `ajour` | À jour | Dernière synchronisation + heure | `success-bg` / `success` |
| `encours` | Synchronisation… | Envoi des modifications de cet appareil | `surface-sunk` / `ink` ; CTA désactivé |
| `conflit` | Conflit à résoudre | Données modifiées ici et ailleurs + bouton « Résoudre le conflit » (→ 3.9) | `danger-bg` / `accent` |
| `erreur` | Échec de la synchronisation | Cause lisible (ex. jeton refusé, 401) | `danger-bg` / `accent` |

- Section « Connexion » :
  - **Dépôt de données** (`propriétaire/dépôt`).
  - **Jeton GitHub** : champ mot de passe avec bouton œil afficher/masquer. Aide : jeton à accès fin, limité au dépôt, permission « Contents » en lecture et écriture, stocké uniquement sur l'appareil.
  - Boutons [Enregistrer] [Oublier le jeton].
- CTA : « Synchroniser maintenant ».

### 3.9 Conflit (`maquettes/Conflit.dc.html`)

- Phrase d'explication avec la date de la dernière synchro commune.
- **Une colonne** : deux cartes empilées, « Cet appareil » puis « Version distante ». Chaque carte contient :
  - date de modification ;
  - deux mini-tuiles : nombre de pièces, nombre de tenues ;
  - « Modifications » : liste avec un marqueur `+` ajout (`success`), `~` modification (`surface-sunk`), `−` suppression (`danger`) ;
  - bouton « Garder celle-ci ».
- Carte choisie : bordure 2 px `accent`, bouton plein « Choisie ».
- CTA du bas : désactivé tant que rien n'est choisi, puis « Garder « cet appareil » » ou « Garder « version distante » ».
- Mention : la version écartée reste dans l'historique du dépôt.
- Après confirmation : écran « Conflit résolu » + phrase selon le choix + [Terminer] (→ Synchronisation).
- Pas de fusion fine : on garde une version entière.

---

## 4. Avatar (`avatar.svg`, `maquettes/Avatar.dc.html`)

- SVG `viewBox="0 0 200 460"` : homme grand, épaules larges (≈ 108 sur 200 de large au niveau des épaules), mannequin neutre sans visage ni cheveux.
- Vêtements en aplats unis, sans motif. Chaque forme a un contour de 1–1,3 px `mannequin-line` à l'échelle mobile (≈ 1,6 px pour les vignettes de 64 px de large).
- Mettre `vector-effect: non-scaling-stroke` si l'on veut un trait constant.

**Ordre des calques (du fond vers l'avant).** Chaque calque est un `<g id>` dans `avatar.svg` :

`arms` (peau) → `hands` → `neck` → `head` → `socks` (ou `ankles` en peau si pas de chaussettes) → `pants` → `shoes` → `top` (torse + manches) → `top-hem-out` → `belt-under` → `knit` (torse + manches + empiècement en V couleur du haut, ou peau s'il n'y a pas de haut) → `belt-over` → `collar` → `neck-open` → `tie` → `jacket` → `coat` → `scarf` → `glasses` → `watch`

**Règles de visibilité et de variantes.**
- Calque d'un emplacement « Aucun » : masqué.
- `top-hem-out` : haut porté et `topOut`. Le pan dépasse de 4 px sous une maille sortie (détail voulu).
- `belt-under` : ceinture et pas de maille et pas (haut sorti).
- `belt-over` : ceinture, maille portée, maille rentrée.
- Maille : chemin long (ourlet y≈232) si sortie, court (ourlet y=214) si rentrée.
- Manches du haut et de la maille : variante relevée (arrêt y≈168, avant-bras visibles) si `rolled`.
- `neck-open` (triangle de peau) : haut porté, `colOpen`, pas de cravate.
- `tie` : chemin court (s'arrête dans le V) si une maille est portée, long sinon.

Tous les chemins exacts sont dans `avatar.svg`. Les variantes sont fournies en `<path>` alternatifs, avec `data-variant`.

Le champ **Forme** de la fiche est prévu pour choisir, plus tard, entre plusieurs tracés par emplacement (col V, gilet, parka…). Les maquettes n'utilisent qu'une forme par emplacement.

---

## 5. Données impliquées par l'interface

**Emplacements** (ordre canonique) avec préfixe de code :

| id | Libellé | Préfixe | Groupe |
|---|---|---|---|
| `manteau` | Manteau | MAN | principal |
| `veste` | Veste | VES | principal |
| `maille` | Maille | MAI | principal |
| `haut` | Haut | HAU | principal |
| `pantalon` | Pantalon | PAN | principal |
| `chaussures` | Chaussures | CHA | principal |
| `echarpe` | Écharpe | ECH | accessoire |
| `ceinture` | Ceinture | CEI | accessoire |
| `cravate` | Cravate | CRA | accessoire |
| `montre` | Montre | MON | accessoire |
| `lunettes` | Lunettes | LUN | accessoire |
| `chaussettes` | Chaussettes | CHT | accessoire |

**Pièce.**
- `code` : unique, `PRÉFIXE-NN`, proposé automatiquement, modifiable.
- `nom` (obligatoire), `emplacement` (obligatoire), `forme`.
- `teinte` : id de la § 1.2.
- `matiere`, `tags` (liste de chaînes en minuscules), `notes`.

**Tenue.**
- `id`, `nom`.
- `pieces` : un code ou `null` pour chacun des 12 emplacements.
- `port` : `{ topOut, knitOut, rolled, colOpen }`.

**CSV.**
- En-tête : `code;nom;emplacement;forme;teinte;matiere;tags;notes`, séparateur `;`, tags séparés par des virgules.
- Seuls `nom` et `emplacement` sont obligatoires.
- Si le `code` existe déjà dans le catalogue, la ligne met la pièce à jour ; sinon elle crée une pièce.
- Raisons de rejet affichées :
  - teinte hors de la liste ;
  - emplacement manquant ou inconnu ;
  - code présent deux fois dans le fichier.
- Le rapport donne le numéro de ligne (en-tête = ligne 1).

**Synchro.**
- Un dépôt GitHub et un jeton à accès fin, stockés en local uniquement.
- États : `ajour | encours | conflit | erreur`.
- Conflit : on garde une version entière.

---

## 6. Accessibilité (appliquée dans les maquettes)

- Vrais `<button>`, `<a href>`, `<input>` avec `<label>`.
- `aria-label` sur toutes les icônes seules (ex. « Veste : pièce suivante », « Retirer le filtre Laine »).
- Bascules et pastilles avec `aria-pressed`. Carte d'état de synchro en `role="status"`. Dialogue de suppression en `role="alertdialog"`.
- Contrastes : `ink` et `muted` passent 4,5:1 sur `paper` et `surface` ; `on-accent` sur `accent` > 9:1.
- Une teinte est toujours accompagnée de son nom (vignette, légende, filtre). La couleur n'est jamais le seul indice.
- SVG de l'avatar : `role="img"` + `aria-label` qui liste les emplacements portés.
- Cibles ≥ 44 px.

---

## 7. À propos des maquettes (`maquettes/*.dc.html`)

Ces fichiers viennent d'un éditeur de design et ne sont **pas exécutables tels quels** : ils dépendent d'un runtime (`support.js`) qui n'est pas fourni. Ils restent lisibles comme référence :

- **Le balisage dans `<x-dc>`** est du HTML avec styles en ligne : mise en page, espacements, couleurs exactes. `{{chemin}}` est une interpolation. `<sc-for list="{{x}}" as="i">` est une boucle, `<sc-if value="{{c}}">` une condition. `<dc-import name="Avatar" …>` monte `Avatar.dc.html` avec des props.
- **Le script `class Component extends DCLogic`** contient la logique de référence : catalogue d'exemple, défilement circulaire des pièces (`step`), conditions des états de port, construction du tiroir, positionnement des flèches.

Correspondance suggérée pour une pile Django + HTMX + Alpine.js + Tailwind :
- `state` et `renderVals()` → composant `x-data` Alpine.
- `onClick` → `@click`.
- `sc-for` → `<template x-for>` ou boucle de template Django.
- `sc-if` → `x-show` / `{% if %}`.

Les données d'exemple (pièces, tenues, chiffres du rapport d'import et du conflit) sont fictives.

---

## 8. Questions ouvertes

1. **Sauvegarde d'une tenue :** demander un nom tout de suite (petit dialogue) ou nommer automatiquement puis renommer dans Tenues ?
2. **Formes :** liste des formes par emplacement et tracés SVG correspondants.
3. **Bordeaux :** la teinte `#6E2230` et l'accent d'interface `#6E1F2B` sont presque identiques. Faut-il les unifier, ou garder un écart volontaire ?
4. **Tablette :** seul l'écran Composition est décliné. Les autres écrans doivent-ils simplement être centrés (largeur max ≈ 560 px) ?
5. **Tri** du catalogue et des tenues (alphabétique, date, code ?).

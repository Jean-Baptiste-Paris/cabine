/** Emplacements de la silhouette : vêtements puis accessoires. */
export const EMPLACEMENTS = [
  'haut',
  'maille',
  'veste',
  'manteau',
  'pantalon',
  'chaussures',
  'echarpe',
  'ceinture',
  'cravate',
  'montre',
  'lunettes',
  'chaussettes',
] as const

export type Emplacement = (typeof EMPLACEMENTS)[number]

/**
 * Gabarits SVG disponibles pour chaque emplacement.
 * Le premier de chaque liste sert de gabarit par défaut.
 */
export const GABARITS = {
  haut: ['chemise', 't-shirt'],
  maille: ['pull'],
  veste: ['veste'],
  manteau: ['manteau'],
  pantalon: ['pantalon'],
  chaussures: ['chaussures'],
  echarpe: ['echarpe'],
  ceinture: ['ceinture'],
  cravate: ['cravate'],
  montre: ['montre'],
  lunettes: ['lunettes'],
  chaussettes: ['chaussettes'],
} as const satisfies Record<Emplacement, readonly [string, ...string[]]>

/** Gabarits autorisés pour un emplacement donné. */
export type GabaritDe<E extends Emplacement> = (typeof GABARITS)[E][number]

/** Tous les gabarits, tous emplacements confondus. */
export type Gabarit = GabaritDe<Emplacement>

export function estEmplacement(valeur: string): valeur is Emplacement {
  return (EMPLACEMENTS as readonly string[]).includes(valeur)
}

export function estGabaritDe<E extends Emplacement>(
  emplacement: E,
  valeur: string,
): valeur is GabaritDe<E> {
  return (GABARITS[emplacement] as readonly string[]).includes(valeur)
}

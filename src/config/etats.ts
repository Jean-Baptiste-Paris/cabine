/** Variantes des états de port d'une tenue. */
export const MANCHES = ['deroulees', 'relevees'] as const
export type Manches = (typeof MANCHES)[number]

export const COLS = ['ouvert', 'ferme'] as const
export type Col = (typeof COLS)[number]

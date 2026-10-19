/**
 * Liste fermée des teintes, calquée sur la palette.
 * Chaque teinte est définie une seule fois ici ; le rendu et les filtres s'y réfèrent par son nom.
 */
export const TEINTES = [
  { nom: 'bordeaux', hex: '#6E2230' },
  { nom: 'rouille', hex: '#A4532B' },
  { nom: 'camel', hex: '#B5884F' },
  { nom: 'écru', hex: '#E9DFC7' },
  { nom: 'olive', hex: '#6F6B3A' },
  { nom: 'sauge', hex: '#9AA58A' },
  { nom: 'terracotta', hex: '#C0704F' },
  { nom: 'marine', hex: '#26324A' },
  { nom: 'vert forêt', hex: '#2F4A3A' },
  { nom: 'marron', hex: '#6B4A33' },
  { nom: 'kaki', hex: '#7B7453' },
  { nom: 'gris', hex: '#7E7E7B' },
  { nom: 'noir', hex: '#1C1C1C' },
  { nom: 'blanc', hex: '#F7F7F3' },
] as const satisfies readonly { nom: string; hex: `#${string}` }[]

export type Teinte = (typeof TEINTES)[number]['nom']

export function estTeinte(valeur: string): valeur is Teinte {
  return TEINTES.some((teinte) => teinte.nom === valeur)
}

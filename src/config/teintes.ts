/**
 * Liste fermée des teintes, calquée sur la palette.
 * Chaque teinte est définie une seule fois ici ; le rendu et les filtres s'y réfèrent par son nom.
 */
export const TEINTES = [
  { nom: 'bordeaux', hex: '#6B2333' },
  { nom: 'rouille', hex: '#9C4A26' },
  { nom: 'camel', hex: '#B8895B' },
  { nom: 'écru', hex: '#EDE6D6' },
  { nom: 'olive', hex: '#6B6A3A' },
  { nom: 'sauge', hex: '#9DA98D' },
  { nom: 'terracotta', hex: '#B5603F' },
  { nom: 'marine', hex: '#1F2A44' },
  { nom: 'vert forêt', hex: '#2F4A37' },
  { nom: 'marron', hex: '#5A3C2B' },
  { nom: 'kaki', hex: '#7B7453' },
  { nom: 'gris', hex: '#7E7E7B' },
  { nom: 'noir', hex: '#1C1C1C' },
  { nom: 'blanc', hex: '#F7F7F3' },
] as const satisfies readonly { nom: string; hex: `#${string}` }[]

export type Teinte = (typeof TEINTES)[number]['nom']

export function estTeinte(valeur: string): valeur is Teinte {
  return TEINTES.some((teinte) => teinte.nom === valeur)
}

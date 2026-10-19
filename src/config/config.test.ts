import { describe, expect, it } from 'vitest'
import {
  EMPLACEMENTS,
  estEmplacement,
  estGabaritDe,
  estTeinte,
  GABARITS,
  TEINTES,
  type Emplacement,
} from '.'

describe('emplacements et gabarits', () => {
  it('liste les 12 emplacements', () => {
    expect(EMPLACEMENTS).toHaveLength(12)
    expect(EMPLACEMENTS.every(estEmplacement)).toBe(true)
    expect(estEmplacement('chapeau')).toBe(false)
  })

  it('définit au moins un gabarit pour chaque emplacement, et seulement pour eux', () => {
    expect(Object.keys(GABARITS).sort()).toEqual([...EMPLACEMENTS].sort())
    for (const emplacement of EMPLACEMENTS) {
      expect(GABARITS[emplacement].length).toBeGreaterThan(0)
    }
  })

  it('rattache chaque gabarit à son emplacement', () => {
    for (const emplacement of EMPLACEMENTS) {
      for (const gabarit of GABARITS[emplacement]) {
        expect(estGabaritDe(emplacement, gabarit)).toBe(true)
      }
    }
  })

  it("n'accepte pas le gabarit d'un autre emplacement", () => {
    expect(estGabaritDe('veste', 'pull')).toBe(false)
    expect(estGabaritDe('maille', 'chemise')).toBe(false)
  })

  it('suit la règle : haut à deux gabarits, maille en pull, les autres au nom de leur emplacement', () => {
    expect(GABARITS.haut).toEqual(['chemise', 't-shirt'])
    expect(GABARITS.maille).toEqual(['pull'])
    const autres = EMPLACEMENTS.filter(
      (e): e is Exclude<Emplacement, 'haut' | 'maille'> => e !== 'haut' && e !== 'maille',
    )
    for (const emplacement of autres) {
      expect(GABARITS[emplacement]).toEqual([emplacement])
    }
  })
})

describe('teintes', () => {
  it('liste 14 teintes aux noms uniques', () => {
    expect(TEINTES).toHaveLength(14)
    expect(new Set(TEINTES.map((t) => t.nom)).size).toBe(14)
  })

  it('donne un code hex à 6 chiffres pour chaque teinte', () => {
    for (const teinte of TEINTES) {
      expect(teinte.hex).toMatch(/^#[0-9A-F]{6}$/i)
    }
  })

  it('reconnaît les teintes de la liste', () => {
    expect(estTeinte('vert forêt')).toBe(true)
    expect(estTeinte('fuchsia')).toBe(false)
  })
})

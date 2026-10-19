import { describe, expect, it } from 'vitest'
import { EMPLACEMENTS } from '../config'
import { ETATS_PAR_DEFAUT, newTenue } from './tenue'

describe('newTenue', () => {
  it('crée une tenue sans nom, avec tous les emplacements vides', () => {
    const tenue = newTenue()
    expect(tenue.nom).toBe('')
    expect(Object.keys(tenue.pieces).sort()).toEqual([...EMPLACEMENTS].sort())
    expect(Object.values(tenue.pieces).every((id) => id === null)).toBe(true)
  })

  it('pose les états de port par défaut', () => {
    expect(newTenue().etats).toEqual({
      haut_rentre: true,
      maille_rentree: false,
      manches: 'deroulees',
      col: 'ouvert',
    })
  })

  it('complète les pièces et états partiels fournis', () => {
    const tenue = newTenue({
      nom: 'Lundi',
      pieces: { haut: 'id-chemise' },
      etats: { col: 'ferme' },
    })
    expect(tenue.nom).toBe('Lundi')
    expect(tenue.pieces.haut).toBe('id-chemise')
    expect(tenue.pieces.veste).toBeNull()
    expect(tenue.etats).toEqual({ ...ETATS_PAR_DEFAUT, col: 'ferme' })
  })

  it('ne partage pas les états par défaut entre deux tenues', () => {
    const a = newTenue()
    a.etats.manches = 'relevees'
    expect(newTenue().etats.manches).toBe('deroulees')
  })
})

import { describe, expect, it } from 'vitest'
import { newPiece, TEINTE_PAR_DEFAUT } from './piece'

describe('newPiece', () => {
  it('crée par défaut une chemise sans nom ni tags', () => {
    const piece = newPiece()
    expect(piece).toMatchObject({
      nom: '',
      emplacement: 'haut',
      gabarit: 'chemise',
      teinte: TEINTE_PAR_DEFAUT,
      tags: [],
    })
    expect(piece.code).toBeUndefined()
    expect(piece.matiere).toBeUndefined()
    expect(piece.notes).toBeUndefined()
    expect(piece.updated_at).toBe(piece.created_at)
  })

  it("prend le premier gabarit de l'emplacement si aucun n'est donné", () => {
    expect(newPiece({ emplacement: 'maille' }).gabarit).toBe('pull')
    expect(newPiece({ emplacement: 'ceinture' }).gabarit).toBe('ceinture')
  })

  it('reprend les champs fournis', () => {
    const piece = newPiece({
      code: 'HAU-01',
      nom: 'Chemise Gant',
      emplacement: 'haut',
      gabarit: 't-shirt',
      teinte: 'kaki',
      matiere: 'coton',
      tags: ['mi-saison'],
    })
    expect(piece).toMatchObject({
      code: 'HAU-01',
      nom: 'Chemise Gant',
      gabarit: 't-shirt',
      teinte: 'kaki',
      matiere: 'coton',
      tags: ['mi-saison'],
    })
  })

  it('copie la liste de tags plutôt que de la partager', () => {
    const tags = ['hiver']
    const piece = newPiece({ tags })
    tags.push('automne')
    expect(piece.tags).toEqual(['hiver'])
  })

  it('refuse à la compilation un gabarit étranger à son emplacement', () => {
    // @ts-expect-error : « pull » n'est pas un gabarit de « veste »
    newPiece({ emplacement: 'veste', gabarit: 'pull' })
  })
})

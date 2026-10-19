import { GABARITS, type Emplacement, type GabaritDe, type Teinte } from '../config'
import { newBase, type BaseModel } from './base'

/** Paire emplacement / gabarit, où le gabarit appartient forcément à l'emplacement. */
export type EmplacementEtGabarit<E extends Emplacement = Emplacement> = {
  [K in E]: { emplacement: K; gabarit: GabaritDe<K> }
}[E]

export interface ChampsPiece {
  /** Code catalogue du Cabinet, unique s'il est renseigné. */
  code?: string
  nom: string
  teinte: Teinte
  matiere?: string
  tags: string[]
  notes?: string
}

export type Piece<E extends Emplacement = Emplacement> = BaseModel &
  ChampsPiece &
  EmplacementEtGabarit<E>

export type InitPiece<E extends Emplacement> = Partial<ChampsPiece> & {
  emplacement?: E
  gabarit?: GabaritDe<E>
}

export const TEINTE_PAR_DEFAUT: Teinte = 'écru'

/**
 * Crée une pièce. Sans argument : une chemise écrue sans nom.
 * Sans gabarit précisé, on prend le premier gabarit de l'emplacement.
 */
export function newPiece<E extends Emplacement = 'haut'>(init: InitPiece<E> = {}): Piece<E> {
  const { emplacement = 'haut' as E, gabarit, tags = [], ...reste } = init
  const paire = {
    emplacement,
    gabarit: gabarit ?? GABARITS[emplacement][0],
  } as EmplacementEtGabarit<E>
  return {
    ...newBase(),
    nom: '',
    teinte: TEINTE_PAR_DEFAUT,
    ...reste,
    tags: [...tags],
    ...paire,
  }
}

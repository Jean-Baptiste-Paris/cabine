import { EMPLACEMENTS, type Col, type Emplacement, type Manches } from '../config'
import { newBase, type BaseModel } from './base'

/** Une entrée par emplacement : id de la pièce portée, ou null si l'emplacement est vide. */
export type PiecesTenue = Record<Emplacement, string | null>

/** Toujours enregistrés, même quand la pièce concernée est absente. */
export interface EtatsPort {
  haut_rentre: boolean
  maille_rentree: boolean
  manches: Manches
  col: Col
}

export interface Tenue extends BaseModel {
  nom: string
  pieces: PiecesTenue
  etats: EtatsPort
}

export interface InitTenue {
  nom?: string
  pieces?: Partial<PiecesTenue>
  etats?: Partial<EtatsPort>
}

export const ETATS_PAR_DEFAUT: Readonly<EtatsPort> = {
  haut_rentre: true,
  maille_rentree: false,
  manches: 'deroulees',
  col: 'ouvert',
}

export function piecesVides(): PiecesTenue {
  return Object.fromEntries(EMPLACEMENTS.map((e) => [e, null])) as PiecesTenue
}

/** Crée une tenue. Sans argument : tenue sans nom (la composition en cours), tous emplacements vides. */
export function newTenue(init: InitTenue = {}): Tenue {
  return {
    ...newBase(),
    nom: init.nom ?? '',
    pieces: { ...piecesVides(), ...init.pieces },
    etats: { ...ETATS_PAR_DEFAUT, ...init.etats },
  }
}

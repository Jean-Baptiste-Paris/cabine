/**
 * Champs systématiques portés par toutes les entités.
 * Les dates sont des chaînes ISO 8601 en UTC (format de Date.prototype.toISOString).
 */
export interface BaseModel {
  id: string
  created_at: string
  updated_at: string
  // Prévus pour le multi-utilisateur, hors MVP :
  // created_by: string
  // updated_by: string
}

function maintenant(): string {
  return new Date().toISOString()
}

/** Crée les champs de base d'une nouvelle entité. */
export function newBase(): BaseModel {
  const now = maintenant()
  return { id: crypto.randomUUID(), created_at: now, updated_at: now }
}

/** Marque l'entité comme modifiée. Mute l'objet, pour rester compatible avec reactive(). */
export function touch<T extends BaseModel>(entity: T): T {
  entity.updated_at = maintenant()
  return entity
}

import { afterEach, describe, expect, it, vi } from 'vitest'
import { newBase, touch } from './base'

const UUID_V4 = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
const ISO_UTC = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/

afterEach(() => {
  vi.useRealTimers()
})

describe('newBase', () => {
  it('génère un UUID v4 valide', () => {
    expect(newBase().id).toMatch(UUID_V4)
  })

  it('génère un id différent à chaque appel', () => {
    expect(newBase().id).not.toBe(newBase().id)
  })

  it('pose des dates ISO 8601 UTC, égales à la création', () => {
    const base = newBase()
    expect(base.created_at).toMatch(ISO_UTC)
    expect(base.updated_at).toBe(base.created_at)
  })
})

describe('touch', () => {
  it('fait avancer updated_at sans toucher created_at', () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-10-19T10:00:00.000Z'))
    const base = newBase()

    vi.setSystemTime(new Date('2026-10-19T10:05:00.000Z'))
    const retour = touch(base)

    expect(retour).toBe(base)
    expect(base.created_at).toBe('2026-10-19T10:00:00.000Z')
    expect(base.updated_at).toBe('2026-10-19T10:05:00.000Z')
  })
})

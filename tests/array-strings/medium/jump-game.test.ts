import { describe, it, expect } from 'bun:test'
import fn from '@challenges/array-strings/medium/jump-game'

describe('55 - Jump game', () => {
  it('a', () => {
    expect(fn([2, 3, 1, 1, 4])).toBe(true)
  })
  it('b', () => {
    expect(fn([3, 2, 1, 0, 4])).toBe(false)
  })
  it('c', () => {
    expect(fn([0])).toBe(true)
  })
  it('d', () => {
    expect(fn([0, 2, 3])).toBe(false)
  })
})

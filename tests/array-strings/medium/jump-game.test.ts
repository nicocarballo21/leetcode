import { describe, test, expect } from 'vitest'
import fn from '@challenges/array-strings/medium/jump-game'

describe('55 - Jump game', () => {
  test('a', () => {
    expect(fn([2, 3, 1, 1, 4])).toBe(true)
  })
  test('b', () => {
    expect(fn([3, 2, 1, 0, 4])).toBe(false)
  })
  test('c', () => {
    expect(fn([0])).toBe(true)
  })
  test('d', () => {
    expect(fn([0, 2, 3])).toBe(false)
  })
})

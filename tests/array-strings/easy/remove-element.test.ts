import fn from '@challenges/array-strings/easy/remove-element'
import { describe, test, expect } from 'vitest'

describe('27 - Remove element', () => {
  test('a', () => {
    expect(fn([3, 2, 2, 3], 3)).toBe(2)
  })
  test('b', () => {
    expect(fn([0, 1, 2, 2, 3, 0, 4, 2], 2)).toBe(5)
  })
  test('c', () => {
    expect(fn([2], 3)).toBe(1)
  })
})

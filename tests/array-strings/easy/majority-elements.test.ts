import fn from '@challenges/array-strings/easy/majority-element'
import { describe, test, expect } from 'vitest'

describe('169 - Majority element', () => {
  test('a', () => {
    expect(fn([3, 2, 3])).toBe(3)
  })
  test('b', () => {
    expect(fn([2, 2, 1, 1, 1, 2, 2])).toBe(2)
  })
})

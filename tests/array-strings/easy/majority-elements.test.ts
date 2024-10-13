import fn from '@challenges/array-strings/easy/majority-element'
import { describe, it, expect } from 'bun:test'

describe('169 - Majority element', () => {
  it('a', () => {
    expect(fn([3, 2, 3])).toBe(3)
  })
  it('b', () => {
    expect(fn([2, 2, 1, 1, 1, 2, 2])).toBe(2)
  })
})

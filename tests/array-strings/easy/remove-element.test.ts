import fn from '@challenges/array-strings/easy/remove-element'
import { describe, it, expect } from 'bun:test'

describe('27 - Remove element', () => {
  it('a', () => {
    expect(fn([3, 2, 2, 3], 3)).toBe(2)
  })
  it('b', () => {
    expect(fn([0, 1, 2, 2, 3, 0, 4, 2], 2)).toBe(5)
  })
  it('c', () => {
    expect(fn([2], 3)).toBe(1)
  })
})

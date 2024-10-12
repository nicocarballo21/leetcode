import fn from '@challenges/array-strings/easy/remove-duplicates-from-sorted-array'
import { describe, it, expect } from 'bun:test'

describe('26 - Remove duplicates from sorted array', () => {
  it('a', () => {
    expect(fn([1, 1, 2])).toBe(2)
  })
  it('b', () => {
    expect(fn([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toBe(5)
  })
})

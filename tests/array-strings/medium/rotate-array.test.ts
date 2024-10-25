import fn from '@challenges/array-strings/medium/rotate-array'
import { describe, it, expect } from 'bun:test'

describe('189 - Rotate array', () => {
  it('a', () => {
    expect(fn([1, 2, 3, 4, 5, 6, 7], 3)).toStrictEqual([5, 6, 7, 1, 2, 3, 4])
  })
  it('b', () => {
    expect(fn([-1, -100, 3, 99], 2)).toStrictEqual([3, 99, -1, -100])
  })
})

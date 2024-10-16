import fn from '@challenges/array-strings/medium/h-index'
import { describe, it, expect } from 'bun:test'

describe('274 - H-index', () => {
  it('a', () => {
    expect(fn([3, 0, 6, 1, 5])).toBe(3)
  })
  it('b', () => {
    expect(fn([1, 3, 1])).toBe(1)
  })
  it('c', () => {
    expect(fn([0])).toBe(0)
  })
  it('d', () => {
    expect(fn([100])).toBe(1)
  })
})

import fn from '@challenges/array-strings/medium/h-index'
import { describe, test, expect } from 'vitest'

describe('274 - H-index', () => {
  test('a', () => {
    expect(fn([3, 0, 6, 1, 5])).toBe(3)
  })
  test('b', () => {
    expect(fn([1, 3, 1])).toBe(1)
  })
  test('c', () => {
    expect(fn([0])).toBe(0)
  })
  test('d', () => {
    expect(fn([100])).toBe(1)
  })
})

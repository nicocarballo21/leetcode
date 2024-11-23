import { describe, test, expect } from 'vitest'
import fn from '@challenges/array-strings/easy/longest-common-prefix'

describe('14 - Longest common prefix', () => {
  test('a', () => {
    expect(fn(['flower', 'flow', 'flight'])).toBe('fl')
  })
  test('b', () => {
    expect(fn(['dog', 'racecar', 'car'])).toBe('')
  })
})

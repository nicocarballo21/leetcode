import { describe, it, expect } from 'bun:test'
import fn from '@challenges/array-strings/easy/longest-common-prefix'

describe('14 - Longest common prefix', () => {
  it('a', () => {
    expect(fn(['flower', 'flow', 'flight'])).toBe('fl')
  })
  it('b', () => {
    expect(fn(['dog', 'racecar', 'car'])).toBe('')
  })
})

import fn from '@challenges/array-strings/medium/reverse-words-in-a-string'
import { describe, it, expect } from 'bun:test'

describe('151- Reverse words in a string', () => {
  it('a', () => {
    expect(fn('the sky is blue')).toBe('blue is sky the')
  })
  it('b', () => {
    expect(fn('  hello world  ')).toBe('world hello')
  })
  it('c', () => {
    expect(fn('a good   example')).toBe('example good a')
  })
})

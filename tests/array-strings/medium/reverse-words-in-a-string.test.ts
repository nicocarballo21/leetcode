import fn from '@challenges/array-strings/medium/reverse-words-in-a-string'
import { describe, test, expect } from 'vitest'

describe('151- Reverse words in a string', () => {
  test('a', () => {
    expect(fn('the sky is blue')).toBe('blue is sky the')
  })
  test('b', () => {
    expect(fn('  hello world  ')).toBe('world hello')
  })
  test('c', () => {
    expect(fn('a good   example')).toBe('example good a')
  })
})

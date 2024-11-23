import fn from '@challenges/array-strings/easy/length-of-last-word'
import { describe, test, expect } from 'vitest'

describe('58. Length of Last Word', () => {
  test('a', () => {
    expect(fn('Hello World')).toEqual(5)
  })
  test('b', () => {
    expect(fn('   fly me   to   the moon  ')).toEqual(4)
  })
  test('c', () => {
    expect(fn('luffy is still joyboy')).toEqual(6)
  })
  test('d', () => {
    expect(fn('cat dog house     but   ph  y  phone    ')).toEqual(5)
  })
})

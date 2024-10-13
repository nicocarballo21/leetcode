import fn from '@challenges/array-strings/easy/length-of-last-word'
import { describe, it, expect } from 'bun:test'

describe('58. Length of Last Word', () => {
  it('a', () => {
    expect(fn('Hello World')).toEqual(5)
  })
  it('b', () => {
    expect(fn('   fly me   to   the moon  ')).toEqual(4)
  })
  it('c', () => {
    expect(fn('luffy is still joyboy')).toEqual(6)
  })
  it('d', () => {
    expect(fn('cat dog house     but   ph  y  phone    ')).toEqual(5)
  })
})

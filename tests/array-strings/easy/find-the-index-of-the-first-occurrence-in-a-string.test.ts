import fn from '@challenges/array-strings/easy/find-the-index-of-the-first-occurrence-in-a-string'
import { describe, it, expect } from 'bun:test'

describe('28. Find the Index of the First Occurrence in a String', () => {
  it('a', () => {
    expect(fn('sadbutsad', 'sad')).toEqual(0)
  })
  it('b', () => {
    expect(fn('leetcode', 'leeto')).toEqual(-1)
  })
  it('c', () => {
    expect(fn('leetcode', 'code')).toEqual(4)
  })
  it('d', () => {
    expect(fn('aaa', 'aaaa')).toEqual(-1)
  })
  it('e', () => {
    expect(fn('mississippi', 'issip')).toEqual(4)
  })
})

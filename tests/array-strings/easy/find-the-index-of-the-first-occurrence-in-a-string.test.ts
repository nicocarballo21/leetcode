import fn from '@challenges/array-strings/easy/find-the-index-of-the-first-occurrence-in-a-string'
import { describe, expect, test } from 'vitest'

describe('28. Find the Index of the First Occurrence in a String', () => {
  test('a', () => {
    expect(fn('sadbutsad', 'sad')).toEqual(0)
  })
  test('b', () => {
    expect(fn('leetcode', 'leeto')).toEqual(-1)
  })
  test('c', () => {
    expect(fn('leetcode', 'code')).toEqual(4)
  })
  test('d', () => {
    expect(fn('aaa', 'aaaa')).toEqual(-1)
  })
  test('e', () => {
    expect(fn('mississippi', 'issip')).toEqual(4)
  })
})

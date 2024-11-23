import fn from '@challenges/array-strings/easy/merge-sorted-array'
import { describe, test, expect } from 'vitest'

describe('Merge sorted array', () => {
  test('a', () => {
    const nums1 = [1, 2, 3, 0, 0, 0]
    const m = 3
    const nums2 = [2, 5, 6]
    const n = 3
    expect(fn(nums1, m, nums2, n)).toEqual([1, 2, 2, 3, 5, 6])
  })
  test('b', () => {
    const nums1 = [1]
    const m = 1
    const nums2: number[] = []
    const n = 0
    expect(fn(nums1, m, nums2, n)).toEqual([1])
  })
  test('c', () => {
    const nums1 = [0]
    const m = 0
    const nums2: number[] = [1]
    const n = 1
    expect(fn(nums1, m, nums2, n)).toEqual([1])
  })
})

import { describe, test, expect } from 'vitest'

import { LRUCache } from '@challenges/backend/LRU-cache'

describe('LRU-cache', () => {
  test('Leet code test case', () => {
    const cache = new LRUCache(2)

    cache.put(1, 1)
    cache.put(2, 2)
    expect(cache.get(1)).toBe(1)
    cache.put(3, 3)
    expect(cache.get(2)).toBe(-1)
    expect(cache.get(3)).toBe(3)
    cache.put(4, 4)
    expect(cache.get(1)).toBe(-1)
    expect(cache.get(3)).toBe(3)
    expect(cache.get(4)).toBe(4)
  })

  test('should return -1 for a non-existent key', () => {
    const cache = new LRUCache(2)

    expect(cache.get(1)).toBe(-1)
  })

  test('should add and retrieve a value', () => {
    const cache = new LRUCache(2)

    cache.put(1, 1)
    expect(cache.get(1)).toBe(1)
  })

  test('should evict the least recently used item', () => {
    const cache = new LRUCache(2)

    cache.put(1, 1)
    cache.put(2, 2)
    expect(cache.get(1)).toBe(1)
    cache.put(3, 3)
    expect(cache.get(2)).toBe(-1)
    expect(cache.get(3)).toBe(3)
  })

  test('should update the value of an existing key', () => {
    const cache = new LRUCache(2)

    cache.put(1, 1)
    cache.put(1, 10)
    expect(cache.get(1)).toBe(10)
  })

  test('should move the accessed key to the most recent position', () => {
    const cache = new LRUCache(2)

    cache.put(1, 1)
    cache.put(2, 2)
    cache.get(1)
    cache.put(3, 3)
    expect(cache.get(2)).toBe(-1)
    expect(cache.get(1)).toBe(1)
    expect(cache.get(3)).toBe(3)
  })
})

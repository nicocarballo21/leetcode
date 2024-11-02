
/* eslint @typescript-eslint/no-dynamic-delete: 0 */

class Node {
  // We define a Node class to represent the elements of the cache.
  // This will contain the key, value, and pointers to the next and previous nodes.

  key: number
  value: number
  next: Node | null
  prev: Node | null

  constructor (key: number, value: number) {
    this.key = key
    this.value = value
    this.next = null
    this.prev = null
  }
}

export class LRUCache {
  // We define the LRUCache class, which will contain the cache's capacity, length, head, tail, and cache.
  // The cache will be a dictionary that will store the key and the node.

  // LRU Head = Least Recently Used - Head of double linked list
  // MRU Tail = Most Recently Used - Tail of double linked list

  capacity: number
  length: number
  head: Node | null
  tail: Node | null
  cache: Record<number, Node>

  constructor (capacity: number) {
    this.capacity = capacity
    this.length = 0
    this.head = null
    this.tail = null
    this.cache = {}
  }

  get (key: number): number {
    // For the get first we get the node from the cache.
    const node = this.cache[key]

    // If the node is not found, we return -1.
    if (node === undefined) return -1

    // Then we remove the node from the list.
    this.remove(node)
    // We update the cache and add the node to the end of the list.
    this.cache[key] = this.push(key, node.value)

    // finally, we return the value of the node.
    return node.value
  }

  put (key: number, value: number): void {
    // We check if the node is already in the cache.
    const node = this.cache[key]

    // If the node is found, we remove it from the list. We have to update it.
    if (node === null) {
      this.remove(node)
    }

    // We update the cache and we push the node to tail of the list.
    this.cache[key] = this.push(key, value)

    // We check if the length of the cache is greater than the capacity.
    if (this.length > this.capacity) {
      if (this.head === null) return

      delete this.cache[this.head.key] // We remove the head from the cache.
      this.remove(this.head) // We remove the head from the list.
    }
  }

  remove (node: Node | undefined): void {
    if (node == null) return

    const { prev, next } = node

    // Here are the 4 cases to remove a node from the list.

    if (prev === null && next === null) {
      // If the node is the only one in the list.
      this.head = null
      this.tail = null
    } else if (prev == null) {
      // If the node is the head.
      this.head = next
      if (next === null) return
      next.prev = null
    } else if (next == null) {
      // If the node is the tail.
      this.tail = prev
      prev.next = null
    } else {
      // If the node is in the middle of the list.
      prev.next = next
      next.prev = prev
    }

    this.length--
  }

  push (key: number, value: number): Node {
    // We create a new node with the key and value.
    const newNode = new Node(key, value)

    // We check if the list is empty, if it is, we set the head and tail to the new node.
    if (this.tail == null) {
      this.tail = newNode
      this.head = newNode
    } else {
      // If the list is not empty, we add the new node to the end of the list.
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }

    this.length++

    return newNode
  }
}

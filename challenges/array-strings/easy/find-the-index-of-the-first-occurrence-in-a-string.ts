// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:
// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.

// Example 2:
// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.

export default function solution (haystack: string, needle: string): number {
  // We handle this early case where the haystack word has less characters that needle
  if (haystack.length < needle.length) return -1

  for (let i = 0; i < haystack.length; i++) {
    // Now we basically start getting a part of the string build based on current index
    // and the length of needle word + 1 and we check if that word is equal to the needle
    // if that is the case, so we return the current index which means the start of the needle word.
    if (haystack.slice(i, i + needle.length) === needle) {
      return i
    }
  }
  return -1
}


// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Explanation:
// We use a for loop and a while to iterate over the strings.
// The first long prefix will be the entire first world from here we
// need to scan the other strings and start removing characters.

// So pref is current string at index 0 and len is the current pref lenght.
// We use a for loop starting at index 1.
// We use a while loop to check if the current pref is not equal to the part of the next string where it
// start at index 0 and end in current prefix lenght.
// This will continue until we found a common prefix for this first two strings, if not prefix found
// so then lenght will be zero and we return empty string.

// Once found the first prefix between this two string, we go to the next string in the array.
// We repeat the process above.

export default function solution (strs: string[]): string {
  let pref = strs[0]
  let len = pref.length

  for (let i = 1; i < strs.length; i++) {
    while (pref !== strs[i].slice(0, len)) {
      len--
      if (len === 0) return ''

      pref = pref.slice(0, len)
    }
  }
  return pref
}

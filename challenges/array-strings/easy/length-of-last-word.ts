// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal
// substring
//  consisting of non-space characters only.

// Example 1:
// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.

// Example 2:
// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.

// Example 3:
// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.

export default function solution (s: string): number {
  // We slip the entire string into individual characters including even the spaces
  const characters = s.split('')
  let count = 0

  // From end to start we iterate the array
  // If the current character is a empty space we continue, if not we add 1 to the count.
  // The condition to return the count is if  the count is greather that 0 and if the
  // character we are checking is a empty space, this means that we already checked the last World
  // since the definition of word is: A word is a maximal substring consisting of non-space characters only.

  for (let i = characters.length - 1; i >= 0; i--) {
    if (characters[i] !== ' ') {
      if (characters[i + 1] === ' ' && count > 0) return count
      count++
    }
  }
  return count
}

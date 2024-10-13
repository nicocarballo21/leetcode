// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times.
// You may assume that the majority element always exists in the array.

// Example 1:
// Input: nums = [3,2,3]
// Output: 3

// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

export default function solution (nums: number[]): number {
  if (nums.length === 1) return nums[0]
  const hashMap: Map<number, number> = new Map()

  // We calculate whic is the majority number
  const majority = Math.ceil(nums.length / 2)

  // We create a hashMap to keep track of the quantity of each number on the array
  for (let i = 0; i < nums.length; i++) {
    const current = hashMap.get(nums[i]) ?? 0

    if (current > 0) {
      hashMap.set(nums[i], current + 1)

      // We check if the count for the current number is greather than
      // the majority number, if that is the case so that is the majority number
      if (current + 1 >= majority) return nums[i]
    } else {
      hashMap.set(nums[i], 1)
    }
  }
  return 0
}

// Boyer-Moore algorithm
// Complexity: O(n)
// Space: O(1)

// export default function solution(nums: number[]): number {
//     let candidate: number = nums[0];
//     let count: number = 0;

//     for (const num of nums) {
//       if (count === 0) {
//         candidate = num;
//       }
//       count += (num === candidate) ? 1 : -1;
//     }

//     return candidate;
//   }

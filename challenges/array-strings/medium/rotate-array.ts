// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation:
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

export default function solution (nums: number[], k: number): number[] {
  // In place solution
  k %= nums.length

  const reverse = (left: number, right: number): void => {
    while (left < right) {
      [nums[left], nums[right]] = [nums[right], nums[left]]
      left++
      right--
    }
  }

  reverse(0, nums.length - 1)
  reverse(0, k - 1)
  reverse(k, nums.length - 1)
  return nums
};

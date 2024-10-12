
// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once.
// The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially.
// The remaining elements of nums are not important as well as the size of nums.

// Return k.

// Example 1:
// Input: nums = [1,1,2]
//
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// Example 2:
// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// Explanation
// We need to have two pointers to keep track current number and the other to
// find the next not unique number.

// We start from index 1, because index 0 is already a unique number since its the first.
// Now at position 1, we should check if current number at bIndex is different from
// current number at aIndex.
// If they are different that means we found the next different number and we have to
// update the curent aIndex with this new number.

// [0,0,1,1,1,2,2,3,3,4]

export default function solution (nums: number[]): number {
  // We set this in index 1 because index 0 is already a unique num
  let aIndex = 1
  let bIndex = 1

  for (let i = 1; i < nums.length; i++) {
    if (nums[bIndex] !== nums[aIndex - 1]) {
      // If this is the case we update nums at A with nums at B.
      nums[aIndex] = nums[bIndex]
      aIndex++
      bIndex++
    } else {
      bIndex++
    }
  }

  return aIndex
}

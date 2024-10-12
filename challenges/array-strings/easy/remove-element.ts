/// Remove element ///

// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place.
// The order of the elements may be changed.
// Then return the number of elements in nums which are not equal to val.
// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:
// Change the array nums such that the first k elements of nums contain the elements which are not equal to val.
// The remaining elements of nums are not important as well as the size of nums.
// Return k.

// Example 1:
// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// Example 2:
// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
// Note that the five elements can be returned in any order.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// Explanation
// We need to return the amount of numbers that are not equal to VAL.
// We can do in-place updated inside the arrays leaving the not equal
// nums at the begin and the others at the end since the test only take care
// of the first K elements of the array

//  we basically want move all not equal numbers to the begin.

export default function solution (nums: number[], val: number): number {
  // K is goung to be a pointer that will keep track of the amount
  // of updated and the position where update should go
  let k = 0

  // From start to end we iterate the array
  for (let i = 0; i < nums.length; i++) {
    // if we detect a number that is not equal to the VAL
    // so then we want to move this number to the first position using K
    if (nums[i] !== val) {
      nums[k] = nums[i]
      // we move the pointer +1 so the next element will be at position 1..n
      k++
    }
  }

  // At the end K will be store the amount of updates
  // And all the numbers equal to VAL will be at the end of the array.

  // Since the tests cases only take care of the expected numbers
  // we can afirm that K is going to be the length of numbers !== VAL

  return k
}

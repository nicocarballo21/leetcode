// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, 
// representing the number of elements in nums1 and nums2 respectively.
// Merge nums1 and nums2 into a single array sorted in non-decreasing order.
// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. 
// To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, 
// and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

// Example 1:
// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
// Example 2:

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].
// Example 3:

// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
// Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.




//// Explanation ////

// We choose iterate from end to start because we have some numbers on nums1 array and some of that numbers are 
// bigger that the smallest number in nums2, that means some numbers from nums2 should be between numbers from nums1
// Once we know this, we can iterate with three pointers which they are going to represent nums1 lenght, nums2 lenght and
// the sum of both.
// Now we can iterate until nIndex reach -1. 


export default function solution (nums1: number[], m: number, nums2: number[], n: number): number[] {
  let mIndex = m - 1 // last position on nums1 array
  let nIndex = n - 1 // last position on nums2 array
  let sumIndex = m + n -1 // last position of sum of nums1 + nums2 array


  while(nIndex >=0){
    // Here we compare last num on nums1 array with the last num on nums2 array
    // to determinate which is bigger.

    if(mIndex >=0 && nums1[mIndex] >= nums2[nIndex]){
      // In this case nums1 has the bigger num at current position so we move 
      // that number until last position of the sum of both arrays
      nums1[sumIndex] = nums1[mIndex]
      mIndex--
    }else {
      // In this case nums2[nIndex] is bigger that nums1[mIndex] so we move the first one 
      // to the last position of the sum of both arrays
      nums1[sumIndex] = nums2[nIndex]
      nIndex--
    }
    sumIndex--
  }

  


  return nums1
}

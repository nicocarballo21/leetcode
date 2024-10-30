// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

// Return true if you can reach the last index, or false otherwise.

// Example 1:
// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

// Example 2:
// Input: nums = [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

// Constraints:
// 1 <= nums.length <= 104
// 0 <= nums[i] <= 105

export default function solution (nums: number[]): boolean {
  // Our target is to reach the final so this is our goal
  let goal = nums.length - 1

  // we start from the end
  // if the position I + the amount of steps is greather or equal to the goal
  // so then we move the goal to the prev.

  // the logic is check one by one
  //   [2, 3, 1, 1, 4]
  //             I

  // if I = (3 + 1) = 4 >= (goal = 4) so we move the goal one before and we do the same check.
  for (let i = nums.length - 2; i >= 0; i--) {
    if (i + nums[i] >= goal) {
      goal = i
    }
  }

  // At the end we check if the goal is in index zero, if thats true, that means you can reach the end
  // based on the steps on the array
  return goal === 0
}

// 487. Max Consecutive Ones II

// Given a binary array nums, return the maximum number of consecutive 1's in the array if you can flip at most one 0.

 

// Example 1:

// Input: nums = [1,0,1,1,0]
// Output: 4
// Explanation: Flip the first zero will get the maximum number of consecutive 1s. After flipping, the maximum number of consecutive 1s is 4.
// Example 2:

// Input: nums = [1,0,1,1,0,1]
// Output: 4

var findMaxConsecutiveOnes = function(nums) {
    let left = 0
    let right = 0
    let max = 0
    
    for(let i = 0; i < nums.length; i++){
        right++
        if(nums[i] == 0){
            left = right;
            right = 0
        }
        max = Math.max(left+right, max)
    }
    return max
    
};

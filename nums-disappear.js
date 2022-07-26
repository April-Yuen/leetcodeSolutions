//  Find All Numbers Disappeared in an Array

// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

 

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]
// Example 2:

// Input: nums = [1,1]
// Output: [2]

var findDisappearedNumbers = function(nums) {
    let unique = new Set(nums)
    let missing = []
//     Need to do nums.length + 1 b/c there is no zero in the input. 
    for(let i = 1; i < nums.length+1; i++){
        if(!unique.has(i)){
            missing.push(i)
        }
    }
    return missing
};

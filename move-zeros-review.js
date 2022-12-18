//283. Move Zeroes

// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

 

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

// I will iterate backwards through the array because when I did the for loop forwards, it would skip one after i pushed because it changed the index of the array. Therefore, iterating backwards ensures I will not skip an element when I push. 
var moveZeroes = function(nums) {

    for(let i = nums.length; i > -1; i--){
        if(nums[i] ===0){
            nums.splice(i,1)
            nums.push(0)
        }
    }
    return nums
};


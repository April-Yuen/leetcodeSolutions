// 219. Contains Duplicate II

// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

 

// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true
// Example 2:

// Input: nums = [1,0,1,1], k = 1
// Output: true
// Example 3:

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false

var containsNearbyDuplicate = function(nums, k) {
    // creating a new map object.
    let map = new Map();
    // if nums is null/undefined/or 0, return false for edge cases
    if(!nums){
        return false
    }
    // make a for loop to iterate through the array. 
    for(let i = 0; i < nums.length; i++){
    // if the key, does not already exist in map, then set the key and the index. 
        if(!map.has(nums[i])){
            map.set(nums[i], i)
    // Otherwise, the key already exists in map. 
        }else{
    // set a variable of difference so that I can later compare it to K. 
    // Get the abs difference of the index that already exists and the index of the other value in the array that is the same. 
            let diff = Math.abs(i-map.get(nums[i]))
    // if the difference is less than or equal to K, return true. 
            if(diff <= k){
                return true
            }else{
    // Otherwise, move onto the next element in nums array and set it so that it can be compared. 
                map.set(nums[i], i)
            }
        }
    }
    // return false if I've iterated through everthing and all differences are not less or equal to K. 
    return false
};
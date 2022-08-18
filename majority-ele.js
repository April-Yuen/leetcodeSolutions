// 169. Majority Element
// Easy

// 11340

// 371

// Add to List

// Share
// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

var majorityElement = function(nums) {
    let majority = Math.floor(nums.length/2)
    let map = {}
    for(let char of nums){
        map[char] = map[char] + 1 || 1
    if(map[char] > majority){
        return char
    }
    }
};
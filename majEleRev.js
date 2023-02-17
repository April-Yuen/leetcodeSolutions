// 169. Majority Element

// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// find the middle element of the array. You can do it by dividing the length by 2 and rounding it to the floor. 
// create a map that logs the elements and the number of times it occurs
// if a value in the map is greater than the majority element, return the key. 

var majorityElement = function(nums) {
    let majority = Math.floor(nums.length/2)
    let map = {}
    for(let num of nums){
        map[num] = map[num] + 1 || 1
        if(map[num] > majority){
            return num
        }
    }
    
};
// 1. Two Sum

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

//  I will create a hash map. It will loop through the elements in nums. 
//  I will set one element as nums1. This is the elements at nums[i]
// I will set another element as nums2. This element is equal to the target - nums1
// Then there will be a conditional. If the map has nums 2, then I will return the i of nums1 and nums2
// Otherwise, I will set nums[i], i 
var twoSum = function(nums, target) {
    let map = new Map()
    for(let i = 0; i < nums.length; i++){
        let num1 = nums[i]
        let num2 = target - nums[i]
        if(map.has(num2)){
            return [i, map.get(num2)]
        }else{
            map.set(num1, i)
        }
    }
};
// Binary Search

// 704. Binary Search
// Easy

// 5802

// 135

// Add to List

// Share
// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
// Example 2:

// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1
 

// Constraints:

// 1 <= nums.length <= 104
// -104 < nums[i], target < 104
// All the integers in nums are unique.
// nums is sorted in ascending order.
var search = function(nums, target) {
    let left = 0
    let right = nums.length-1
    while(left <= right){
        let middle = Math.floor((left + right)/2)
        let potentialMatch = nums[middle]
        if(target === nums[middle]){
            return middle
        }else if(target < potentialMatch){
            right = middle -1
        }else{
            left = middle+1
        }
    }
    return -1
};


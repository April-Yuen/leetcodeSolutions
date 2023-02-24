// 35. Search Insert Position

// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4

var searchInsert = function(nums, target) {
    let left = 0
    let right = nums.length-1
    
    while(left <= right){
        let middleIndex = Math.floor((left+right)/2)
        if(nums[middleIndex] === target){
            return middleIndex
        }else if(target > nums[middleIndex]){
            left = middleIndex+1
        }else{
            right = middleIndex-1
        }
    }
    return left
};
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
    let start = 0
    let end = nums.length-1
    while(start < end){
        const middle = Math.floor((start+ end)/2)
        if(target === nums[middle]){
            return middle
        }else if(target < nums[middle]){
            end = middle
        }else{
            start = middle+1
        }
    }
    if(start === end){
       return target <= nums[start]? start : start+1
    }
};
// 704. Binary Search

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

//  use binary search. 
// set a start index = 0
// set an end index = last element
// use a while loop => start <= end
// set a middle index
// if target is equal middleIndex => return middle index
// if target > middleIndex =>start moved to middleindex +1
// else target moved to the middleIndex-1 b/c the target is less than the middle index. 
// otherwise, we will return -1. => element is not in the array. 
var search = function(nums, target) {
    let startIndex = 0
    let endIndex = nums.length-1

    while(startIndex <= endIndex){
        // Setting middle index. 
        let middleIndex = Math.floor((endIndex + startIndex)/2)
        // check to see if target is equal to the middle
        if(target === nums[middleIndex]){
            return middleIndex
        // check to see if target is greater than the middle num, then chop off the left side and search the right. 
        }else if(target > nums[middleIndex]){
            startIndex = middleIndex+1
        // otherwise, target is less than the middle num & we chop off the right side. 
        }else{
            endIndex = middleIndex-1
        }
    }
    // the num is not there so we return -1. 
    return -1
};
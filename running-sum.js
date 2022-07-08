// Running Sum of 1d Array

// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
// Example 3:

// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]

// PREP
//parameters- only taking in an array of numbers
//return- we are returning an array with the same length, that has the sum of the numbers in the array up to that index.
//example- [1,2,3,4] => returns [1,3,6,10]
//first I make an empty array so that I can push the sums into that array. 
//make a for loop, add the nums together and push it to a new array. 
var runningSum = function(nums) {
    let newArray = []
    let currentSum = 0
    
    for(let i =0; i < nums.length; i++){
        let cv = nums[i]
        currentSum += cv
        newArray.push(currentSum)
    }
    return newArray
};

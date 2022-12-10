// 697. Degree of an Array

// Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.

// Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.

 

// Example 1:

// Input: nums = [1,2,2,3,1]
// Output: 2
// Explanation: 
// The input array has a degree of 2 because both elements 1 and 2 appear twice.
// Of the subarrays that have the same degree:
// [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
// The shortest length is 2. So return 2.
// Example 2:

// Input: nums = [1,2,2,3,1,4,2]
// Output: 6
// Explanation: 
// The degree is 3 because the element 2 is repeated 3 times.
// So [2,2,3,1,4,2] is the shortest subarray, therefore returning 6.


var findShortestSubArray = function(nums) {
    let hash = {}
    let max = 0
    let result = nums.length

    // setting a hash map of each element as the key
    // each value is an array of the indexes. 
    nums.forEach((item, index) => {
        if(!hash[item]){
            hash[item] = [index]
        }else{
            hash[item].push(index)
        }
    })
    console.log(hash)
    // I made an array of just the values
    // I am going to take each array, and find the subString of each element in the array values
    let arrayOfValues = [...Object.values(hash)]
    console.log(arrayOfValues)

    // Find the length of each subarray by subtracting the first index by the last index but also, add 1 b/c indexes start at 0.

    arrayOfValues.forEach(array => {
        let subString = array[array.length-1] -array[0] + 1
        console.log(subString)
        
        // if the length of the array is greater than max which is 0, then set the result to the subtring.
        // then set the max to length of the array. 
        // if the array.length === max
        // then find the result of the min of the substring and the result. 
        if(array.length > max){
            result = subString
            max = array.length
        }else if(array.length === max){
            result = Math.min(subString, result)
        }
    })
    return result
};
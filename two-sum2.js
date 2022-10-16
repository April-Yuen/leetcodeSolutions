// 167. Two Sum II - Input Array Is Sorted

// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

// The tests are generated such that there is exactly one solution. You may not use the same element twice.

// Your solution must use only constant extra space.

 

// Example 1:

// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
// Example 2:

// Input: numbers = [2,3,4], target = 6
// Output: [1,3]
// Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].
// Example 3:

// Input: numbers = [-1,0], target = -1
// Output: [1,2]
// Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].


// I am going to take in an array. within that array, I will also get a target. There will be two numbers within that array that will add up to the target. 
// There will always be just two numbers within the array that add up to the target. 
// return the indexes of the two numbers that add up to the target but I need to add 1 to each index. 
// There will not be undefined, or null, or ""
// Target can be a negative number. 

function twoSum (numbers, target) {
    // create a map 
    let map = new Map()
    // set the first number as num1
    for(let i = 0; i < numbers.length; i++){
        let num1 = numbers[i]
        let num2 = target-num1
        if(map.has(num2)){
            return[map.get(num2) + 1, i + 1]
        }
        map.set(num1, i)
    }

    // set the 2nd number as the target- first number. Set the number with the value and the index

    // return the indexes of the num1 and num2 but I will add 1 to each index. 
};

console.log(twoSum([2,3,4], 6))// [1,3])
// 645. Set Mismatch

// You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

// You are given an integer array nums representing the data status of this set after the error.

// Find the number that occurs twice and the number that is missing and return them in the form of an array.

 

// Example 1:

// Input: nums = [1,2,2,4]
// Output: [2,3]
// Example 2:

// Input: nums = [1,1]
// Output: [1,2]

//  Brute Force: 
// take the first number in array & the last number. 
// create a new array pushing each number into the new array from the first number to the last number. 

// Create another for loop comparing the number that is missing between the two arrays. Push that number into the result. 
// create another for loop with a hashmap & push the number that occurs 2x into the result array. 
var findErrorNums = function(nums) {
    nums.sort((a,b) => a-b)
    console.log(nums)
    result = []
    let map = new Map()
    for(let i = 0 ; i < nums.length; i++){
        if(!map.has(nums[i], 1)){
            map.set(nums[i], 1)
        }else {
            map.set(nums[i], map.get(nums[i])+1)
        }
    }
    console.log(map)
    for(let [key, value] of map){
        if(value === 2){
            result.push(key)
        }
    }

    let nonErrorArray = []
    for(let i = 1; i <= nums.length; i++){
         nonErrorArray.push(i)
    }
    let notIncluded = nonErrorArray.filter(num => !nums.includes(num))
    console.log(notIncluded)
    result.push(notIncluded)
    return result
    
    // for(let i = 0; i < nonErrorArray.length; i++){
    //     if(nums[i] !== nonErrorArray[i]){
    //         result.push(nonErrorArray[i])
    //     }
    // }
    // return result
};

console.log(findErrorNums([1,2,2,4]))
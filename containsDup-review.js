// 217. Contains Duplicate

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// Below is my solution to the problem. 
// var containsDuplicate = function(nums) {
//     let map = new Map()
//     for(let i = 0; i < nums.length; i++){
//         if(!map.has(nums[i], 1)){
//             map.set(nums[i], 1)
//         }else{
//             map.set(nums[i], map.get(nums[i])+1)
//         }
//     }
//     console.log(map)
//     for(let [keys, values] of map){
//         if(values >= 2){
//             return true
//         }
//     }
//     return false
// }

// This is the official answer. 
var containsDuplicate = function(nums) {
    let map = {}
    for(let i = 0; i < nums.length; i++){
        let item = nums[i]
        if(map[item]){
            return true
        }else{
            map[item] = true
        }
    }
    return false
}

console.log(containsDuplicate([1,2,3,1]))//true
console.log(containsDuplicate([1,2,3,4]))//false

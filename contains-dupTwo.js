// 219. Contains Duplicate II

// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

 

// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true
// Example 2:

// Input: nums = [1,0,1,1], k = 1
// Output: true
// Example 3:

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false

// create a map object. 
// iterate through with a for loop, set the element and the index. 
// if the element already exists, I will find the difference using Math.abs
// between the current index and the index that is already there. 
// if the diff < k, I will return true.
// else, I will set the index in the map so that the loop can start all over again. 

var containsNearbyDuplicate = function(nums, k) {
    let map = new Map()

    for(let i = 0; i < nums.length; i++){
        if(!map.has(nums[i], i)){
            map.set(nums[i], i)
        }else{
            let diff = Math.abs(i - map.get(nums[i]))
            if(diff <= k){
                return true
            }else{
                map.set(nums[i], i)
            }
        }
    }
    return false
}

console.log(containsNearbyDuplicate([1,2,3,1], 3))// true
console.log(containsNearbyDuplicate([1,0,1,1], 1))// true
console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2))//false
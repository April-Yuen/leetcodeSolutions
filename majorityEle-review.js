// 169. Majority Element

// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

var majorityElement = function(nums) {
    const map = {}
    let count = 0
    let maxElement = nums[0]

    for(const element of nums){
        map[element] = map[element] + 1 || 1
    }
    for(const n in map){
        if(map[n] > count){
            count = map[n]
            maxElement = n
        }
    }
    return maxElement

    // let majority = Math.floor(nums.length/2)
    // let map = {}
    // for(let element of nums){
    //     map[element] = map[element] + 1 || 1
    //     if(map[element] > majority){
    //         return element
    //     }
    // }
};
// 347. Top K Frequent Elements

// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]

var topKFrequent = function(nums, k) {
    let map = new Map()

    for(let i = 0; i < nums.length; i++){
        if(!map.has(nums[i], 1)){
            map.set(nums[i], 1)
        }else{
            map.set(nums[i], map.get(nums[i])+1)
        }
    }
    
    let sortMap = new Map([...map.entries()].sort((a,b)=> b[1]-a[1]))
    let sortedMapkeys= [...sortMap.keys()]
    let mostFreq = []
    for(let i = 0; i < k; i++){
        mostFreq.push(sortedMapkeys[i])
    }
    return mostFreq
};
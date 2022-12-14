// 347. Top K Frequent Elements

// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]

// my solution 
//  create a map of the elements so that I can record how many elements occur and their frequency. 
// I will set a result which will be an empty array
// Then I will sort the elements by order in the map. 
// I will create an array of just the keys in the map. 
// I will iterate through the keys array pushing the elements in the kth position
// return the results array. 
var topKFrequent = function(nums, k) {
    let map = new Map()
    let result = []
    for(let i = 0; i < nums.length; i++){
        if(!map.has(nums[i], 1)){
            map.set(nums[i], 1)
        }else{
            map.set(nums[i], map.get(nums[i])+1)
        }
    }
    console.log(map)
    // Need to remember this sort method for Map Objects. 
     let sortedArray = new Map([...map].sort((a,b) => b[1] - a[1]))
     console.log(sortedArray)

    let keysArray = [...sortedArray.keys()]
    console.log(keysArray)
    for(let i = 0; i < k; i++){
        result.push(keysArray[i])
    }
    return result
};
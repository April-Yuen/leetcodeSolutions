// 347. Top K Frequent Elements

// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]
 

// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// k is in the range [1, the number of unique elements in the array].
// It is guaranteed that the answer is unique.

// I need to return the elements of the array that is the most k frequent. 
// making a hash map of the elements. 
// sorting the hash map by the values of the elements. 
// declare the new array of the keys of the sorted hash map. 
// push the k most frequent elements & return the array. 


function topKFrequent(nums, k) {
    let kKeys = []
    let map = new Map()
    for(let i = 0; i < nums.length; i++){
        if(!map.has(nums[i], 1)){
            map.set(nums[i], 1)
        }else{
            map.set(nums[i], map.get(nums[i])+1)
        }
    }
    let sortedMap = new Map([...map].sort((a,b) => b[1]-a[1]))
    let sortedArray = [...sortedMap.keys()]
    for(let i = 0; i < k; i++){
        kKeys.push(sortedArray[i])
    }
    return kKeys
}

console.log(topKFrequent([1,1,1,2,2,3], 2))


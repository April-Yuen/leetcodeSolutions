// 2404. Most Frequent Even Element

// Given an integer array nums, return the most frequent even element.

// If there is a tie, return the smallest one. If there is no such element, return -1.

 

// Example 1:

// Input: nums = [0,1,2,2,4,4,1]
// Output: 2
// Explanation:
// The even elements are 0, 2, and 4. Of these, 2 and 4 appear the most.
// We return the smallest one, which is 2.
// Example 2:

// Input: nums = [4,4,4,9,2,4]
// Output: 4
// Explanation: 4 is the even element appears the most.
// Example 3:

// Input: nums = [29,47,21,41,13,37,25,7]
// Output: -1
// Explanation: There is no even element.

function mostFrequentEven(nums) {
    let evenNums = nums.filter(num => num% 2 === 0)
    let map = new Map()
    let mostF
    if(evenNums.length === 0){
        return -1
    }
    for(let i = 0; i < evenNums.length; i++){
        if(!map.has(evenNums[i], 1)){
          map.set(evenNums[i], 1)
        }else{
          map.set(evenNums[i], map.get(evenNums[i])+1)
        }
      }
    console.log(evenNums)
    console.log(map)
    let currMax = Infinity
    mostF = Math.max(...map.values())
    for(let [keys, values] of map){
        if(values === mostF){
            if(currMax > keys)
            currMax = keys
        }
    }
    return currMax
};

console.log(mostFrequentEven([4,4,4,9,2,4]))
console.log(mostFrequentEven([0,1,2,0,0,0,2,4,4,1]))
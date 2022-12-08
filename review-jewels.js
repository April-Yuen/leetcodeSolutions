// 771. Jewels and Stones

// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

 

// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// Example 2:

// Input: jewels = "z", stones = "ZZ"
// Output: 0

var numJewelsInStones = function(jewels, stones) {
    // create an object of the jewels
    // I want to iterate through the jewels and set it into the object. 
    // set a variable to count to 0
    // Iterate through the stones and see if the stones contain any jewels
    // If the stones contain jewels, then I will increment count by 1. 
    // Return the count. 
    const jStones = {}
    let count = 0
    for(let jewel of jewels){
        jStones[jewel] = true
    }
    console.log(jStones)
    for(let element of stones){
        if(jStones[element]){
            count ++
        }
    }
    return count

};

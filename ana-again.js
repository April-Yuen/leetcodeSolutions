// 49. Group Anagrams
// Medium

// 12107

// 375

// Add to List

// Share
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]

var groupAnagrams = function(strs) {
    let map = {}
    strs.forEach(word => {
        let newSort = word.split("").sort().join("")
        if(map[newSort]){
            map[newSort].push(word)
        }else{
           map[newSort] = [word] 
        }
        })
    return Object.values(map)
}


// 49. Group Anagrams

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

// create a hashmap
// within that map, I will loop through, splitting each word, and sorting, then joining the word. This will be the key
// I will set value to be the word before it was split, sorted, and reversed. 
// If the key already exists, then I will push the word into that key
// otherwise, I will set the key to the word. 
// return the hashmap's values only. 

var groupAnagrams = function(strs) {
    let map = {}
    strs.forEach(word => {
        let sortedKey = word.split("").sort().join("")
        if(map[sortedKey]){
            map[sortedKey].push(word)
        }else{
            map[sortedKey]= [word]
        }
    })
    return Object.values(map)
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
console.log(groupAnagrams(["a"]))
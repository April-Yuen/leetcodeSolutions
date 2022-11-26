// 242. Valid Anagram

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

// This is my solution.
// var isAnagram = function(s, t) {
//     let ssorted = s.split("").sort().join("")
//     let tsorted = t.split("").sort().join("")
//     if(ssorted===tsorted){
//         return true
//     }else{
//         return false
//     }
// };

var isAnagram = function(s, t) {
    let Smap = new Map()
    let Tmap = new Map()

    if(s.length !== t.length){
        return false
    }
    
    for(let i = 0; i < s.length; i++){
        if(!Smap.has(s[i], 1)){
            Smap.set(s[i], 1)
        }else{
            Smap.set(s[i], Smap.get(s[i])+1)
        }
    }

    for(let i = 0; i < t.length; i++){
        if(!Tmap.has(t[i], 1)){
            Tmap.set(t[i], 1)
        }else{
            Tmap.set(t[i], Tmap.get(t[i])+1)
        }
    }

    for(let [key, value] of Tmap){
        if(value !== Smap.get(key)){
            return false
        }
    }
    return true
    console.log(Tmap)
};

console.log(isAnagram("anagram", "nagaram"))
console.log(isAnagram("rat", "car"))
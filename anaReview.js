// 242. Valid Anagram

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

//  take s and sort it by alphabet
// take t and sort it by alphabet
// compare the two, if they are equal, return true, else return false. 
var isAnagram = function(s, t) {
    let sMap = new Map()
    let tMap = new Map()

    if(s.length !== t.length){
        return false
    }

    for(let i = 0; i < s.length; i++){
        if(!sMap.has(s[i], 1)){
            sMap.set(s[i], 1)
        }else{
            sMap.set(s[i], sMap.get(s[i])+1)
        }
    }

    for(let i = 0; i < t.length; i++){
        if(!tMap.has(t[i], 1)){
            tMap.set(t[i], 1)
        }else{
            tMap.set(t[i], tMap.get(t[i])+1)
        }
    }
    
    for(let [key, value] of tMap){
        if( value !== sMap.get(key)){
            return false
        }
    }
    return true
    
};
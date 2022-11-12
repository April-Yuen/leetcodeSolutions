// 290. Word Pattern

// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

 

// Example 1:

// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true
// Example 2:

// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false
// Example 3:

// Input: pattern = "aaaa", s = "dog cat cat dog"
// Output: false

var wordPattern = function(pattern, s) {
    let strPattern = pattern.split("")
    let sPattern = s.split(" ")
    if(strPattern.length !== sPattern.length){
        return false
    }
   const map = {}
    for(let i = 0; i < strPattern.length; i++){
        if(strPattern[i] in map){
            if(map[strPattern[i]] !== sPattern[i]){
                return false
            }
        }else if(Object.values(map).indexOf(sPattern[i]) > -1){
            console.log(Object.values(map).indexOf(sPattern[i]))
            return false
        }else{
            map[strPattern[i]] = sPattern[i]
        }
    }
    console.log(map)
        return true
        
};
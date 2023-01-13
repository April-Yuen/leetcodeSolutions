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
    let splitPat = pattern.split("")
    let splitSen = s.split(" ")

    if(splitPat.length !== splitSen.length){
        return false
    }

    let patMap = new Map()
    let senMap = new Map()

    for(let i = 0; i < splitPat.length; i++){
        if(patMap.has(splitPat[i])){
            if(patMap.get(splitPat[i]) !== splitSen[i]){
                return false
            }
        }else{
            patMap.set(splitPat[i], splitSen[i])
        }
        if(senMap.has(splitSen[i])){
            if(senMap.get(splitSen[i]) !== splitPat[i]){
                return false
            }
        }else{
            senMap.set(splitSen[i], splitPat[i])
        }
    }
    return true  
};
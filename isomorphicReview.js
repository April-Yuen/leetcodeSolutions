// 205. Isomorphic Strings

// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

// Example 1:

// Input: s = "egg", t = "add"
// Output: true
// Example 2:

// Input: s = "foo", t = "bar"
// Output: false
// Example 3:

// Input: s = "paper", t = "title"
// Output: true

function isomorphic(s, t){
    if(s.length !== t.length){
        return false
    }

    let sMap = new Map()
    let tMap = new Map()

    for(let i = 0; i < s.length; i++){
        if(sMap.has(s[i])){
            if(sMap.get(s[i]) !== t[i]){
                return false
            }
        }else {
           sMap.set(s[i], t[i]) 
        }

        if(tMap.has(t[i])){
            if(tMap.get(t[i]) !== s[i]){
                return false
            } 
        }else {
           tMap.set(t[i], s[i]) 
        }
    }
    return true
}

console.log(isomorphic("egg", "add"))
console.log(isomorphic("foo", "bar"))
console.log(isomorphic("paper", "title"))

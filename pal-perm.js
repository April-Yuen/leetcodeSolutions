// 266. Palindrome Permutation

// Given a string s, return true if a permutation of the string could form a palindrome.

 

// Example 1:

// Input: s = "code"
// Output: false
// Example 2:

// Input: s = "aab"
// Output: true
// Example 3:

// Input: s = "carerac"
// Output: true

var canPermutePalindrome = function(s) {
    let map = new Map()
    for(let i = 0; i < s.length; i++){
        if(!map.has(s[i], 1)){
            map.set(s[i], 1)
        }else{
            map.set(s[i], map.get(s[i])+1)
        }
    }
    let countOddOccurrances = 0
    for(let occurances of map.values()){
        if(occurances % 2 === 1){
            countOddOccurrances += 1
        }
        if(countOddOccurrances > 1){
            return false
        }
    }
    return true
};

console.log(canPermutePalindrome("code"))
console.log(canPermutePalindrome("aab"))
console.log(canPermutePalindrome("carerac"))
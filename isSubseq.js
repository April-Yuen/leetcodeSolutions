// 392. Is Subsequence

// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false

// two pointer technique. 
// while both pointers are at the same letter, we will increment 1
// if they are not at the same letter, only increment j. 
// you know that it's subsequence when i has passed through the entire sequence so when it's at i.length. 

function isSubsequence(s,t){
    let i = 0
    let j = 0
    while(i < s.length && j < t.length){
        if(s[i] === t[j]){
            i++
            j++
        }else{
            j++
        }
    }
    return i === s.length
}

console.log(isSubsequence("abc", "ahbgdc"))//true
console.log(isSubsequence("axc", "ahbgdc"))//false

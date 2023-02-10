// 392. Is Subsequence

// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false

//  we need two pointers. 
// i & j both start at 0. 
// when they are both the same letter we shift both.
// if i is not equal to j, we can shift the j pointer over 1. 
var isSubsequence = function(s, t) {
    let i = 0
    let j = 0
    while( i < s.length && j < t.length){
        // if both of the letters are equal, we increment both by one. 
        if(s[i] === t[j]){
            i++
            j++
        // if i & j are not equal, we only increment j. 
        }else{
            j++
        }
        
    }
    // this means that i has gone through its entire loop and found a match. 
    return i=== s.length
};
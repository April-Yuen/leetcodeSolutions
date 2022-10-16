// 680. Valid Palindrome II

// Given a string s, return true if the s can be palindrome after deleting at most one character from it.

 

// Example 1:

// Input: s = "aba"
// Output: true
// Example 2:

// Input: s = "abca"
// Output: true
// Explanation: You could delete the character 'c'.
// Example 3:

// Input: s = "abc"
// Output: false

var validPalindrome = function(s) {
    let leftPointer = 0
    let rightPointer = s.length-1
    while(leftPointer < rightPointer){
        if(s[leftPointer] !== s[rightPointer]){
            const checkLeftPointer = checkPalindrome(leftPointer + 1, rightPointer, s)
            const checkRightPointer = checkPalindrome(leftPointer, rightPointer-1, s)
            return checkLeftPointer || checkRightPointer
        }
        leftPointer++
        rightPointer--
    }
    return true
};

var checkPalindrome = function(leftPointer, rightPointer, s){
    while(leftPointer < rightPointer){
        if(s[leftPointer] !== s[rightPointer]){
            return false
        }
        leftPointer++
        rightPointer--
    }
    return true
}



//Longest Substring Without Repeating Characters

// Given a string s, find the length of the longest substring without repeating characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

function lengthOfLongestSubstring (s) {
    let longestString = 0
    let currentString = []
    for(let i = 0; i < s.length; i++){
        let currentPositionIndex = currentString.indexOf(s[i])
        if(currentPositionIndex !== -1){
            currentString.splice(0, currentPositionIndex + 1)
            break;
        }else{
            currentString.push(s[i])
        }
        longestString = Math.max(currentString.length, longestString)
    }
    return longestString
};

console.log(lengthOfLongestSubstring("abcabcbb"))//abc
console.log(lengthOfLongestSubstring("bbbbb"))//abc
console.log(lengthOfLongestSubstring("pwwkew"))//wke


// 3. Longest Substring Without Repeating Characters

// Given a string s, find the length of the longest 
// substring
//  without repeating characters.

 

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

// set a empty map that I will create a hash map with. 
// I will also set a start variable to 0
// set a maxlength variable to 0

// create a traditional for loop
// if the element already exists in the map and the index is greater than or equal to start,
// then start = the map end + 1
// set map[end] = end
// set the maxLen = max.max end-start +1 due to the indexing. 
// return maxLen.

var lengthOfLongestSubstring = function(s) {
    let map = {}
    let start = 0
    let maxLen = 0

    for(let end = 0; end < s.length; end++){
        if(map[s[end]] !== undefined && map[s[end]] >= start){
            start = map[s[end]] + 1
        }
        map[s[end]] = end
        maxLen = Math.max(maxLen, end-start + 1)
    }
    return maxLen

}

console.log(lengthOfLongestSubstring("abcabcbb"))//3
console.log(lengthOfLongestSubstring("bbbbb"))//1
console.log(lengthOfLongestSubstring("pwwkew"))//3 
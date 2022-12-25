// 424. Longest Repeating Character Replacement

// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.

 

// Example 1:

// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.
// Example 2:

// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.

// My explanation
//  start at both pointers at 0
// with the right pointer, it will increment through the for loop
// As it goes through the loop, it is adding elements to the hash map. 
// we are finding the element that occurs the most times and saving it as freqMax
// then we are creating a window of right - left and adding 1 b/c of indexing. 
// we are subtracting the most frequent element from the window to see how many elements need to be changed. if, it is greater than k, 
// we are incrementing the value of the element because the window is shrinking by one. 
// then we are moving the left pointer over by 1 because we have shrunk the window. 
// Otherwise, we are finding the max window by subtracting the right pointer minus the left pointer and adding 1. this is b/c we know that the window is valid b/c the k elements are less. we are setting it as max and returning max. 

var characterReplacement = function(s, k) {
    let left = 0
    let max = 0
    let freqMap = {}
    let freqMax = 0

    for(let right = 0; right < s.length; right++){
        freqMap[s[right]] = freqMap[s[right]]+1 || 1
        freqMax = Math.max(freqMap[s[right]], freqMax)
        while(right-left + 1 - freqMax > k){
            freqMap[s[left]] -= 1
            left++
        }
        max = Math.max(right-left+1, max)
    }
      return max
};
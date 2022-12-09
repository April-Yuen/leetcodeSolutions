// 409. Longest Palindrome

// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

 

// Example 1:

// Input: s = "abccccdd"
// Output: 7
// Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
// Example 2:

// Input: s = "a"
// Output: 1
// Explanation: The longest palindrome that can be built is "a", whose length is 1.

// iterate through using a for loop & set a map/ object. 
// also set a sum = 0
// if there is a pair of letters, then add 2 to the sum. Since I have the if loop within the map, it is iterating through each letter I am setting and adding for each even number/pair. 
// check the length of the string against the sum. If they are the same, then return the sum. Otherwise, return sum plus 1. 

function longestPal(string){
    let map = {}
    let sum = 0
    for(let char of string){
        map[char] = (map[char] || 0) + 1
        if(map[char] % 2 === 0){
            sum+=2
        }
        
    } 
    console.log(map)
    return string.length === sum ? sum : sum + 1  
}

console.log(longestPal("abccccdd"))
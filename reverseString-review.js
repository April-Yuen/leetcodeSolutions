// 344. Reverse String

// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

 

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

// Iterate through the array, I want to go forwards and replace each element 
// I will take the first element
// save it as a temp
// then take the last element
// save it as a temp
// then make the first element equal the last element. 
// then take the temp 
// return the array. 
var reverseString = function(s) {
    let first = 0;
    let last = s.length-1
    while(last > first){
        let forward = s[first]
        let backward = s[last]
        s[first] = backward
        first++
        s[last] = forward
        last--
    }
    return s
};
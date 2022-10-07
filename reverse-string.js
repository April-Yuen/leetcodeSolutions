// 344. Reverse String

// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

 

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

function reverseString(s){
    let i = 0 
    let j = s.length-1
    while(j > i){
        let temp1 = s[i]
        let temp2 = s[j]
        s[j] = temp1
        s[i] = temp2
        i++
        j--
    }
    return s
}

// var reverseString = function(s) {
//     let newStr = []
//     for(let i = s.length-1; i >= 0; i--){
//         newStr.push(s[i])
//     }
//     return newStr
// };

console.log(reverseString(["h","e","l","l","o"]))
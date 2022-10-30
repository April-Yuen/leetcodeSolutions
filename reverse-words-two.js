//  Reverse Words in a String II

// Given a character array s, reverse the order of the words.

// A word is defined as a sequence of non-space characters. The words in s will be separated by a single space.

// Your code must solve the problem in-place, i.e. without allocating extra space.

 

// Example 1:

// Input: s = ["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"]
// Output: ["b","l","u","e"," ","i","s"," ","s","k","y"," ","t","h","e"]
// Example 2:

// Input: s = ["a"]
// Output: ["a"]

// To solve this problem, I need to reverse the string. 
// Now that all the words are in place, the letters for the words are reversed. 
// I need to reverse all the letters within each word so that only the words are reversed and not the letters. 

var reverseWords = function(str) {
    if(str.length === 0 || str.length === null){
        return
    }
    str.reverse()
    let start = 0
    let end = 0
    while(end <= str.length){
        if(end === " " || end === str.length){
            let left = start
            let right = end -1
            while (left < right){
                let temp = str[left]
                str[left] = str[right]
                str[right] = temp
                left++
                right--
            }
            start = end + 1
        }
        end++
    }
}
console.log(reverseWords(["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"]))
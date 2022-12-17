// 345. Reverse Vowels of a String

// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

// Example 1:

// Input: s = "hello"
// Output: "holle"
// Example 2:

// Input: s = "leetcode"
// Output: "leotcede"

//  Set everything to toLowerCase.
// create a vowels array. 
// make one pointer for the last element of the array. 
// create another pointer for the beginning of the array. 
// make a for loop, if the letter at the end is equal to a vowel and the letter at the beginning is equal to a vowel, then make the letter[end] = letter[beginning] & letter [beginning] = letter [end]
// return the word. 
var reverseVowels = function(s) {
    let lowerString = s.split("")
    let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    let start = 0
    let vowelsReversed = []
  for(let i = 0; i < lowerString.length; i++){
    if(vowels.includes(lowerString[i])){
      vowelsReversed.push(lowerString[i])
    }
  }
  for(let i = lowerString.length; i > -1; i--){
    if(vowels.includes(lowerString[i])){
      lowerString[i] = vowelsReversed[start]
      start++
    }
  }
  return lowerString.join("")  
  
};
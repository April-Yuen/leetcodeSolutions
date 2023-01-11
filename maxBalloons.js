// 1189. Maximum Number of Balloons

// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

// You can use each character in text at most once. Return the maximum number of instances that can be formed.

 

// Example 1:



// Input: text = "nlaebolko"
// Output: 1
// Example 2:



// Input: text = "loonbalxballpoon"
// Output: 2
// Example 3:

// Input: text = "leetcode"
// Output: 0

var maxNumberOfBalloons = function(text) {
    const map = {"b": 0, "a": 0, "l": 0, "o": 0, "n": 0}
    let minCount = text.length
    for(let i = 0; i < text.length; i++){
        let char = text[i]
        if(map[char] !== undefined){
            map[char]++
        }
    }
    map["l"] = Math.floor(map["l"]/2)
    map["o"] = Math.floor(map["o"]/2)
    console.log(map["l"])
    console.log(map["o"])
    for(let letter in map){
        if(map[letter] < minCount){
            minCount = map[letter]
        }
    }
    return minCount
};
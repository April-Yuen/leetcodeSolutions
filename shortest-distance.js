// 243. Shortest Word Distance

// Given an array of strings wordsDict and two different strings that already exist in the array word1 and word2, return the shortest distance between these two words in the list.

 

// Example 1:

// Input: wordsDict = ["practice", "makes", "perfect", "coding", "makes"], word1 = "coding", word2 = "practice"
// Output: 3
// Example 2:

// Input: wordsDict = ["practice", "makes", "perfect", "coding", "makes"], word1 = "makes", word2 = "coding"
// Output: 1

var shortestDistance = function(wordsDict, word1, word2) {
    let i1 = -1
    let i2 = -1
    let minDistance = wordsDict.length
    for(let i = 0; i < wordsDict.length; i++){
        if(wordsDict[i] === word1){
            i1 = i
        }else if(wordsDict[i]===word2){
            i2 = i
        }
        if(i1 !== -1 && i2 !== -1){
            minDistance = Math.min(minDistance, Math.abs(i1-i2))
        }
    }
    return minDistance
};
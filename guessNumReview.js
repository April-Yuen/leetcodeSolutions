// 374. Guess Number Higher or Lower

// We are playing the Guess Game. The game is as follows:

// I pick a number from 1 to n. You have to guess which number I picked.

// Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

// You call a pre-defined API int guess(int num), which returns three possible results:

// -1: Your guess is higher than the number I picked (i.e. num > pick).
// 1: Your guess is lower than the number I picked (i.e. num < pick).
// 0: your guess is equal to the number I picked (i.e. num == pick).
// Return the number that I picked.

 

// Example 1:

// Input: n = 10, pick = 6
// Output: 6
// Example 2:

// Input: n = 1, pick = 1
// Output: 1
// Example 3:

// Input: n = 2, pick = 1
// Output: 1

var guessNumber = function(n) {
    let start = 1
    let end = n

    while(start <= end){
        let middleNumber = Math.floor((start + end) /2)
        const guessNum = guess(middleNumber)
        if(guessNum === 0){
            return middleNumber
            // the real number is smaller than the number I guessed so end is middle number -1. 
        }else if(guessNum === -1){
            end = middleNumber-1
            // the real number is greater than my guess. 
        }else{
            start = middleNumber+1
        }
    }
    return 0
    
};

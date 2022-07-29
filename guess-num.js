// // 374. Guess Number Higher or Lower
// Easy

// 1324

// 212

// Add to List

// Share
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

var guessNumber = function(n) {
    let left = 0
    let right = n
    while (left <= right){
        const middle = Math.floor((left + right)/2)
        const guessNum = guess(middle)
        if(guessNum === 0){
            return middle
        }else if(guessNum === -1){
            right = middle-1
        }else{
            left = middle +1
        }
    }
    return 0
};
// 875. Koko Eating Bananas

// Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

// Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

// Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

// Return the minimum integer k such that she can eat all the bananas within h hours.

 

// Example 1:

// Input: piles = [3,6,7,11], h = 8
// Output: 4
// Example 2:

// Input: piles = [30,11,23,4,20], h = 5
// Output: 30
// Example 3:

// Input: piles = [30,11,23,4,20], h = 6
// Output: 23

// take the minimum amount of bananas Koko can eat which is 1
// take the max amount which is the largest number in piles. 
// we are going to set a result as the same value as right. 
// do a binary search from left to right.
// k will be the middle number. 
// to find the amount of time it will take to eat the bananas, we will take the piles and divide it by K. 
// then I will check to see if hours is less than or equal to the hours koko can eat. 
// *the key to this problem is taking k, dividing each pile by k to calculate the hours. 
// *also, the binary search is different b/c we are looking for the minimum so we want k to be even smaller. 

var minEatingSpeed = function(piles, h) {
    let left = 1
    let right = Math.max(...piles)
    let result = right
    
    while(left <= right){
        let k = Math.floor((left + right)/2)
        let hours = 0

        for(let p of piles){
            hours += Math.ceil(p/k)
        }
        if(hours <= h){
            result = Math.min(result, k)
            // we want to see if we can find an even smaller amount for k. 
            right = k-1
            // otherwise, k was too small and we need to make it bigger. 
        }else{
            left =  k+1
        }
    }
    return result
}

console.log(minEatingSpeed([3,6,7,11], 8))// 4
console.log(minEatingSpeed([30,11,23,4,20], 5))//30
console.log(minEatingSpeed([30,11,23,4,20], 6))//23
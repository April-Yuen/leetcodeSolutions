// 496. Next Greater Element I

// The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

// You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

// For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

// Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

 

// Example 1:

// Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
// Output: [-1,3,-1]
// Explanation: The next greater element for each value of nums1 is as follows:
// - 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
// - 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
// - 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
// Example 2:

// Input: nums1 = [2,4], nums2 = [1,2,3,4]
// Output: [3,-1]
// Explanation: The next greater element for each value of nums1 is as follows:
// - 2 is underlined in nums2 = [1,2,3,4]. The next greater element is 3.
// - 4 is underlined in nums2 = [1,2,3,4]. There is no next greater element, so the answer is -1.

// I have a stack 
// Then I am iterating through the values of the fist array. 
// Then I am setting a variable for the element of the first array, the indexOf the 2nd array. 
// Iterate through the 2nd array
// The if statement needs to be outside of the for loop. Otherwise, it will not iterate through the to the end of the array. 
// if not find, then push -1 . 

var nextGreaterElement = function(nums1, nums2) {
    let result = []
    for(let num of nums1){
        let firstNum = nums2.indexOf(num)
        let find = false
        for(let i = firstNum+ 1; i < nums2.length; i++){
            if(nums2[i] > num){
                result.push(nums2[i])
                find = true
                break
            }
        }
        if(!find){
            result.push(-1)
        }
    }
    return result
};
// 238. Product of Array Except Self

// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

//  I will create a right product array
// I will create a left product array
// I will create a solutions array
// let nums = [1,2,3,4]
// let leftArray = [1,1,2,6]
// let rightArray=[24,12,4,1]
// solutions Array = [24,12, 8, 6]
var productExceptSelf = function(nums) {
    let leftArray = []
    let rightArray = []
    let solutionsArray = []
    // left array
    for(let i = 0; i < nums.length; i++){
        if(leftArray.length === 0){
            leftArray.push(1)
        }else{
            leftArray.push(leftArray[i-1] * nums[i-1])
        }
    }
    console.log(leftArray)
    for(let i = nums.length-1; i > -1; i--){
        if(rightArray.length===0){
            rightArray.push(1)
        }else{
            rightArray.unshift(rightArray[0]*nums[i+1])
        }
    }
    console.log(rightArray)

    for(let i = 0; i < leftArray.length; i++){
        solutionsArray.push(rightArray[i]*leftArray[i])
    }
    return solutionsArray
};
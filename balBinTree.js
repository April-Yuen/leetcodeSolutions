// 110. Balanced Binary Tree

// Given a binary tree, determine if it is 
// height-balanced
// .

 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: true
// Example 2:


// Input: root = [1,2,2,3,3,null,null,4,4]
// Output: false
// Example 3:

// Input: root = []
// Output: true

var isBalanced = function(root) {
    // When I run the function, if the height is not equal to -1, then it's true. Otherwise, it's false. 
    return dfs(root) !== -1
    
    function dfs(root){
        // if the root is null, return 0,
        if(!root){
            return 0
        }
        // Take the height of the left
        let left = dfs(root.left)
        console.log(left)
        // Take the height of the right
        let right = dfs(root.right)
        console.log(right)
        // these are the conditions for it to be false including subtracting the left & right height. 
        if(left === -1 || right == -1 || Math.abs(left-right) > 1){
            return -1
        }
        // it is checking the height to see if it will be greater than -1 
        return 1 + Math.max(left, right)
    }
};
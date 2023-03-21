// 101. Symmetric Tree

// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

 

// Example 1:


// Input: root = [1,2,2,3,4,4,3]
// Output: true
// Example 2:


// Input: root = [1,2,2,null,3,null,3]
// Output: false

var isSymmetric = function(root) {

    
    function dfs(leftNode, rightNode){
        
        if(!leftNode && !rightNode){
            return true
        }
        if(!leftNode && rightNode){
            return false
        }
        if(!rightNode && leftNode){
            return false
        }
        if(leftNode.val !== rightNode.val){
            return false
        }
        return dfs(leftNode.right, rightNode.left) && dfs(rightNode.right, leftNode.left)
    }
    return dfs(root.left, root.right)
};
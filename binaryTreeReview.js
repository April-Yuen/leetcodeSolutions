// 94. Binary Tree Inorder Traversal

// Given the root of a binary tree, return the inorder traversal of its nodes' values.

 

// Example 1:


// Input: root = [1,null,2,3]
// Output: [1,3,2]
// Example 2:

// Input: root = []
// Output: []
// Example 3:

// Input: root = [1]
// Output: [1]

var inorderTraversal = function(root) {
    let result = []
    makeTraverse(root)

    function makeTraverse(root){
        if(root !== null){
            makeTraverse(root.left)
            result.push(root.val)
            makeTraverse(root.right)
        }
    }
    return result
}
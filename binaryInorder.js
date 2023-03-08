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
    let node = root
    const result = []
    while(node){
        if(!node.left){
            result.push(node.val)
            node = node.right
        }else{
            const pred = findPredecessor(node)
            if(pred.right === node){
                pred.right = null
                result.push(node.val)
                node = node.right
            }else{
                pred.right = node
                node = node.left
            }
        }
    }
    return result
};

function findPredecessor(root){
    let node = root.left
    while(node.right && node.right !== root){
        node = node.right
    }
    return node
}
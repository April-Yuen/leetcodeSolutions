// 206. Reverse Linked List

// Given the head of a singly linked list, reverse the list, and return the reversed list.

 

// Example 1:


// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]
// Example 2:


// Input: head = [1,2]
// Output: [2,1]
// Example 3:

// Input: head = []
// Output: []

var reverseList = function(head) {
    let curr = head
    let next = null
    let prev = null
    
//      you know that you're at the end of the list when it is equal to null. You also know you are at the head. 
    while(curr !== null){
        next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    return prev
};

// 83. Remove Duplicates from Sorted List

// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

 

// Example 1:


// Input: head = [1,1,2]
// Output: [1,2]
// Example 2:


// Input: head = [1,1,2,3,3]
// Output: [1,2,3]

var deleteDuplicates = function(head) {
    // pointing the curr pointer to the head. 
    let curr = head
    // while you are not at the tail, b/c the tail is always null. 
    while(curr !== null && curr.next !== null){
        // if the value of the current node is equal to the value of the next node
        if(curr.val === curr.next.val){
            // then we will skip curr.next and have the next value be the one after the next value. 
            curr.next = curr.next.next
        }else{
            // Otherwise, the pointer will go to the next value, as per usual. 
            curr = curr.next
        }
    }
    return head
};
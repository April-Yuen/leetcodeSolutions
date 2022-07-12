// Valid Parentheses

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

var isValid = function(s) {
    let map = new Map();
    const stack = []
    
    map.set(")", "(")
    map.set("}", "{")
    map.set("]", "[")
    
    for(let i = 0; i < s.length; i++){
        const curr = s[i]
        const last = stack[stack.length-1]
        
        if(map.has(curr) && map.get(curr)===last){
            stack.pop()
        }else{
            stack.push(curr)
        }
    }
    return stack.length === 0
 };


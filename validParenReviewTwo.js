// 20. Valid Parentheses

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

// createing a hash map that I will use to look up the characters in the code. 
// if the hashmap in the str has the character, 
// then I will push the matching closing bracket into the stack. 

function isValid(s){
    let map = {"(": ")", "[" : "]", "{" : "}"}
    let stack = []

    for(let element of s){
        if(map[element]){
            stack.push(map[element])
        }else if(stack.length > 0 && stack[stack.length-1] === element){
            stack.pop()
        }else{
            return false
        }
    }
    return stack.length === 0

}

console.log(isValid("()"))//true
console.log(isValid("()[]{}"))//true
console.log(isValid("(]"))//false
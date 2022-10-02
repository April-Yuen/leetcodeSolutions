// 118. Pascal's Triangle

// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:

// Input: numRows = 1
// Output: [[1]]
////////////////////////////////////////////////////////////////////////////////////

// 1. make sure I am accounting for edgecases through the conditionals if numrows is less than 1 or equal to 1. 

// Set the triangle to 1. 

// create a for loop to iterate and make sure I start the loop at 1 because I need to refer to the previous row. 

// declare previous row to the element before. the preview row must be added to give us the current row. 

// Set the curRow to []

// we want to push 1 because all of the rows start with 1. 

// Then iterate throught another for loop and set it to the previous row. 
// each element in the current row is the previous row's element and the element before. that's why it's prevRow[j] + prevRow[j-1]
// after we need to push the last 1 that goes to the end of the row. 
// push the curRow into the triangle. 

// Return triangle. 

var generate = function(numRows) {
    if(numRows < 1) return []
    if(numRows === 1) return [[1]]
    
    const triangle = [[1]]
    
    for(let i = 1; i < numRows; i++){
        let prevRow = triangle[i - 1]
        let curRow = []
        
        curRow.push(1)
        for(let j = 1; j < prevRow.length; j++){
            curRow[j] = prevRow[j] + prevRow[j - 1]
        }
        curRow.push(1)
        
        triangle.push(curRow)
    }
    return triangle
};
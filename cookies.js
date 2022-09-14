// Assign Cookies

// Assume you are an awesome parent and want to give your children some cookies. But, you should give each child at most one cookie.

// Each child i has a greed factor g[i], which is the minimum size of a cookie that the child will be content with; and each cookie j has a size s[j]. If s[j] >= g[i], we can assign the cookie j to the child i, and the child i will be content. Your goal is to maximize the number of your content children and output the maximum number.

 

// Example 1:

// Input: g = [1,2,3], s = [1,1]
// Output: 1
// Explanation: You have 3 children and 2 cookies. The greed factors of 3 children are 1, 2, 3. 
// And even though you have 2 cookies, since their size is both 1, you could only make the child whose greed factor is 1 content.
// You need to output 1.
// Example 2:

// Input: g = [1,2], s = [1,2,3]
// Output: 2
// Explanation: You have 2 children and 3 cookies. The greed factors of 2 children are 1, 2. 
// You have 3 cookies and their sizes are big enough to gratify all of the children, 
// You need to output 2.

var findContentChildren = function(g, s) {
//     set the count to 0
let count = 0
//     set the variable j to 0 because I will use it to iterate throught the size array. 
    let j = 0
//     sort both arrays so that it is easy to find the numbers from g that are less than or equal to j. 
    g.sort((a,b)=>a-b)
    s.sort((a,b) => a-b)
//     use a for loop to iterate through the array of the children. 
    for(let i = 0; i < g.length;){
//         if the size is less than or greater than the number of children, the count will go up. I also need to iterate through the array of children and we need to keep iterating through the size array. 
// if you include the i++ in the array, it will result in an error. should not iterate through the children unless the greed is less than the size. 
        if(s[j] >= g[i]){
            i++
            count++
            j++
//             if the size is not greater than the greed for each child, we need to keep iterating through the size array until we get to the end. we need to make sure that if the iteration is greater than the length of the array, we need to break. 
        }else{
            j++
            if(j > s.length){
                break
            }
        }
    }
//     return the count of the array outside of the for loop to get the answer. 
    return count
}
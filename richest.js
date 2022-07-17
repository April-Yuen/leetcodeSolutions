// 1672. Richest Customer Wealth

// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

var maximumWealth = function(accounts) {
    let sumsArray = []
    for(let i = 0; i < accounts.length; i++){
       let sums = accounts[i].reduce((acc,cur)=>acc+cur,0)
       sumsArray.push(sums)
    }
    let unique = [...new Set(sumsArray)].length
    if(unique===1){
        return sumsArray[0]
    }else{
        return Math.max.apply(null,sumsArray)
    }
};



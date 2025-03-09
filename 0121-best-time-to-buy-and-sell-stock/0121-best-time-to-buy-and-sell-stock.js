/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minNumber = Infinity ;
    let maxProfit = 0 ;
    for (price of prices){
        if(price < minNumber){
            minNumber = price;
        }else{
            maxProfit = Math.max(maxProfit, price - minNumber);
        }
    }
    return maxProfit ; 
};
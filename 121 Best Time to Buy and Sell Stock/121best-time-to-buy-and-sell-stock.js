/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let index = 0;
    let maxProfit = 0;
    while (index != prices.length) {
        let profit = 0;
        let maxLocalProfit = 0;
        for (let i = index + 1; i < prices.length; i++) {
            profit = prices[i] - prices[index];
            profit > maxLocalProfit && (maxLocalProfit = profit);
        }
        maxLocalProfit > maxProfit && (maxProfit = maxLocalProfit);
        index++;
    }

    return maxProfit;
};
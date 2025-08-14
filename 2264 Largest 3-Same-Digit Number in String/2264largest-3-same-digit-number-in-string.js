/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    res = [];
    for(let i = 2; i < num.length; i++){
        if(num[i] == num[i-1] && num[i] == num[i-2]) res.push(Number(num[i]));
    }
    return res.length > 0 ? Math.max(...res).toString().repeat(3) : "";};
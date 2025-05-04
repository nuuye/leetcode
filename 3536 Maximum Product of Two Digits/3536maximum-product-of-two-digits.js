/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function(n) {
    let array = n.toString().split('').map(Number);
    let num1 = array.splice(array.indexOf(Math.max(...array)), 1);
    let num2 = array.splice(array.indexOf(Math.max(...array)), 1);
    return num1 * num2;
};
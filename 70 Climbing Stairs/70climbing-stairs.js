/**
 * @param {number} n
 * @return {number}
 1 : 1
 2 : 2
 3 : 3
 4 : 5
 5 : 8
 6 : 13
 */
var climbStairs = function(n) {
    const memo = new Array(n + 1).fill(-1);
    function calcul(k) {
        if (k === 1) return 1;
        if (k === 2) return 2;
        if (memo[k] !== -1) return memo[k]; //éviter recalcul
        memo[k] = calcul(k - 1) + calcul(k - 2);
        return memo[k];
    }

    return calcul(n);
};
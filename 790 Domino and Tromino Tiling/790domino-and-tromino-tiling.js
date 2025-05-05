/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function (n) {
    const MOD = 1e9 + 7;
    const memo = new Array(n + 1).fill(-1);

    const dp = (k) => {
        if (k === 0) return 1;
        if (k === 1) return 1;
        if (k === 2) return 2;
        if (memo[k] !== -1) return memo[k];

        memo[k] = (2 * dp(k - 1) % MOD + dp(k - 3) % MOD) % MOD;
        return memo[k];
    };

    return dp(n);
};
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    let localAmount = nums.slice(0, k).reduce((acc, curr) => {
        return acc += curr;
    })
    let maxAmount = localAmount;

    for (let i = k; i < nums.length; i++) {
        localAmount = localAmount - nums[i - k] + nums[i];
        localAmount > maxAmount && (maxAmount = localAmount);
    }

    return localAmount > maxAmount ? localAmount/k : maxAmount/k;
};
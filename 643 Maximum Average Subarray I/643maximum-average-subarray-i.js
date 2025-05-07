/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    let left = 0;
    let sum = 0;
    let max = 0;
    for(let right = 0; right < nums.length; right++){
        sum += nums[right];
        while(right - left + 1 == k){
            sum > max && (max = sum);
            sum -= nums[left];
            left++;
        }
    }
    return max/k;
};
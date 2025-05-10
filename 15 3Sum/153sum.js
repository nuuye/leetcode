/**
 * @param {number[]} nums
 * @return {number[][]}
 -4 -1 -1 -1 0 1 2
 */
var threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    if(nums[0] > 0) return [];
    let result = new Set();
    for (let i = 0; i < nums.length - 2; i++) {
        let l = i + 1;
        let r = nums.length - 1;
        while (l < r) {
            let sum = nums[i] + nums[l] + nums[r];
            if (sum == 0){
                result.add(JSON.stringify([nums[i], nums[l], nums[r]]));
                l++;
                r--;
            } else if(sum < 0){
                l++
            } else {
                r--;
            }
        }
    }

    return Array.from(result).map(str => JSON.parse(str));
};
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    return nums.reduce((acc, curr) => {
        acc.push(nums[curr]);
        return acc;
    }, [])

};
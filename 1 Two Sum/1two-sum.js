/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        let myTarget = target - nums[i];
        if(nums.indexOf(myTarget, i + 1) > 0){
            return [i, nums.indexOf(myTarget, i + 1)];
        }
    }
    return [];
};
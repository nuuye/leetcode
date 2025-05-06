/**
 * @param {number[]} nums
 * @return {number}
 [1,3,1,2,2,4,3]
 */

var countCompleteSubarrays = function(nums) {
    let distinctCount = new Set(nums).size;
    let left = 0;
    let result = 0;
    for(let right = 0; right < nums.length; right++){
        let newSet = new Set(nums.slice(left, right + 1));
        while(newSet.size == distinctCount){
            result += nums.length - right;
            left++;
            newSet = new Set(nums.slice(left, right + 1));
        }
    }
    return result;
};
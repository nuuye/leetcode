/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    return nums.reduce((acc,curr) => {
        if(curr.toString().length % 2 == 0){
            acc += 1;
        }
        return acc;
    }, 0)
};
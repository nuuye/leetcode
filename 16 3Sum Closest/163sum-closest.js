/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 [-1,2,1,-4,3,4,1,9]
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a,b) => a - b);
    let result = nums[0] + nums[1] + nums[2];
    for(let a = 0; a < nums.length; a++){
        let i = a + 1;
        let j = nums.length - 1;
        while(i < j){
            let sum = nums[a] + nums[i] + nums[j];
            if(Math.abs(target - sum) < Math.abs(target - result)){
                result = sum;
            }
            if(sum < target){
                i++
            } else if (sum > target){
                j--;
            } else {
                return sum;
            }
        }
    }
    return result;
};
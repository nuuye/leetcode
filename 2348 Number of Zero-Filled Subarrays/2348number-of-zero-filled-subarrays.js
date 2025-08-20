/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function(nums) {
    let total = 0;
    let left = 0;
    for(let right = 0; right < nums.length; right++){
        if(nums[right] == 0){
            let size = 0;
            left = right;
            while(nums[left] == 0){
                size++;
                left++;
            }
            total += ( size * (size + 1) ) / 2;
            right = left;
        }
    }
    return total;
};
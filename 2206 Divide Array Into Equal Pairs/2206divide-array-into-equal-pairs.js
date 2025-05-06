/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    let freq = new Map();
    for(const num of nums){
        freq.set(num, (freq.get(num) || 0) + 1);
    }
    for(const value of freq.values()){
        if(value % 2 != 0){
            return false;
        }
    }
    return true;
};
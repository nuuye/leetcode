/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function(nums, k) {
    let newArr = [];
    nums.sort((a,b) => a - b);
    for(let i = 0; i<nums.length; i+=3){
        let subArray = nums.slice(i, i+3);
        if(Math.max(...subArray) - Math.min(...subArray) <= k){
            newArr.push(subArray);
        }
    }
    return newArr.length === nums.length / 3 ? newArr : [];
};
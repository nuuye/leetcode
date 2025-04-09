/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let myMap = new Map();
    for(let num of nums.sort((a,b) => a - b)){
        myMap.set(num, (myMap.get(num) || 0) + 1);
    }
    let mySet = new Set(nums);
    let uniqueNums = Array.from(mySet);
    uniqueNums.sort((a,b) => {
        return myMap.get(b) - myMap.get(a);
    });
    return uniqueNums.slice(0, k);
};
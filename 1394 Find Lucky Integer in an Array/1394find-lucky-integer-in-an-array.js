/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    let result = -1;
    let freqMap = new Map();
    for(const num of arr){
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }
    for(const [key,value] of [...freqMap.entries()]){
        if(key == value && key > result){
            result = key;
        }
    }
    return result;
};
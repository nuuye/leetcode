/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function(s) {
    let maxOdd = - Infinity;
    let minOdd = Infinity;
    let freqMap = new Map();
    for(const char of s){
        freqMap.set(char, (freqMap.get(char) || 0) + 1);
    }
    for(const value of freqMap.values()){
        if(value > maxOdd && value % 2 != 0){
            maxOdd = value;
        }
        if(value < minOdd && value % 2 == 0){
            minOdd = value;
        }
    }
    return maxOdd - minOdd;
};
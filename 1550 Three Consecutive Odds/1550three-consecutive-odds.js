/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    let counter = 0;
    let index = 0;
    while(counter < 3 && index < arr.length){
        if(arr[index] % 2 != 0){
            counter++
        } else {
            counter = 0;
        }
        index++;
    }
    return counter == 3;
};
/**
 * @param {number} k
 * @param {number[]} operations
 * @return {character}
 start: a 1
 aa 2
 aaaa 4
 aaaaaaaa 8  => 3 (*0)
 a.........a 16
 word len * 2^n0
 */
var kthCharacter = function (k, operations) {
    let array = [];
    let shift = 0;
    let stepLen = 1;

    for(const operation of operations){
        stepLen *= 2;
        array.push(stepLen);
        if(stepLen >= k) break;
    }
    
    for(let i = array.length - 1; i >= 0; i--){
        let half = array[i] / 2;
        if(k > half){
            k = k - half;
            if(operations[i] == 1){
                shift++;
            }
        }
    }
    const baseCharCode = 'a'.charCodeAt(0);
    return String.fromCharCode((shift % 26) + baseCharCode);
};
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if(!s) return true;
    let i = 0;
    let j = 0;
    while(i < s.length && j < t.length){
        let char = s[i];
        let searchChar = t[j];
        if(char == searchChar){
            i++;
            j++;
        } else {
            j++;
        }
    }
    return i == s.length;
    
};
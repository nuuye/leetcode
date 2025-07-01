/**
 * @param {string} word
 * @return {number}
 */
var possibleStringCount = function(word) {
    count = 1;
    for(let i = 1; i < word.length; i++){
        if(word[i] == word[i - 1]){
            count++;
        }
    }
    return count;
};
/**
 * @param {number} k
 * @return {character}
 */
var kthCharacter = function (k) {
    let word = 'a';
    let adds = '';
    let alphabet = [...'abcdefghijklmnopqrstuvwxyz'];
    while (word.length <= k) {
        for (const char of word) {
            adds += alphabet[(alphabet.indexOf(char) + 1) % alphabet.length];
        }
        word += adds;
        adds = '';
    }
    return word.slice(k-1, k);
};
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (!s) {
        return 0;
    }
    let window = [s[0]];
    let longestLength = 1;
    for (let i = 1; i < s.length; i++) {
        if (!window.includes(s[i])) {
            window.push(s[i]);
        } else {
            window.push(s[i]);
            window.splice(0, window.indexOf(s[i]) + 1);
        }
        window.length > longestLength && (longestLength = window.length);
    }
    return longestLength;
};
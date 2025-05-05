/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
    let left = 0;
    let countMap = new Map();
    let result = 0;
    let max = 0;

    for (let right = 0; right < s.length; right++) {
        countMap.set(s[right], (countMap.get(s[right]) || 0) + 1);
        max = Math.max(max, countMap.get(s[right]));

        // Only shrink window if we need more than k replacements
        while ((right - left + 1) - max > k) {
            countMap.set(s[left], countMap.get(s[left]) - 1);
            left++;
        }

        result = Math.max(result, right - left + 1);
    }

    return result;
};
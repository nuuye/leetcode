/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    let checkMap = new Map();
    for (const char of p) {
        checkMap.set(char, (checkMap.get(char) || 0) + 1);
    }

    let left = 0;
    let result = [];
    let dynamicMap = new Map();

    for (let right = 0; right < s.length; right++) {
        dynamicMap.set(s[right], (dynamicMap.get(s[right]) || 0) + 1);

        while (right - left + 1 == p.length) {
            let isAnagram = Array.from(checkMap.entries()).every(([key, value]) => {
                if (!dynamicMap.has(key) || dynamicMap.get(key) != value) {
                    return false;
                }
                return true;
            })
            if (isAnagram) {
                result.push(left);
            }
            dynamicMap.set(s[left], dynamicMap.get(s[left]) - 1);
            left++
        }
    }

    return result;
};
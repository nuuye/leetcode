/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    let checkMap = new Map();
    for (const char of s1) {
        checkMap.set(char, (checkMap.get(char) || 0) + 1);
    }

    let left = 0;
    let dynamicMap = new Map();
    for (let right = 0; right < s2.length; right++) {
        dynamicMap.set(s2[right], (dynamicMap.get(s2[right]) || 0) + 1);

        if (right - left + 1 == s1.length) {
            let isAnagram = [...checkMap.entries()].every(([key, value]) => {
                if (!dynamicMap.has(key) || dynamicMap.get(key) != value) {
                    return false;
                }
                return true;
            })

            if (isAnagram) {
                return true;
            }

            dynamicMap.set(s2[left], dynamicMap.get(s2[left]) - 1);
            left++;
        }
    }

    return false;
};
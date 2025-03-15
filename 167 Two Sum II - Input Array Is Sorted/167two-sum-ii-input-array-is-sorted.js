/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let startIndex = 0;
    let endIndex = numbers.length - 1;
    while (true) {
        if (numbers[startIndex] + numbers[endIndex] == target) {
            return [startIndex + 1, endIndex + 1];
        }
        else if (numbers[startIndex] + numbers[endIndex] > target) {
            endIndex -= 1;
        }
        else {
            startIndex += 1;
        }
    }

    return [];
};
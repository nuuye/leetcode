/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minSum = function (nums1, nums2) {
    let sum1 = 0;
    let sum2 = 0;
    let zeros1 = 0;
    let zeros2 = 0;
    for (const num1 of nums1) {
        if (num1 == 0) {
            sum1 += 1;
            zeros1++;
        } else {
            sum1 += num1;
        }

    }
    for (const num2 of nums2) {
        if (num2 == 0) {
            sum2 += 1;
            zeros2++;
        } else {
            sum2 += num2;
        }

    }

    if((sum1 > sum2 && zeros2 == 0) || (sum2 > sum1 && zeros1 == 0)){
        return -1;
    }

    return Math.max(sum1, sum2);

};
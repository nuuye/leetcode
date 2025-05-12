/**
 * @param {number[]} digits
 * @return {number[]}
 */
 function findEvenNumbers(digits) {
    const result = new Set();

    for (let i = 0; i < digits.length; i++) {
        for (let j = 0; j < digits.length; j++) {
            for (let k = 0; k < digits.length; k++) {
                if (i === j || j === k || i === k) continue; // Avoid using the same index
                const d1 = digits[i], d2 = digits[j], d3 = digits[k];

                if (d1 === 0) continue; // No leading zero
                if (d3 % 2 !== 0) continue; // Must be even

                const num = d1 * 100 + d2 * 10 + d3;
                result.add(num);
            }
        }
    }

    return Array.from(result).sort((a, b) => a - b);
}

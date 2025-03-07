function plusOne(digits: number[]): number[] {
    let num = BigInt(digits.join(''));
    let incremented = num + BigInt(1);
    return incremented.toString().split('').map(char => Number(char));
}

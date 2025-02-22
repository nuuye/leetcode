function romanToInt(s: string): number {
    let table: { [key: string]: number } = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let finalNumber: number = 0;
    for (let i = 0; i < s.split('').length; i++) {
        if (i > 0 && (table[s[i]] > table[s[i - 1]])) {
            finalNumber -= table[s[i - 1]];
            finalNumber += table[s[i]] - table[s[i - 1]];
        } else {
            finalNumber += table[s[i]];
        }
        console.log(finalNumber);
    }
    return finalNumber;
};
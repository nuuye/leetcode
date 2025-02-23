function reverseWords(s: string): string {
    return s.trim().split(' ').filter((char) => char != '').reverse().join(' ');
};
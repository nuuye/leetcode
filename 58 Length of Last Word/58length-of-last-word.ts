function lengthOfLastWord(s: string): number {
    let lastWord = s.trim().split(' ');
    return lastWord[lastWord.length - 1].length;
};
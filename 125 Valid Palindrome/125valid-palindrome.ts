function isPalindrome(s: string): boolean {
    const cleaned = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    return cleaned == cleaned.split('').reverse().join('');
};
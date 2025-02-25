function isSubsequence(s: string, t: string): boolean {
    let index = 0;
    
    for (const char of s) {
        index = t.indexOf(char, index); // Find 'char' in 't' starting from 'index'
        if (index === -1) return false; 
        index++;
    }
    
    return true; 
}
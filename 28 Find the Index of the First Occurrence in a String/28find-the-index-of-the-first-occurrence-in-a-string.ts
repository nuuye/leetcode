function strStr(haystack: string, needle: string): number {
    let indexOcc : number = -1;
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] == needle[0]) {
            console.log(i);
            if(needle.split('').every((char, index) => haystack[i + index] == char)){
                indexOcc = i;
                break;
            }
        }
    }
    return indexOcc;
};
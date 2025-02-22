function longestCommonPrefix(strs: string[]): string {
    let longestString: string = "";
    let longestWord: string =
        strs.reduce((acc, curr) => {
            if (curr.length > acc.length) {
                acc = curr;
            }
            return acc;
        })

    for(let i = 0; i < longestWord.split('').length; i++){
        if(strs.every((word) => word[i] === longestWord[i])){
            longestString += longestWord[i];
        } else {
            break;
        }
    }
    return longestString;
};
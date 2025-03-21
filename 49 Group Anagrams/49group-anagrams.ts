function groupAnagrams(strs: string[]): string[][] {
    let myMap = new Map<string, string[]>();

    for(let word of strs){
        let sortedWord : string = word.split('').sort().join('');
        if(myMap.has(sortedWord)){
            myMap.set(sortedWord, [...myMap.get(sortedWord), word]);
        } else {
            myMap.set(sortedWord, [word]);
        }
    }

    return Array.from(myMap.values());
};
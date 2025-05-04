/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function (dominoes) {
    let dominoMap = new Map();
    let count = 0;
    for (const domino of dominoes) {
        let sortedDomino = domino.sort((a,b) => a - b).join('');
        if(dominoMap.has(sortedDomino)){
            count += dominoMap.get(sortedDomino);
        }
        dominoMap.set(sortedDomino, (dominoMap.get(sortedDomino) || 0) + 1);
    }
    return count;
};
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    let splitMagazine = magazine.split('');
    return ransomNote.split('').every((char) => {
        let magazineCharIndex = splitMagazine.indexOf(char);
        if(magazineCharIndex >= 0){
            splitMagazine.splice(magazineCharIndex, 1);
            return true;
        } else {
            return false;
        }
    })
};
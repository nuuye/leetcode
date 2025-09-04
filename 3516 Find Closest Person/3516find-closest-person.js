/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function(x, y, z) {
    let person1 = Math.abs(z - x);
    let person2 = Math.abs(z - y);

    if(person1 == person2) return 0;
    else return person1 < person2 ? 1 : 2;
};
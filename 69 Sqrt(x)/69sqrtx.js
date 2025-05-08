/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x == 0) return 0;

    let res = 1;
    for(let num = 1; num < x; num++){
        let square = num * num;
        if(square == x){
            return num;
        } else if(square < x && square > res){
            res = num;
        }
        if(square > x){
            return res;
        }
    }
    return res;
};
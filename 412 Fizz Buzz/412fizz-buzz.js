/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let answer = Array(n).fill('');
    for(let i = 0; i < answer.length; i++){
        if((i + 1) % 3 == 0 && (i + 1) % 5 == 0){
            answer[i] = 'FizzBuzz';
        } else if((i + 1) % 3 == 0){
            answer[i] = 'Fizz';
        } else if((i + 1) % 5 == 0){
            answer[i] = 'Buzz';
        } else {
            answer[i] = `${i + 1}`;
        }
    }
    return answer;
};
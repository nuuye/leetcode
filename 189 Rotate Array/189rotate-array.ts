/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    let index : number = 0;
    while(index < k){
        nums.unshift(nums.pop())
        index += 1;
    }
};
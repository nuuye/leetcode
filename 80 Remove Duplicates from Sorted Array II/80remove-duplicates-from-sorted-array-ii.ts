function removeDuplicates(nums: number[]): number {
    let myMap = new Map<number, number>();
    for(let i = nums.length - 1; i >= 0; i--){
        if(myMap.get(nums[i]) > 1) {
            nums.splice(i, 1);
        } else {
            myMap.set(nums[i], (myMap.get(nums[i]) || 0) + 1)
        }
    }
    return nums.length;
};
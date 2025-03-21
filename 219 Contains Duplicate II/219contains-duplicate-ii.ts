function containsNearbyDuplicate(nums: number[], k: number): boolean {
    let myMap = new Map<number, number>();
    for(let i = 0; i < nums.length; i++){
        if(myMap.has(nums[i])){
            if(Math.abs(i - myMap.get(nums[i])) <= k){
                return true;
            } else {
                myMap.set(nums[i], i);
            }
        } else {
            myMap.set(nums[i], i);
        }
    }

    return false;
};
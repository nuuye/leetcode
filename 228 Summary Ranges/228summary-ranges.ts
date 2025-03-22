function summaryRanges(nums: number[]): string[] {
    if(nums.length === 1 ) {
        return [`${nums[0]}`];
    }
    let myMap = new Map<number, string>();
    let init: number = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1] + 1) {
            myMap.set(init, `${init}->${nums[i]}`)
        } else {
            if(i === 1) {
                myMap.set(init, `${init}`);
            }
            init = nums[i];
            if(i === nums.length - 1 || nums[i+1] - nums[i] > 1 ){
                myMap.set(init, `${init}`);
            }
        }
    }

    return Array.from(myMap.values());
};
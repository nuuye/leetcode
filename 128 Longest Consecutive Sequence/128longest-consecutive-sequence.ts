function longestConsecutive(nums: number[]): number {
    if (nums.length === 0) return 0;
    let max: number = 1;
    let counter: number = 1;
    let sortedArray: number[] = nums.sort((a, b) => a - b);
    for (let i = 1; i < sortedArray.length; i++) {
        if (sortedArray[i] === sortedArray[i - 1]) {
            continue;
        } else
            if (sortedArray[i] === sortedArray[i - 1] + 1) {
                counter += 1;
            } else {
                counter > max && (max = counter);
                counter = 1;
            }
    }

    return counter > max ? counter : max;
};
function singleNumber(nums: number[]): number {
    let objectCounter: Record<number, number> = {};

    nums.forEach(num => objectCounter[num] = (objectCounter[num] || 0) + 1);

    for (let key in objectCounter) {
        if (objectCounter[Number(key)] == 1) return Number(key);
    }

    return 0;

};
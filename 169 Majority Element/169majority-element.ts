function majorityElement(nums: number[]): number {
    let object: { [key: string]: number } = {};
     nums.forEach((number) => {
        object[number] = (object[number] || 0) + 1;
    });  
    return Number(Object.keys(object).find(key => object[key] === Math.max(...Object.values(object))));

};
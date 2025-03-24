function maxArea(height: number[]): number {
    let waterAmount = 0;
    let maxWaterAmount = 0;
    let startIndex = 0;
    let lastIndex = height.length - 1;
    while (startIndex != lastIndex) {
        waterAmount = (lastIndex - startIndex) * Math.min(height[startIndex], height[lastIndex]);
        waterAmount > maxWaterAmount && (maxWaterAmount = waterAmount);
        if (height[startIndex] < height[lastIndex]) {
            startIndex++;
        } else {
            lastIndex--;
        }
    }
    return maxWaterAmount;
};
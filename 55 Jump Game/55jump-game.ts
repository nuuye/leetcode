function canJump(nums: number[]): boolean {
    let maxReach = 0; // Farthest index we can reach

    for (let i = 0; i < nums.length; i++) {
        if (i > maxReach) return false; // If we reach an index we can't jump to, return false
        maxReach = Math.max(maxReach, i + nums[i]); // Update max reach
        if (maxReach >= nums.length - 1) return true; // If we can reach or exceed last index, return true
    }

    return false;
}
/**
 * @param {number[][]} moveTime
 * @return {number}
 */
var minTimeToReach = function(moveTime) {
    if (!moveTime || moveTime.length === 0 || moveTime[0].length === 0) {
        return 0;
    }
    
    const n = moveTime.length;
    const m = moveTime[0].length;
    
    // Create distance matrix filled with infinity
    const dist = Array(n).fill().map(() => Array(m).fill(Infinity));
    dist[0][0] = 0; // Starting point
    
    // Priority queue implementation using min-heap
    // We'll use an array and sort it after each insertion
    const pq = [[0, 0, 0]]; // [time, row, col]
    
    // Directions: up, right, down, left
    const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    
    while (pq.length > 0) {
        // Extract the minimum time entry
        const [currentTime, i, j] = pq.shift();
        
        // If we've reached the destination
        if (i === n - 1 && j === m - 1) {
            return currentTime;
        }
        
        // If this path is not optimal
        if (currentTime > dist[i][j]) {
            continue;
        }
        
        // Try all four directions
        for (const [di, dj] of directions) {
            const ni = i + di;
            const nj = j + dj;
            
            // Check if the new position is valid
            if (ni >= 0 && ni < n && nj >= 0 && nj < m) {
                // Calculate the earliest time we can arrive at the new position
                // We can only move to the new room when:
                // 1. We arrive at the current room (currentTime)
                // 2. The moveTime for the new room has passed (moveTime[ni][nj])
                const earliestStartTime = Math.max(currentTime, moveTime[ni][nj]);
                
                // It takes 1 second to move to the adjacent room
                const newArrivalTime = earliestStartTime + 1;
                
                // If this gives us a better time, update and add to queue
                if (newArrivalTime < dist[ni][nj]) {
                    dist[ni][nj] = newArrivalTime;
                    pq.push([newArrivalTime, ni, nj]);
                    // Sort the priority queue by time (first element of each entry)
                    pq.sort((a, b) => a[0] - b[0]);
                }
            }
        }
    }
    
    return -1; // Cannot reach the destination
};

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
    
    // MinPriorityQueue implementation
    class MinPriorityQueue {
        constructor() {
            this.values = [];
        }
        
        enqueue(val, priority) {
            this.values.push({ val, priority });
            this.bubbleUp();
        }
        
        bubbleUp() {
            let idx = this.values.length - 1;
            const element = this.values[idx];
            
            while (idx > 0) {
                let parentIdx = Math.floor((idx - 1) / 2);
                let parent = this.values[parentIdx];
                
                if (element.priority >= parent.priority) break;
                
                this.values[parentIdx] = element;
                this.values[idx] = parent;
                idx = parentIdx;
            }
        }
        
        dequeue() {
            if (this.values.length === 0) return null;
            
            const min = this.values[0];
            const end = this.values.pop();
            
            if (this.values.length > 0) {
                this.values[0] = end;
                this.sinkDown();
            }
            
            return min;
        }
        
        sinkDown() {
            let idx = 0;
            const length = this.values.length;
            const element = this.values[0];
            
            while (true) {
                let leftChildIdx = 2 * idx + 1;
                let rightChildIdx = 2 * idx + 2;
                let leftChild, rightChild;
                let swap = null;
                
                if (leftChildIdx < length) {
                    leftChild = this.values[leftChildIdx];
                    if (leftChild.priority < element.priority) {
                        swap = leftChildIdx;
                    }
                }
                
                if (rightChildIdx < length) {
                    rightChild = this.values[rightChildIdx];
                    if (
                        (swap === null && rightChild.priority < element.priority) || 
                        (swap !== null && rightChild.priority < leftChild.priority)
                    ) {
                        swap = rightChildIdx;
                    }
                }
                
                if (swap === null) break;
                
                this.values[idx] = this.values[swap];
                this.values[swap] = element;
                idx = swap;
            }
        }
        
        isEmpty() {
            return this.values.length === 0;
        }
    }
    
    // Create distance matrices for both odd and even number of moves
    const dist = Array(2).fill().map(() => 
        Array(n).fill().map(() => Array(m).fill(Infinity))
    );
    
    // Starting point at (0,0) with 0 moves (even)
    dist[0][0][0] = 0;
    
    // Priority queue with [time, row, col, moveCount]
    const pq = new MinPriorityQueue();
    pq.enqueue([0, 0, 0, 0], 0); // Value, priority (time)
    
    // Directions: up, right, down, left
    const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    
    // For early exit
    let minDestTime = Infinity;
    
    while (!pq.isEmpty()) {
        // Extract the minimum time entry
        const { val: [currentTime, i, j, moveCount], priority } = pq.dequeue();
        
        // Early termination: if we already found a better path to destination
        if (currentTime >= minDestTime) continue;
        
        const parity = moveCount % 2; // 0 for even, 1 for odd
        
        // If this path is not optimal
        if (currentTime > dist[parity][i][j]) {
            continue;
        }
        
        // If we've reached destination, update minDestTime
        if (i === n - 1 && j === m - 1) {
            minDestTime = Math.min(minDestTime, currentTime);
            continue;
        }
        
        // Try all four directions
        for (const [di, dj] of directions) {
            const ni = i + di;
            const nj = j + dj;
            
            // Check if the new position is valid
            if (ni >= 0 && ni < n && nj >= 0 && nj < m) {
                // Movement time alternates between 1 and 2 seconds
                const movementTime = (parity === 0) ? 1 : 2; // If even moves so far, next is 1, else 2
                
                // Calculate the earliest time we can arrive at the new position
                const earliestStartTime = Math.max(currentTime, moveTime[ni][nj]);
                const newArrivalTime = earliestStartTime + movementTime;
                const newMoveCount = moveCount + 1;
                const newParity = newMoveCount % 2;
                
                // If this gives us a better time for the new parity state
                if (newArrivalTime < dist[newParity][ni][nj]) {
                    dist[newParity][ni][nj] = newArrivalTime;
                    pq.enqueue([newArrivalTime, ni, nj, newMoveCount], newArrivalTime);
                }
            }
        }
    }
    
    // Return the minimum of the two possible states at destination
    const minTime = Math.min(dist[0][n-1][m-1], dist[1][n-1][m-1]);
    return minTime === Infinity ? -1 : minTime;
};
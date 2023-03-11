function getMaxEnergy(mat) {
    const n = mat.length;
    const dp = Array.from({length: n}, () => Array(n).fill(0));
    // dp[i][j] represents the maximum energy we can have at cell (i, j)
    // after reaching there from the top row
  
    // Initialize the last row of dp with the values of mat
    for (let j = 0; j < n; j++) {
      dp[n-1][j] = mat[n-1][j];
    }
  
    // Traverse the matrix from bottom to top
    for (let i = n-2; i >= 0; i--) {
      for (let j = 0; j < n; j++) {
        // Calculate the maximum energy we can have after reaching cell (i, j)
        dp[i][j] = mat[i][j] + Math.max(dp[i+1][j-1], dp[i+1][j], dp[i+1][j+1]);
        // Make sure the energy does not go below 0
        dp[i][j] = Math.max(dp[i][j], 0);
      }
    }
  
    // Return the maximum energy we can have at any cell in the first row
    return Math.max(...dp[0]);
  }

console.log(getMaxEnergy([
    [10, 20, 30, 40],
    [60, 50, 20, 80],
    [10, 10, 10, 10],
    [60, 50, 60, 50]
]))
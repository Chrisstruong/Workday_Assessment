function getMaxEnergy(mat) {
    const n = mat.length;
    let maxEnergy = 0;
    let dp = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));
  
    // Initialize the dp array with the initial energy
    for (let i = 0; i < n; i++) {
      dp[0][i] = 100 - mat[0][i];
      maxEnergy = Math.max(maxEnergy, dp[0][i]);
    }
  
    // Traverse the matrix using dynamic programming
    for (let i = 1; i < n; i++) {
      for (let j = 0; j < n; j++) {
        let energy = 0;
        if (j > 0) {
          energy = Math.max(energy, dp[i-1][j-1] - mat[i][j]);
        }
        energy = Math.max(energy, dp[i-1][j] - mat[i][j]);
        if (j < n-1) {
          energy = Math.max(energy, dp[i-1][j+1] - mat[i][j]);
        }
        dp[i][j] = energy;
        if (i === n-1) {
          maxEnergy = Math.max(maxEnergy, energy);
        }
      }
    }
  
    return maxEnergy;
  }

console.log(getMaxEnergy([
    [10, 20, 30, 40],
    [60, 50, 20, 80],
    [10, 10, 10, 10],
    [60, 50, 60, 50]
]))
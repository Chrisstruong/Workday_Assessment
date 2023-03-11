function getMaxEnergy(mat) {
    // Description: given a 4x4 matrix mat, the initial energy is 100. There are three ways to move when going the next row. j, j-1, j+1. As going the row, the energy will decrease by by the value of the row stepped on. The final energy can be negative.
    // Input:
    // + mat : a multi-dimensional array
    // Output: the maximum energy left
    // Thinking: I will hardcode since there is a stable 4x4 matrix. Start at i =0, then i =1, i =2, i = 3. When I take a look closely, there is a limit of movement of j. Not every j has the movement like (j, j-1, j+1).
    // Ex: 1) When i = 0 (start at index 0), the next j will be at j or j+1). Can not be j-1 because the value will be undefined
    // 2) when i = 3, the next j will be at j or j - 1.
    // 3) Only at i=1, and i = 2, the j can be at all three options: j-1, j, j+1. 
    // I will store 4 value in relation to the start of row (start at i=0, j=0, or i=0, j=1, or i=0, j=1, or i=0, j=2, or j=0, i=3)
    // Steps:
    // 1) Declear a initial energy variable, and an array to store minimum wasted energy each calculation
    // 2) First calculation based on the start i=0, j = 0. Next caculation will be the same and so on like j=1, 2, and 3
    // 3) At each new move, I will choose smallest energy to minus the initial energy
    // 4) At the end, we will have the four best minimum wasted energy (energy still have the highest energy left at the last row) in an array.
    // 5) Return the biggest energy left in that array

    mat = 

}


console.log(getMaxEnergy([
    [10, 20, 30, 40],
    [60, 50, 20, 80],
    [10, 10, 10, 10],
    [60, 50, 60, 50]
]))
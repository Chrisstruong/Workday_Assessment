function getMaxEnergy(mat) {
    // Description: given a 4x4 matrix mat, the initial energy is 100. There are three ways to move when going the next row. j, j-1, j+1. As going the row, the energy will decrease by by the value of the row stepped on. The final energy can be negative.
    // Input:
    // + mat : a multi-dimensional array. The format is mat[i][j]
    // Output: the maximum energy left
    // Thinking: 
    // 1) I will start at the first row. There are 4 starting point I need to track. mat[0][0], mat[0][1], mat[0][2], mat[0][3]. 
    // 2) When going next row (i=1), there are three options for j: j-1 (left), j(center), or j+1(right). Every element in the row can go with j, but at the beginning and the end, the options are j(center), j+1(right), and j(center), j-1(left) respectivelly. We have to track the current value j so as to give the approriate value for j
    // 3) When we can determine the position of j (j!==undefined), then choose the smallest energy in the row to calculate
    // 4) This process is keep going and going until we reach the last row

    // Steps:
    // 1) get the minEnergy will return the maxEnergy left => Declare the minEnergy, n (mat.length), let energy = 100
    // 2) Use two for loops for multi-dimensional array
    // 3) if left (j-1), center (j), right (j+1) are not undefined, then take smallest value among these. Otherwise calculating not undefined variables only
    // 4) Declare currEnergy to keep update the energy left after each row
    // 5) set currEnergy = minEnergy and then return minEnergy


    // Step 1:
    let minEnergy
    const n = mat.length
    let energy = 100

    // Step 2:
    for (let j = 0; j < n; j++) {
        let i = 0
        let currEnergy = energy - mat[i][j]
        let k = j
        for (i = 1; i < n; i++) {
            // Step 3:
            const left = (k > 0) ? mat[i][k - 1] : +Infinity
            const center = mat[i][k]
            const right = (k < n - 1) ? mat[i][k + 1] : +Infinity
            const minValue = Math.min(left, center, right)
            if (minValue === left) k--
            else if (minValue === right) k++
            //  Step 4:
            currEnergy -= minValue
        }
        minEnergy = currEnergy
    }
    // Step 5:
    return minEnergy

    // Time complexity: O(n^2) as there is nested loops
    // Space complexity: O(1) as the return is a int
    // I am afraid to say that this solution is based on chatGPT, but I have changed Math.min instead of Math.max because I do not understand why it uses Math.max while we need to find the min energy each row so as to find max energy left.
}

let input = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]
console.log(getMaxEnergy(input))


// Cheating version for matrixTraversal
function cheatingVersion(mat) {
    // Since we can go columly (center), sort each row in the array from smallest to biggest. Then take 100 - first element of each row. hihihi! 
    let initialEnergy = 100
    for (let i = 0; i < mat.length; i++) {
        mat[i].sort((a, b) => a - b)// input2 = [[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,16]]
        initialEnergy -= mat[i][0] // initialEnergy(100) - 1 - 5 - 9 - 13 = 72
    }
    return initialEnergy

    // Time complexity: O(1) since the runtimes is approximately the same since there is given 4x4 matrix 
    // Space complexity: 0(1) since there is only an integer in return

}

let input2 = [
    [4, 3, 2, 1],
    [8, 7, 6, 5],
    [12, 11, 10, 9],
    [16, 15, 14, 13]
]
console.log(cheatingVersion(input))


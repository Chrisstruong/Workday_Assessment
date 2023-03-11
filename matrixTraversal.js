function getMaxGrossValue(arr) {
    const n = arr.length;
    let maxGrossValue = -Infinity;
    let prefixSum = [0];

    // Calculate prefix sums
    for (let i = 1; i <= n; i++) {
        prefixSum[i] = prefixSum[i - 1] + arr[i - 1];
    }

    // Check all valid triplets
    for (let i = 1; i <= n - 2; i++) {
        for (let j = i + 1; j <= n - 1; j++) {
            for (let k = j + 1; k <= n; k++) {
                // Calculate the gross value of the triplet
                const grossValue =
                    prefixSum[i] - prefixSum[0] -
                    (prefixSum[j] - prefixSum[i]) +
                    (prefixSum[k] - prefixSum[j]) -
                    (prefixSum[n] - prefixSum[k]);

                // Update the maximum gross value if the current one is greater
                if (grossValue > maxGrossValue) {
                    maxGrossValue = grossValue;
                }
            }
        }
    }

    // Return the maximum gross value
    return maxGrossValue;
}

console.log(getMaxEnergy([
    [10, 20, 30, 40],
    [60, 50, 20, 80],
    [10, 10, 10, 10],
    [60, 50, 60, 50]
]))
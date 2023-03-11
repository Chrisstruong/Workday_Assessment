function getMaxGrossValue(arr) {
    // Description: given an array of n integers. Calculate the maximumGrossvalue based on grossvalue = sum(i[1],1) - sum(i[1],i[2]) + sum(i[2],i[3]) - sum(i[3], n+1)
    // Input: arr : array of integers
    // Output: RETURN the maximum gross value
    // Thinking: I will use three for loops to run through array so as to get three index at a time. After that, compare these elements with the condition i[1]<=i[2]<=i[3]. If they meet the condition, then calculate grossvalue. I think we can have a lot of grossvalue. Then Return the max one
    // Steps:
    // 1) declare max value so as to return later
    // 2) Run for loop with variable i
    // 3) Run for loop with variable j = i+1
    // 4) Run for loop with variable k = j+1
    // 5) Compare max with the latest grossvalue
    // 6) Return

    // STEP 1
    let maxGrossValue = 0
    let grossValue
    let n = arr.length

    // STEP 2,3,4:
    for (let i=0; i < n-2; i++) {//the reason why arr.length -2 because we still have j, k to track. If I run until the end, j and k will be undefined
        for (let j = i+1; j < n-1;j++){
            for (let k = j+1; k < n; k++) {
                if (arr[i] <= arr[j] && arr[j]<=arr[k]) {
                    grossValue = (arr[i] + 1) - (arr[i]+arr[j]) + (arr[j]+arr[k]) - (arr[k]-n+1)
                }
                // STEP 5:
                if (grossValue > maxGrossValue) {
                    maxGrossValue = grossValue
                }
            }
        } 
    }

    // STEP 6:
    return maxGrossValue

    // Time complexity: O(n^3) since there three for loops. Everytime the length of the input increase by one, the runtime will time 3
    // Space complexity: O(1) since return an integer

    // I am not very sure if this solution is 100% correct. If you had a bit of time, I would appreciate your help to make my current solution better.
    
  }


  console.log(getMaxGrossValue([5,9,101]))
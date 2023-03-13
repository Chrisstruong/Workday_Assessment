function deviceNameSystem(devicenames) {

    // Description: Given an array of strings and some of them are repeated strings. The main point of this challenge is to make each repeated strings to be unique by adding the number at the end of their strings. Starting with number 1.
    // Input: 
    // + "devicenames" : array of strings
    // Output: RETURN the array of unique string

    // Thinking: I need to declare an array to store repeated strings. And then compare it to the original strings. I will have another variable to store the repeated times(repeatedTimes). I will add the num at the end of string in the original array if the repeated times is >= 1
    // Steps:
    // 1) Use filter method to create an array with repeated strings.
    // 2) Declare a variable to store repeated times.
    // 3) Using the nested loop to know how many times of the strings in "firstAppearedDevice" repeated. If it is >= 1, then add number at the end in the original array. The reason why it has to be >= 1 as I want to add 1 at the beginning.
    // 4) RETURN the original array "devicenames"

    // Step 1:
    const firstAppearedDevice = devicenames.filter((name) => {
        return devicenames.indexOf(name) !== devicenames.lastIndexOf(name)
    })
    // firstAppearedDevice = ['switch', 'tv']

    // Step 2:
    let repeatedTimes
    
    // Step 3:
    for (let i = 0; i < firstAppearedDevice.length; i++) {
        repeatedTimes = -1//it personally has to be -1 because I want to avoid adding 1 at the first repeated. Ex: If there is a first repeated, repeatedTime = (-1)+1 = 0, then 0 < 1 (repeatedTimes >= 1 is the condition) => false => No adding 1 at the first appeared
        for (let j = 0; j < devicenames.length; j++){
            if (firstAppearedDevice[i] === devicenames[j]) {
                repeatedTimes++
            }
            if(firstAppearedDevice[i] === devicenames[j]&& repeatedTimes >= 1) {
                devicenames[j] += repeatedTimes
            }
            
        }
    }

    // Step 4:
    return devicenames

    // Time complexity: O(n^2) as there is a nested loop. The runtimes = the length of input ^ 2
    // Space complexity: O(n) as the length of output is proportional to the length of input. If the length of input is 100, the output has the length of 100

}

console.log(deviceNameSystem(['switch', 'switch', 'switch', 'tv','tv', 'computer']))
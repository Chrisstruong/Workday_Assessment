function deviceNameSystem(devicenames) {
    // const map = new Map()
    // const result = []
    // for (const name of devicenames) {
    //     const count = map.get(name) || 0 //get current count or 0 if not exitsts
    //     console.log(count)
    //     const newName = count ===0 ? name :`${name}${count}`//add count suffix if needed
    //     result.push(newName)
    //     map.set(name, count+1) //increment count

    // }
    // return result

    const alreadyUniqueString = devicenames.filter((name) => {
        return devicenames.indexOf(name) === devicenames.lastIndexOf(name)
    })

    const firstAppearedDevice = devicenames.filter((name) => {
        return devicenames.indexOf(name) !== devicenames.lastIndexOf(name)
    })
    firstAppearedDevice.sort()
    let count = 1
    firstAppearedDevice[0]+=0
    for (let i = 1; i < firstAppearedDevice.length; i++) {
        let a = firstAppearedDevice[i].slice(0)
        let b = firstAppearedDevice[i-1].slice(0,-1)
        if (a !== b) {count = 0}
        firstAppearedDevice[i] += `${count}`
        count++
    }

    for (let j = 0; j < firstAppearedDevice.length; j++) {
       firstAppearedDevice[j]= firstAppearedDevice[j].replace("0","")
    }

    
    const result = [...alreadyUniqueString, ...firstAppearedDevice]
    return result

}

console.log(deviceNameSystem(['switch', 'switch', 'switch', 'tv','tv', 'computer']))
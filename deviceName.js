function deviceNameSystem(devicenames) {
    const map = new Map()
    const result = []
    for (const name of devicenames) {
        const count = map.get(name) || 0 //get current count or 0 if not exitsts
        console.log(count)
        const newName = count ===0 ? name :`${name}${count}`//add count suffix if needed
        result.push(newName)
        map.set(name, count+1) //increment count

    }
    return result
}

console.log(deviceNameSystem(['switch', 'switch','switch']))
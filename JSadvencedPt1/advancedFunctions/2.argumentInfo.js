function Type (...thing) {
    let types = {}
    //console.log(thing)
    for (let element of thing) {
        //console.log(element)
        const type = typeof element
        //console.log(type, element)
        console.log(`${type}: ${element}`)
        if (types[type] == undefined) {
            types[type] = 0
        }
        types[type]++
    }

    const test = Array.from((Object.entries(types).sort((a,b) => b[1] - a[1])))
  
    for (let count of test) {
        console.log(`${count[0]} = ${count[1]}`)
    }
}

Type({ name: 'bob'}, 3.333, 9.999)
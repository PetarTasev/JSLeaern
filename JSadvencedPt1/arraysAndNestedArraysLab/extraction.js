extraction = (array) => {
    const finalArray = []
    finalArray[0] = array[0]
    for (let n = 1; n < array.length; n++) {
        if (array[n] >= finalArray[finalArray.length - 1]) {
            finalArray.push(array[n])
        }
    }
    return (finalArray)
}
extraction ([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    )
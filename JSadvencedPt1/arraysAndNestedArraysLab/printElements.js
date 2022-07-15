printElements = (array, n) => {
    let finalArray = []
    for (let a = 0; a < array.length; a += n) {
        if (array[a] != undefined) {
        finalArray.push(array[a])
        }
    }
    return finalArray
}
printElements (['5', 
'20', 
'31', 
'4', 
'20'], 
2
)
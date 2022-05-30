rotateArray = (array, rotations) => {
    for (let n = 0; n < rotations; n++) {
        let last = array.pop()
        array.unshift(last)
    }
    let connect = array.join(" ")
    console.log(connect)
}

rotateArray(['1', 
'2', 
'3', 
'4'], 
2
)
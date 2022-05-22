function validityChecker (x1, y1, x2, y2) {
    x1 = parseInt(x1)
    y1 = parseInt(y1)
    x2 = parseInt(x2)
    y2 = parseInt(y2)

    var total = Math.sqrt(((0 - x1) * (0 - x1)) + ((0 - y1) * (0 - y1)))
    var total2 = Math.sqrt(((0 - x2) * (0 - x2)) + ((0 - y2) * (0 - y2)))
    var total3 = Math.sqrt(((x1 - x2) * (x1 - x2)) + ((y1 - y2) * (y1 - y2)))

if (total % 1 == 0) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`)
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)
    }

    
    if (total2 % 1 == 0) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`)
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`)
    }

    if (total3 % 1 == 0) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
    }



}

validityChecker (3, 0, 0, 4)
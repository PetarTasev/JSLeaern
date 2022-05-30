addAndRemove = (commands) => {
    const array = [];
    for (let n = 1; n <= commands.length; n++) {
    if (commands[n - 1] == 'add') {
        array.push(n)
    } else {
        array.pop(n)
    }
    }
    if (array.length == 0) {
        console.log('Empty')
    } else {
        for (let digit of array) {
            console.log(digit)
        }
    }
}


addAndRemove (
    ['add', 
    'add', 
    'remove', 
    'add', 
    'add']
    
)

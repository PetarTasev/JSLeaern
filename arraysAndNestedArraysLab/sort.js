function sort (array) {
    array.sort(sortingFunction)

    function sortingFunction (current, next) {
        if (current.length === next.length) {
            return current.localeCompare(next)
        }
        return current.length - next.length
    }
    console.log(array.join("\n"))
}

sort (
    ['Isacc', 
    'Theodor', 
    'Jack', 
    'Harrison', 
    'George']
    
)
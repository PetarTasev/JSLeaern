function sort (array, sortWay) {
    if (sortWay == 'asc') {
        array.sort((a, b) => a - b)
    } else {
        array.sort((a, b) => b - a)
    }
    return array
}
const thing = [9,2,8,5,6]
console.log(thing.sort((a, b) => b - a))
console.log(thing.sort((a, b) => b + a))

console.log(sort([3, 1, 2, 10], 'asc'))


nameList = (array) => {
    array.sort((a,b) => a.localeCompare(b));
    for (let n = 1; n <= array.length; n++) {
        console.log(`${n}.${array[n - 1]}`)
    }
}
nameList(["John", "Bob", "Christina", "Ema", "alpha"])

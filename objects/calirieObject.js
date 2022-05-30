function calorieObject (array) {
    const object = {};
    for (let n = 0; n < array.length; n += 2) {
        let name = array[n];
        let cal = Number(array[n + 1])
        object[name] = (cal)
    }
    console.log(object)
}

calorieObject (['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])
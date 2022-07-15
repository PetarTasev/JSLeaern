function price (array) {

    const convert = {}

    for (let thing of array) {
        let [city, item, price] = thing.split(' | ');
        price = Number(price)
        convert[item] = [price, city]
    }

    const final = {}
    for (let food in convert) {
        if (final[food.item] == undefined) {

        } else {
            
        }
    }
}

price (
['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
) 

// 51min in the lecture if your dumb enough not you figure it out

// when iterating a array with "for element in object" element
// is the key now the whole thing so you can call the whole
// object again on that key and thats how you make the magin happen
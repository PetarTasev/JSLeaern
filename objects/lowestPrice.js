function lowerst (array) {
/*
-- split the array
-- create a ibject if the cheapest foods
-- 
*/
let cheepestFood = {}
for (let cityPrice of array) {
    let [town, product, price] = cityPrice.split(' | ')
    price = Number(price)
    if (cheepestFood[product] == undefined) {
        cheepestFood[product] = [price, town]
    } else {
        if (cheepestFood[product][0] > price) {
            cheepestFood[product] = [price, town]
        }
    }
}

for (let instence in cheepestFood) {
console.log(`${instence} -> ${cheepestFood[instence][0]} (${cheepestFood[instence][1]})`)
}


}

lowerst (['Sofia City | BMW | 100000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'Mexico City | BMW | 99999',
'New York | Burger | 10']
)
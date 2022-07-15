function catalog (array) {

    let list = {}
    for (let individual of array) {
        if (list[individual[0]] == undefined) {
            list[individual[0]] = []
        }
        list[individual[0]].push(individual)
    }
    let letters = Object.keys(list)

    letters.sort((a,b) => a.toLowerCase().localeCompare(b.toLowerCase()))
    
    for (let key of letters) {
        console.log(key) 
        list[key].sort((a,b) => a.toLowerCase().localeCompare(b.toLowerCase()))
        for (let word of list[key]) {
            let [name, number] = word.split(' : ')
            console.log(`  ${name}: ${number}`)
        }
    }
}

catalog (['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10'])

catalog (['Banana : 2',
"Rubic's Cube : 5",
'Raspberry P : 4999',
'Rolex : 100000',
'Rollon : 10',
'Rali Car : 2000000',
'Pesho : 0.000001',
'Barrel : 10']
)
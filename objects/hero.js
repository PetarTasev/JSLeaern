function heros (array) {
    const finalObject = []
    for (const hero of array) {
        let [name, level, items] = (hero.split(' / '))
        const power = Number(level)
        const invetory = items ? items.split(", ") : []
        finalObject.push({name : name, level : power, items: invetory})

    }
    console.log(JSON.stringify(finalObject))
}
 
heros (['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
)
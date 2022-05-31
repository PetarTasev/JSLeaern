function heros (array) {
    const finalObject = []
    for (const hero of array) {
        const heroInfo = (hero.split(' / '))
        const heroStats = {
            name: (heroInfo[0]),
            level: Number(heroInfo[1]),
            items: (heroInfo[2]).split(', ')
        }
    
        finalObject.push(heroStats)

    }
    console.log(JSON.stringify(finalObject))
}
 
heros (['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
)
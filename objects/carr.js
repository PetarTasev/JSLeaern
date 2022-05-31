function factory (car) {
    const engineLibrery =  {
        smallEngine: { power: 90, volume: 1800 },
        normalEngine: { power: 120, volume: 2400 },
        monsterEngine: { power: 200, volume: 3500 }
    }
    const carriageLibrery = {
        hatchback: { type: 'hatchback', color: car.color },
        coupe:  { type: 'coupe', color: car.color }
    }
    
    const finalCar = {}
    finalCar.model = car.model;
    const power = car.power;
    if (power <= 90) {
        finalCar.engine = engineLibrery.smallEngine;
    } else if (power <= 120) {
        finalCar.engine = engineLibrery.normalEngine;
    } else {
        finalCar.engine = engineLibrery.monsterEngine;
    }

    if (car.carriage == 'hatchback') {
        finalCar.carriage = carriageLibrery.hatchback;
    } else {
        finalCar.carriage = carriageLibrery.coupe;
    }

    var wheel = car.wheelsize
    if (wheel % 2 == 0) {
        wheel--
    }
    finalCar.wheels = [wheel, wheel, wheel, wheel]


    return finalCar
}

factory (
    { model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
)

console.log('-------------------')

factory ({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }
)
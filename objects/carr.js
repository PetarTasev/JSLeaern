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


// you create a array of objects that contain all the types
// of engines and then you use the function fillter to select
// the right one 
// engine: engines.filter(e => e.power >= wantedCar.power) [0]
// engines besing the engine library and 'e' beaing the given 
// engines, you echeck if the power of sed engines if big 
// enough for the needed capacoty and the follter fucntion 
// is like a for cicle in the array with the () folowing 
// being a lambda that talles them the specificartions
// also the [0] that was placed was there to tell the fucntion
// to return only one element aka a array with the index 0 
// because if its now that way this function will return a 
// array filled with all the elements that folow the one we need 
// ohhhhhhhhhhh so the function is returning all the lements 
// that follow we just call our of the bat we call index 0
// and thats why we get a value not a array full of objects
function cookingByNumbers (number, command1, command2,command3, command4, command5) {

number = Number(parseInt(number));

let commands =  [command1, command2, command3, command4, command5];


let chop = x => x / 2;
let dice = x => Math.sqrt(x);
let spice = x => ++x;
let bake = x => x * 3;
let fillet = x => x * 0.8;

for (let n = 0; n < commands.length; n++) {
    switch (commands[n]) {
        case 'chop':
            number = chop(number);
            console.log(number);
            break;
        case 'dice':
            number = dice(number);
            console.log(number);
            break;
        case 'spice':
            number = spice(number);
            console.log(number);
            break;
        case 'bake':
            number = bake(number);
            console.log(number);
            break;
        case 'fillet':
            number = fillet(number);
            console.log(number)
            break;
    }
}

}
cookingByNumbers ('32', 'chop', 'chop', 'chop', 'chop', 'chop')
console.log('---------------------')
cookingByNumbers ('9', 'dice', 'spice', 'chop', 'bake', 'fillet')

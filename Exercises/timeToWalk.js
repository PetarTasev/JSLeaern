function timeToWalk (steps, stepLength, speed) {
    let distance = steps * stepLength / 1000;
    let timeInhours = distance / speed;

    let hour = Math.floor(timeInhours);
    let min = Math.floor(timeInhours % 1 * 60);
    let seconds = Math.round();

    console.log(hour)
    console.log(min)
    console.log(seconds)

}

timeToWalk (4000, 0.60, 5)
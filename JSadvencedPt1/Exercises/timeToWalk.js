function timeToWalk (steps, stepLength, speed) {
    var speedInMin = speed / 3.6;
    var distance = stepLength * steps;
    var totalSec = Math.round(distance / speedInMin);
    var totalMin = totalSec / 60;
    var breakMin = Math.floor(distance / 500);
 
    var hour = Math.floor(totalMin / 60);
    var min = Math.floor(totalMin % 60) + breakMin;
    var sec = totalSec % 60; 

    console.log(hour > 10 ? '' : '0' + hour + ':' + (min > 10 ? '' : '0') + min + ':' + (sec > 10 ? '' : '') + sec)
}

timeToWalk (4000, 0.60, 5)
console.log("--------")
timeToWalk (2564, 0.70, 5.5)


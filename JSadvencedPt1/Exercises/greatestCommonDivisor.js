function GreatestCommonDividor (FirstNumber, SecondNumber) {
   
    var biggest
    if (FirstNumber > SecondNumber) {
        biggest = FirstNumber;
    } else {
        biggest = SecondNumber;
    }
    biggest = parseInt(biggest);
    for (let n = biggest; n >= 1; n--) {
        if ((FirstNumber % n == 0 && SecondNumber % n == 0)) {
            return console.log(n);
        }
    }
}
GreatestCommonDividor (2154, 458)
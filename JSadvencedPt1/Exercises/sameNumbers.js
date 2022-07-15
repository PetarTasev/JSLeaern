function sameNumber (number) {
    let string = String(number)
    let valid = true;
    let sum = 0;
    for (let a = 0; a < string.length; a++) {
        if (string.charAt(a) !== string.charAt(a+1) && a != string.length - 1) {
            valid = false;
        }
        sum += Number(string.charAt(a));
    }
    console.log(valid);
    console.log(sum);

    
}

sameNumber(22222);

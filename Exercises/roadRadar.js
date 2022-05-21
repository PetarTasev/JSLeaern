function roadRadar (speedd, area) {
    var limit
    var status
    
    switch (area) {
        case "motorway":
                limit = 130;
            break;
        case "interstate":
                limit = 90;
            break;
        case 'city':
                limit = 50;
            break;
        case 'residential':
                limit = 20;
            break;
      }

    if (speedd <= limit ) {
        console.log(`Driving ${speedd} km/h in a ${limit} zone`)
    } else {
        var over = speedd - limit;
        if (over <= 20) {
            status = 'speeding'
            console.log(`The speed is ${over} km/h faster than the allowed speed of ${limit} - ${status}`)
        } else if (over <= 40){
            status = 'excessive speeding'
            console.log(`The speed is ${over} km/h faster than the allowed speed of ${limit} - ${status}`)
        } else {
            status = 'reckless driving'
            console.log(`The speed is ${over} km/h faster than the allowed speed of ${limit} - ${status}`)
        }
    }
}
roadRadar (40, 'city')
roadRadar (21, 'residential')
roadRadar (120, 'interstate')
roadRadar (200, 'motorway')

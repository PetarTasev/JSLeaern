function towns (array) {

    class Town {
        constructor (name, lat, long) {
            this.Town = name
            this.Latitude = Number(lat)
            this.Longitude = Number(long)
        }
    }

    let result = []
    for (let n = 1; n < array.length; n++) {
         let location = array[n].split('|').map(t => t.trim())
         location.pop()
         location.shift()

        let name = location[0]
        let lat = Number(location[1]).toFixed(2)
        let long = Number(location[2]).toFixed(2)
        let town = new Town(name, lat, long)
        result.push(town)
    }
    console.log(JSON.stringify(result))

    
}

towns (['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |'])
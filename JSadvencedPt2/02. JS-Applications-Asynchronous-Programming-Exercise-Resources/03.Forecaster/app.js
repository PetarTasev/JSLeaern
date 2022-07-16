function attachEvents() {
    
    const city = document.getElementById('location')
    const url = 'http://localhost:3030/jsonstore/forecaster/locations'
    const forcastURL = 'http://localhost:3030/jsonstore/forecaster/today/'
    const upcomingURL = 'http://localhost:3030/jsonstore/forecaster/upcoming/'
    const btn = document.getElementById('submit')
    const Sunny = '&#x2600'
    const Partly = '&#x26C5'
    const Overcast = '&#x2601'
    const Rain = '&#x2614'
    const Degrees = '&#176'


    const todaysForcast = document.getElementById('current')
    const upcomingForcast = document.getElementById('upcoming')

    btn.addEventListener('click', forcast)

    function forcast (ev) {
        let location = '' 
        fetch(url)
            .then(info => info.json())
            .then(data => {
                data.forEach(place => {
                    if (place.code == city.value) {
                         return location = place.code 
                    }
                })

                fetch(`${forcastURL}${location}`)
                    .then(thing => thing.json())
                    .then(input => {
                        const condition = input.forecast.condition
                        const high = input.forecast.high
                        const low = input.forecast.low
                        const name = input.name

                        let code = ''
                        if (condition == 'Sunny') {
                            code = Sunny
                        } else if (condition == 'Rain') {
                            code = Rain
                        } else if (condition == 'Overcast') {
                            code = Overcast
                        } else if (condition == 'Partly Sunny') {
                            code = Partly
                        }

                        let block = document.getElementById('forecast')
                        block.style.display = 'block'
                        let div = document.createElement('div')
                    
                        console.log()
                
                        div.innerHTML = 
                        `<div class="forecasts">
                           <span class="condition symbol">${code}</span>
                           <span class="condition">
                             <span class="forecast-data">${name}</span>
                             <span class="forecast-data">${low}${Degrees}/${high}${Degrees}</span>
                             <span class="forecast-data">${condition}</span>
                           </span>
                        </div>`
                        todaysForcast.appendChild(div)
                       console.log('we here')

                        })
                        fetch(`${upcomingURL}${location}`)
                            .then(info => info.json())
                            .then(data => {
                                
                                const div = document.createElement('div')
                                div.className = 'forecast-info'
                                const info = data.forecast
                                let codes = []
                                data.forecast.forEach(entrie => { 
                                    const condition = entrie.condition
                                    if (condition == 'Sunny') {
                                    codes.push(Sunny)
                                } else if (condition == 'Rain') {
                                    codes.push(Rain)
                                } else if (condition == 'Overcast') {
                                    codes.push(Overcast)
                                } else if (condition == 'Partly sunny') {
                                    codes.push(Partly)
                                } else {
                                    throw Error
                                }
                                })
                                
                                div.innerHTML = 
                                `
                                <span class="upcoming">
                                <span class="symbol">${codes[0]}</span>
                                <span class="forecast-data">${info[0].low}${Degrees}/${info[0].high}${Degrees}</span>
                                <span class="forecast-data">${info[0].condition}</span>
                                </span>
                                <span class="upcoming">
                                <span class="symbol">${codes[1]}</span>
                                <span class="forecast-data">${info[1].low}${Degrees}/${info[1].high}${Degrees}</span>
                                <span class="forecast-data">${info[1].condition}</span>
                                </span> 
                                <span class="upcoming">
                                <span class="symbol">${codes[2]}</span>
                                <span class="forecast-data">${info[2].low}${Degrees}/${info[2].high}${Degrees}</span>
                                <span class="forecast-data">${info[2].condition}</span>
                                </span>
                                `
                                upcomingForcast.appendChild(div)
                            })
            })
            .catch(error => {
            })
                }
}

attachEvents();



/*<div class="forecast-info
<span class="upcoming">
<span class="symbol"></span>
<span class="forecast-data">6°/17°</span>
<span class="forecast-data">Partly sunny</span>
</span> */
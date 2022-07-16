function attachEvents() {
    
    const city = document.getElementById('location')
    const url = 'http://localhost:3030/jsonstore/forecaster/locations'
    const forcastURL = 'http://localhost:3030/jsonstore/forecaster/today/'
    const upcomingURL = 'http://localhost:3030/jsonstore/forecaster/upcoming/'
    const btn = document.getElementById('submit')

    const todaysForcast = document.getElementById('current')
    const upcomingForcast = document.getElementById('upcoming')

    btn.addEventListener('click', forcast)

    function forcast (ev) {
        let location = '' 
        fetch(url)
            .then(info => info.json())
            .then(data => {
                console.log('hello 1')
                const locations = data
                locations.forEach(place => {
                    if (place.code == city.value) {
                        location = place.name 
                    }
                })

                fetch(`${forcastURL}${location}`)
                    .then(thing => thing.json())
                    .then(input => {

                    })






            })
            console.log('hello 2')
                }
}

attachEvents();
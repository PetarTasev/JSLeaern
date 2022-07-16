function solve() {

    // when in motion only arrive is enabled 
    // and the info box shows the upcoming stop


    // when not in motion only deaprt in enabled
    // and the info box shows the curent stop

    //default
    // info box is 'Not Connexted'
    // arrive button is disabled
    // id of thefirst stop is 'depot'

    const infoBox = document.getElementById('info')
    const url = 'http://localhost:3030/jsonstore/bus/schedule'
    let curentStop = 'depot'
    let stopName = ''

    const departBtn = document.getElementById('depart')
    const arriveBtn = document.getElementById('arrive')

    function depart() {
        departBtn.disabled = true
        arriveBtn.disabled = false

        fetch(`${url}/${curentStop}`)
            .then(info => info.json())
            .then(data => {
                stopName = data.name
                infoBox.textContent = `Next stop ${stopName}`
                curentStop = data.next
            })


    }

    function arrive() {
        arriveBtn.disabled = true
        departBtn.disabled = false

        infoBox.textContent = `Arriving at ${stopName}`
    }

    return {
        depart,
        arrive
    };
}

let result = solve();
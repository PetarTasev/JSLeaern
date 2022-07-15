function getInfo() {
    const url ='http://localhost:3030/jsonstore/bus/businfo'
    const input = document.getElementById('stopId')
    const stopName = document.getElementById('stopName')
    const buses = document.getElementById('buses')

    fetch(`${url}/${input.value}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            let name = data.name
            stopName.textContent = name

            const bus = data.buses
            buses.innerHTML = ''
            Object.keys(bus).forEach(vihecul => {
                const li = document.createElement('li')
                li.textContent = `Bus ${vihecul} arrives in ${bus[vihecul]} minutes`
                buses.appendChild(li)
            })
        })
        .catch(error => {
            console.log(error)
            stopName.textContent = 'Error'
            buses.innerHTML = ''
        })
}
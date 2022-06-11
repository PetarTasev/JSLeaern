function attachEventsListeners() {
    let secB = document.getElementById('secondsBtn')
    secB.addEventListener('click', secClick)

    let minB = document.getElementById('minutesBtn')
    minB.addEventListener('click', minClick)

    let hB = document.getElementById('hoursBtn')
    hB.addEventListener('click', hClick)

    let dayB = document.getElementById('daysBtn')
    dayB.addEventListener('click', dayClick)


    function secClick (ev) {
        let secValue = document.getElementById('seconds').value
        let mins = document.getElementById('minutes').value = secValue / 60;
        let hour = document.getElementById('hours').value = mins / 60;
        document.getElementById('days').value = hour / 24;
    }
    function minClick (ev) {
        let mins = document.getElementById('minutes').value
        document.getElementById('seconds').value = mins * 60;
        let hour = document.getElementById('hours').value = mins / 60;
        document.getElementById('days').value = hour / 24;
    }
    function hClick (ev) {
        let hour = document.getElementById('hours').value
        document.getElementById('days').value = hour / 24;
        let mins = document.getElementById('minutes').value = hour * 60
        document.getElementById('seconds').value = mins * 60;
    }
    function dayClick (ev) {
        let days = document.getElementById('days').value;
        console.log(days)
        let hours = document.getElementById('hours').value = days * 24
        let min = document.getElementById('minutes').value = hours * 60
        document.getElementById('seconds').value = min * 60
    }
}

document.querySelector('body').addEventListener('click', start)

const month = {
    Jan: 1,
    Feb: 2,
    Mar: 3,
    Apr: 4,
    May: 5,
    Jun: 6,
    Jul: 7,
    Aug: 8,
    Sept: 9,
    Oct: 10,
    Nov: 11,
    Dec: 12
}
function start(ev) {
    console.log(ev.target)

}
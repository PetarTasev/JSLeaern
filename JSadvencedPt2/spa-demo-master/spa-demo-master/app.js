import { homeView } from './home.js'


document.querySelector('nav').addEventListener('click', newPage)

const location = {
    homeBtn: homeView
}

homeView()

function newPage(ev) {
    ev.preventDefault()

    if (ev.target.tagName == 'A') {
        const view = location[ev.target.id]


        if (typeof view == 'function') {
            ev.preventDefault()
            view()
        }
    }
}

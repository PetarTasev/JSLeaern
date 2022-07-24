import { homeView } from './home.js'
import { showCatalog } from './catalog.js'
import { showAbout } from './about.js'


document.querySelector('nav').addEventListener('click', newPage)

const location = {
    homeBtn: homeView,
    catalogBtn : showCatalog,
    aboutBtn: showAbout
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

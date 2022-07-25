import { homeView } from './home.js'
import { showCatalog } from './catalog.js'
import { showAbout } from './about.js'
import { checkUserNav, onLogout } from './check.js'
import { logInView } from './login.js'
import { registerView } from './register.js'


document.querySelector('nav').addEventListener('click', newPage)
document.getElementById('logoutBtn').addEventListener('click', onLogout)

const location = {
    homeBtn: homeView,
    catalogBtn : showCatalog,
    aboutBtn: showAbout,
    loginBtn: logInView,
    registerBtn: registerView
}

homeView()
checkUserNav()
function newPage(ev) {
    ev.preventDefault()

    if (ev.target.tagName == 'A') {
        const view = location[ev.target.id]


        if (typeof view == 'function') {
            ev.preventDefault()
            console.log('im here')
            view()
        }
    }
}

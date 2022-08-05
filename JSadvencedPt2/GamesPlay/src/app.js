import { render } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs"
import { logout } from "./api/api.js";
import { getUserData } from "./util.js"
import { allGames } from "./views/allGamePage.js";
import { createGamePage } from "./views/createGamePage.js";
import { homePage } from "./views/homePage.js";
import { loginPage } from "./views/loginPage.js";
import { registerPage } from "./views/registerPage.js";


let root = document.getElementById('main-content')

const del = document.getElementById('logoutBtn')
del.addEventListener('click', (e) => {
    e.preventDefault()
    logout()
    updateUserNav()
    page.redirect('/')
})

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root)
    ctx.updateUserNav = updateUserNav
    next()
}

export function updateUserNav() {
    const userData = getUserData()
    if (userData) {
        document.getElementById('user').style.display = 'inline-block'
        document.getElementById('guest').style.display = 'none'
    } else {
        document.getElementById('user').style.display = 'none'
        document.getElementById('guest').style.display = 'inline-block'
    }
}


page(decorateContext)

page('/', '/home')
page('/home', homePage)
page('/login', loginPage)
page('/create', createGamePage)
page('/allGames', allGames)
page('/register', registerPage)
updateUserNav()
page.start()
page.redirect('/')
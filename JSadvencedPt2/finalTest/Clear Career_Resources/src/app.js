import { render } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs"
import { logout } from "./api/api.js";
import { getUserData } from "./util.js"
import { createOffrePage } from "./views/createOffer.js";
import { dashBoard } from "./views/dashBoard.js";
import { detailsPage } from "./views/detailsPage.js";
import { editOFfer } from "./views/editPage.js";
import { homePage } from "./views/homePage.js";
import { loginPage } from "./views/loginPage.js";
import { registerPage } from "./views/registerPage.js";


let root = document.getElementById('main')

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
        document.querySelector('.user').style.display = 'inline-block'
        document.querySelector('.guest').style.display = 'none'
    } else {
        document.querySelector('.user').style.display = 'none'
        document.querySelector('.guest').style.display = 'inline-block'
    }
}


page(decorateContext)

page('/', '/home')
page('/home', homePage)
page('/dashboard', dashBoard)
page('/create', createOffrePage)
page('/details/:id', detailsPage)
page('/edit/:id', editOFfer)
page('/login', loginPage)
page('/register', registerPage)
updateUserNav()
page.start()
page.redirect('/')
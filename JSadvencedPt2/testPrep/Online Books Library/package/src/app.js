import { render } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs"
import { logout } from "./api/api.js";
import { loginPage } from "./views/loginPage.js";
import { getUserData } from "./util.js"
import { registerPage } from "./views/registerPage.js";
import { homePage } from "./views/homePage.js";
import { addBookPage } from "./views/addBookPage.js";
import { detailsPage } from "./views/detailsPage.js";
import { myBooksPage } from "./views/myBooksPage.js";
import { editBookPage } from "./views/editPage.js";


let root = document.getElementById('site-content')

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
        document.querySelector('#user span').textContent = `Welcome, ${userData.email}`
    } else {
        document.getElementById('user').style.display = 'none'
        document.getElementById('guest').style.display = 'inline-block'
    }
}


page(decorateContext)
page('/', '/home')
page('/home', homePage)
page('/details/:id', detailsPage)
page('/addBook', addBookPage)
page('/myBooks', myBooksPage)
page('/login', loginPage)
page('/edit/:id', editBookPage)
page('/register', registerPage)
page.redirect('/')
updateUserNav()
page.start()

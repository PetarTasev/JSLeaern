import {  render } from "../node_modules/lit-html/lit-html.js";
import  page  from "../node_modules/page/page.mjs"
import { logout } from "./api/api.js";
import { getUserData} from "./util.js"
import { loginPage } from "./views/login.js";
import { registerPage } from "./views/register.js";



let root = document.getElementById('site-content')

document.getElementById('logoutBtn').addEventListener('click', (e) => {
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
       document.getElementById('user').style.display = 'inline-blick'
       document.getElementById('guest').style.display = 'none'
       document.querySelector('#user span').textContent = `Welcome, ${userData.email}`
    } else {
        document.getElementById('user').style.display = 'none'
        document.getElementById('guest').style.display = 'inline-blick'
    }
}


page(decorateContext)
page('/login', loginPage())
page('/register', registerPage() )
updateUserNav()
page.start()

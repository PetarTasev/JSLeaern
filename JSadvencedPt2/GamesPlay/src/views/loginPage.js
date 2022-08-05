import { html } from "../../node_modules/lit-html/lit-html.js";
import { login } from "../api/data.js";
import { getUserData } from "../util.js";

let loginTemplate = (onSubmit) => html`
<section id="login-page" class="auth">
<form @submit=${onSubmit} id="login">

    <div class="container">
        <div class="brand-logo"></div>
        <h1>Login</h1>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Sokka@gmail.com">

        <label for="login-pass">Password:</label>
        <input type="password" id="login-password" name="password">
        <input type="submit" class="btn submit" value="Login">
        <p class="field">
            <span>If you don't have profile click <a href="/register">here</a></span>
        </p>
    </div>
</form>
</section>`


export function loginPage(ctx) {
    ctx.render(loginTemplate(onSubmit))

    async function onSubmit(ev) {
        ev.preventDefault()
        
        let formData = new FormData(ev.target)

        let email = formData.get('email').trim()
        let password = formData.get('password').trim()

        
        if (email == '' || password == '') {
            return alert('Please, fill all fields!')
        }
        
        await login(email, password)

        ctx.updateUserNav()
        getUserData()
        ctx.page.redirect('/')
    }
    
    
}
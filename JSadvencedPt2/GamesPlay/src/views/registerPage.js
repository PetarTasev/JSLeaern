import { html } from "../../node_modules/lit-html/lit-html.js";
import { regester } from "../api/data.js";

let registerTemplate = (onSubmit) => html`
<section @submit=${onSubmit} id="register-page" class="content auth">
    <form id="register">
        <div class="container">
            <div class="brand-logo"></div>
            <h1>Register</h1>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="maria@email.com">

            <label for="pass">Password:</label>
            <input type="password" name="password" id="register-password">

            <label for="con-pass">Confirm Password:</label>
            <input type="password" name="confirm-password" id="confirm-password">

            <input class="btn submit" type="submit" value="Register">

            <p class="field">
                <span>If you already have profile click <a href="/login">here</a></span>
            </p>
        </div>
    </form>
</section>
`


export function registerPage(ctx) {
    ctx.render(registerTemplate(onSubmit) )


    async function onSubmit(ev) {
        ev.preventDefault()
        

        let formData = new FormData(ev.target)

        let email = formData.get('email').trim()
        let password = formData.get('password').trim()
        let repass = formData.get('confirm-password').trim()

        
        if (email == '' || password == '') {
            return alert('Please, fill all fields!')
        }

        if (password != repass) {
            return alert('Passwords don\'t match')
        }

        const res = await regester(email, password)
        ctx.updateUserNav()
        ctx.page.redirect('/')
    }
}
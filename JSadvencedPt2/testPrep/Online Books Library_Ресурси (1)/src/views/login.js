import { html, render } from "../../node_modules/lit-html/lit-html.js";


let loginTemplate =  (onSubmit) => html`
<section id="login-page" class="login">
<form @submit=${onSubmit}id="login-form" action="" method="">
    <fieldset>
        <legend>Login Form</legend>
        <p class="field">
            <label for="email">Email</label>
            <span class="input">
                <input type="text" name="email" id="email" placeholder="Email">
            </span>
        </p>
        <p class="field">
            <label for="password">Password</label>
            <span class="input">
                <input type="password" name="password" id="password" placeholder="Password">
            </span>
        </p>
        <input class="button submit" type="submit" value="Login">
    </fieldset>
</form>
</section>
`

export function loginPage(ctx) {
    render(loginTemplate(onSubmit), document.getElementById('site-content'))

    function onSubmit () {

    }
}

import { html } from "../../node_modules/lit-html/lit-html.js";
import { login } from "../api/data.js";
import { getUserData } from "../util.js";

let loginTemplate = (onSubmit) => html`
<section id="login">
    <div class="form">
      <h2>Login</h2>
      <form @submit=${onSubmit} class="login-form">
        <input type="text" name="email" id="email" placeholder="email" />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
        />
        <button type="submit">login</button>
        <p class="message">
          Not registered? <a href="#">Create an account</a>
        </p>
      </form>
    </div>
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
import { html } from "../../node_modules/lit-html/lit-html.js";
import { regester } from "../api/data.js";

let registerTemplate = (onSubmit) => html`
  <section id="register">
    <div class="form">
      <h2>Register</h2>
      <form @submit=${onSubmit} class="login-form">
        <input
          type="text"
          name="email"
          id="register-email"
          placeholder="email"
        />
        <input
          type="password"
          name="password"
          id="register-password"
          placeholder="password"
        />
        <input
          type="password"
          name="re-password"
          id="repeat-password"
          placeholder="repeat password"
        />
        <button type="submit">register</button>
        <p class="message">Already registered? <a href="#">Login</a></p>
      </form>
    </div>
  </section>`


export function registerPage(ctx) {
    ctx.render(registerTemplate(onSubmit) )


    async function onSubmit(ev) {
        ev.preventDefault()
        

        let formData = new FormData(ev.target)

        let email = formData.get('email').trim()
        let password = formData.get('password').trim()
        let repass = formData.get('re-password').trim()

        
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
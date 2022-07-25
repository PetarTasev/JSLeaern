import { homeView } from "./home.js"
import { checkUserNav } from "./check.js"

const home = document.getElementById('registerView')
const form = home.querySelector('form')
form.addEventListener('submit', register)
home.remove()

export function registerView() {
    document.getElementById('views').replaceChildren(home)
}

async function register(ev) {
    ev.preventDefault()

const formData = new FormData(form)

const email = formData.get('email').trim()
const password = formData.get('password').trim()
const confirm = formData.get('repass').trim()

console.log(email, password, confirm)


try {
    if (email == '' || password == '' || confirm == '') {
        throw Error('All fields are required!')
    }
    if ( password != confirm) {
        throw Error('Password don\'t macth!')
    }
    const res = await fetch('http://localhost:3030/users/register', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })

    if (res.ok == false) {
        const error = await res.json()
        throw new Error(error.message)
    }

    const {accessToken, _id} = await res.json()
    const userData = {
        email,
        accessToken,
        id: _id
    }
    sessionStorage.setItem('userData', JSON.stringify(userData))
    checkUserNav()
    homeView()
}

catch (err) {
    alert(err.message)
}
}




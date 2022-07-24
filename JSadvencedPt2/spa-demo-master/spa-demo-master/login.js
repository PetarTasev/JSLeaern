import { homeView } from "./home.js"
import { checkUserNav } from "./check.js"

const home = document.getElementById('loginView')
const form = home.querySelector('form')
form.addEventListener('submit', logIn)
home.remove()


export function logInView() {
    document.getElementById('views').replaceChildren(home)
}

async function  logIn(ev) {
    ev.preventDefault()

    const formData = new FormData(form)
    const email = formData.get('email').trim()
    const password = formData.get('password').trim()

    try {
        const res = await fetch('http://localhost:3030/users/login', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        }) 

        if (res.ok == false) {
            const error = await res.json()
            throw Error(error.message)
        }
        const data = await res.json()
        
        const userData = {
            email: data.email,
            accessToken: data.accessToken,
            id: data._id
        }

        sessionStorage.setItem('userData', JSON.stringify(userData))
        checkUserNav()
        homeView()

    } catch(err) {
        alert(err.message)
    }
}
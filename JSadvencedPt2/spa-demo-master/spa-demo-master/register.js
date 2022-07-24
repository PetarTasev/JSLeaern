
const home = document.getElementById('registerView')
const form = home.querySelector('form')
form.addEventListener('submit', register)
home.remove()

export function registerView() {
    document.getElementById('views').replaceChildren(home)
}

function register(ev) {
    ev.preventDefault()

    
}
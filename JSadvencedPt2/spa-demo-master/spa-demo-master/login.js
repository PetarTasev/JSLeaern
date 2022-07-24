const home = document.getElementById('loginView')
home.remove()

export function logInView() {
    document.getElementById('views').replaceChildren(home)
}
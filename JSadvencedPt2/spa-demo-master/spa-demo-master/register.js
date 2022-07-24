const home = document.getElementById('registerView')
home.remove()

export function registerView() {
    document.getElementById('views').replaceChildren(home)
}
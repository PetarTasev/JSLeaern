
const home = document.getElementById('homeView')
home.remove()

export function homeView() {
    document.getElementById('views').replaceChildren(home)

}
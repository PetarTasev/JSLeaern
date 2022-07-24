const view = document.getElementById('aboutView')
view.remove()

export function showAbout() {
    document.getElementById('views').replaceChildren(view)
}
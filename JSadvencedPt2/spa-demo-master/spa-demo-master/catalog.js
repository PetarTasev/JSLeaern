const view = document.getElementById('catalogView')
view.remove()

export function showCatalog() {
    document.getElementById('views').replaceChildren(view)
    document.getElementById('views').replaceChild(view)
}
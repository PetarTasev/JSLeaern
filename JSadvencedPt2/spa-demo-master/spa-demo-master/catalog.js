



const view = document.getElementById('catalogView')
const lsit = document.querySelector('ul')
view.remove()

export async function showCatalog() {
    document.getElementById('views').replaceChildren(view)
    lsit.replaceChildren('Loading...')

    const rev = await fetch('http://localhost:3030/data/movies')
    const movies = await rev.json()

    const fragment = document.createDocumentFragment()

    movies.map(createHTML).forEach(e => fragment.appendChild(e))

    lsit.replaceChildren(fragment)
    addMovie
}



function createHTML(movie) {
    const li = document.createElement('li')
    li.textContent = movie.title
    return li
}
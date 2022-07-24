//const list = querySelector('ul') 
const catalog = getElementById('catalogView')


export async function addMovie() {
    const input = document.createElement('input')
    input.classList('text')
    catalog.appendChild(input)
    
}

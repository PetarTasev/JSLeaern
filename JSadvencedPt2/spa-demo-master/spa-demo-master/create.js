//const list = querySelector('ul') 
const catalog = getElementBeId('catalogView')


export async function addMovie() {
    const input = document.createElement('input')
    input.classList('text')
    catalog.appendChild(input)
    
}

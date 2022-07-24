const section = document.getElementById('year-2020')
section.remove();

export function year2020() {
    document.querySelector('body').replaceChildren(section)
}
import { html } from "../../node_modules/lit-html/lit-html.js";


let editBookTemplate = () => html``


export async function editBookPage(ctx) {

    ctx.render(editBookTemplate())

    async function onSubmit(ev) {
        ev.preventDefault()
        
    
        ctx.page.redirect('/')
    }
}
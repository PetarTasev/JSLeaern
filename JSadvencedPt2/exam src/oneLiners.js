import { render } from "../node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs"


//base template 
import { html } from "../../node_modules/lit-html/lit-html.js";


let editBookTemplate = () => html``


export async function editBookPage(ctx) {

    ctx.render(editBookTemplate())

    async function onSubmit(ev) {
        ev.preventDefault()
        
    
        ctx.page.redirect('/')
    }
}


// making a template for repeating things

html `<ul class="other-books-list">${books.map(bookPreview)}</ul>`

export const Preview = (book) => html`
<li class="otherBooks">
<h3>${book.title}</h3>
<p>Type: ${book.type}</p>
<p class="img"><img src=${book.imageUrl}></p>
<a class="button" href="/details/${book._id}">Details</a>
</li>`

// get the id of the image aka /home/:id <-
ctx.params.id


// how you check if you own it 
let isOwner =  userData.id == book._ownerId

let bookControlsTemplate = (book, isOwner, onDelete) => {
    if (isOwner) {
        return html`<a class="button" href="/edit/${book._id}">Edit</a>
<a class="button" @click=${onDelete} href="javascript:coid(0)">Delete</a>`
    } else {
        return null
    }
}

${bookControlsTemplate(book, isOwner, onDelete)} <- in html

//classic evnet listener
@click=${onDelete}

// how to get a the right form
let formData = new FormData(ev.target)
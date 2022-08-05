import { html } from "../../node_modules/lit-html/lit-html.js";
import { deleteBook, getBookBeId } from "../api/data.js";
import { getUserData } from "../util.js"


let detailsTemplate = (book, isOwner, likes, onDelete) => html`
<section id="details-page" class="details">
    <div class="book-information">
        ${book}
        <h3>${book.title}</h3>
        <p class="type">Type: ${book.type}</p>
        <p class="img"><img src=${book.imageUrl}></p>
        <div class="actions">
            ${bookControlsTemplate(book, isOwner, onDelete)}
            <div class="likes">
                <img class="hearts" src="/images/heart.png">
                <span id="total-likes">Likes: ${likes}</span>
            </div>
        </div>
    </div>
    <div class="book-description">
        <h3>Description:</h3>
        <p>Feyre's survival rests upon her ability to hunt and kill – the forest where she lives is a cold,
            bleak place in the long winter months. So when she spots a deer in the forest being pursued by a
            wolf, she cannot resist fighting it for the flesh. But to do so, she must kill the predator and
            killing something so precious comes at a price ...</p>
    </div>
</section>`

let bookControlsTemplate = (book, isOwner, onDelete) => {
    if (isOwner) {
        return html`<a class="button" href="/edit/${book._id}">Edit</a>
<a class="button" @click=${onDelete} href="javascript:coid(0)">Delete</a>`
    } else {
        return null
    }
}



export async function detailsPage(ctx) {
    let userData = getUserData()
    let book = await getBookBeId(ctx.params.id)


    console.log(userData.id)
    console.log(book._ownerId)
    let isOwner =  userData.id == book._ownerId
    console.log(isOwner)


    ctx.render(detailsTemplate(book, isOwner, 0, onDelete))

    async function onDelete() {
        await deleteBook(ctx.pareams.id)
        ctx.page.redirect('/')
    }
}


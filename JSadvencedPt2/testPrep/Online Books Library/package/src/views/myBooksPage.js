import { html } from "../../node_modules/lit-html/lit-html.js";
import { bookPreview } from "./common.js";
import { getMyBooks } from "../api/data.js";
import { getUserData } from "../util.js";

let homeTemplate = (books) => html`
<section id="my-books-page" class="my-books">
    <h1>My Books</h1> 
${books.length == 0 ? 
html `<p class="no-books">No books in database!</p>` :
html `<ul class="my-books-list">${books.map(bookPreview)}</ul>` }`


export async function myBooksPage(ctx) {
    let userData = getUserData()
    const books = await getMyBooks(userData.id)
    ctx.render(homeTemplate(books))
}

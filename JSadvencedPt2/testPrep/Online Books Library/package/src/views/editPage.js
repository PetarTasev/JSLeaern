import { html } from "../../node_modules/lit-html/lit-html.js";
import { editBook, getBookBeId } from "../api/data.js";


let editBookTemplate = (book, onSubmit) => html`<section id="edit-page" class="edit">
    <form @submit=${onSubmit} id="edit-form" action="#" method="">
        <fieldset>
            <legend>Edit my Book</legend>
            <p class="field">
                <label for="title">Title</label>
                <span class="input">
                    <input type="text" name="title" id="title" value=${book.title}>
                </span>
            </p>
            <p class="field">
                <label for="description">Description</label>
                <span class="input">
                    <textarea name="description" id="description">${book.description}</textarea>
                </span>
            </p>
            <p class="field">
                <label for="image">Image</label>
                <span class="input">
                    <input type="text" name="imageUrl" id="image" value=${book.imageUrl}>
                </span>
            </p>
            <p class="field">
                <label for="type">Type</label>
                <span class="input">
                    <select id="type" name="type" value=${book.type}>
                        <option value="Fiction" selected>Fiction</option>
                        <option value="Romance">Romance</option>
                        <option value="Mistery">Mistery</option>
                        <option value="Classic">Clasic</option>
                        <option value="Other">Other</option>
                    </select>
                </span>
            </p>
            <input class="button submit" type="submit" value="Save">
        </fieldset>
    </form>
</section>`


export async function editBookPage(ctx) {
    let book = await getBookBeId(ctx.params.id)

    ctx.render(editBookTemplate(book, onSubmit))
    async function onSubmit(ev) {
        ev.preventDefault()
        
        const form = new FormData(ev.target)

        const title = form.get('title')
        const description = form.get('description')
        const imageUrl = form.get('imageUrl')
        const type = form.get('type')

        if (title.length == 0 || description.length == 0 ||imageUrl.length == 0) {
            alert('All fields are  required!')
            throw Error('All fields required!')
        }

        const data = {
            title,
            description,
            imageUrl,
            type
        }

        await editBook(ctx.params.id, data )
        ctx.page.redirect('/')
    }
}
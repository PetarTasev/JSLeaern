import { html } from "../../node_modules/lit-html/lit-html.js";
import { createGame } from "../api/data.js";


let editBookTemplate = (onSubmit) => html`<section id="create-page" class="auth">
<form @submit=${onSubmit} id="create">
    <div class="container">

        <h1>Create Game</h1>
        <label for="leg-title">Legendary title:</label>
        <input type="text" id="title" name="title" placeholder="Enter game title...">

        <label for="category">Category:</label>
        <input type="text" id="category" name="category" placeholder="Enter game category...">

        <label for="levels">MaxLevel:</label>
        <input type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1">

        <label for="game-img">Image:</label>
        <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo...">

        <label for="summary">Summary:</label>
        <textarea name="summary" id="summary"></textarea>
        <input class="btn submit" type="submit" value="Create Game">
    </div>
</form>
</section>`


export async function createGamePage(ctx) {

    ctx.render(editBookTemplate(onSubmit))

    async function onSubmit(ev) {
        ev.preventDefault()
        
        let formData = new FormData(ev.target)

        let title = formData.get('title').trim()
        let category = formData.get('category').trim()
        let maxLevel = formData.get('maxLevel').trim()
        let imageUrl = formData.get('imageUrl').trim()
        let summary = formData.get('summary').trim()

        if (title.length == 0 || category.length == 0 ||imageUrl.length == 0 ||summary.length == 0 ) {
            alert('All fields are required')
            throw Error ('All fields are required')
        }

        const data = {
            title,
            category,
            maxLevel,
            imageUrl,
            summary
        }
        await createGame(data)
    
        ctx.page.redirect('/')
    }
}
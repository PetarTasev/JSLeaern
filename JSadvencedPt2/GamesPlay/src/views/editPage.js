import { html } from "../../node_modules/lit-html/lit-html.js";
import { editGame, getGameById } from "../api/data.js";


let editBookTemplate = (game, onSubmit) => html`
<section id="edit-page" class="auth">
<form @submit=${onSubmit} id="edit">
    <div class="container">

        <h1>Edit Game</h1>
        <label for="leg-title">Legendary title:</label>
        <input type="text" id="title" name="title" value=${game.title}>

        <label for="category">Category:</label>
        <input type="text" id="category" name="category" value=${game.category}>

        <label for="levels">MaxLevel:</label>
        <input type="number" id="maxLevel" name="maxLevel" min="1" value=${game.maxLevel}>

        <label for="game-img">Image:</label>
        <input type="text" id="imageUrl" name="imageUrl" value=${game.imageUrl}>

        <label for="summary">Summary:</label>
        <textarea name="summary" id="summary">${game.summary}</textarea>
        <input class="btn submit" type="submit" value="Edit Game">

    </div>
</form>
</section>`


export async function editBookPage(ctx) {

    const game = await getGameById(ctx.params.id)
    console.log(game)



    ctx.render(editBookTemplate(game, onSubmit))

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
        await editGame(ctx.params.id, data)
    
        ctx.page.redirect('/')
    }
}
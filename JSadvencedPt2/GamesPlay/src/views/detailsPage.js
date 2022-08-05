import { html } from "../../node_modules/lit-html/lit-html.js";
import { delGame, getGameById } from "../api/data.js";
import { getUserData } from "../util.js";


let editBookTemplate = (game, isOwner, onDel) => html`<section id="game-details">
    <h1>Game Details</h1>
    <div class="info-section">

        <div class="game-header">
            <img class="game-img" src=${game.imageUrl} />
            <h1>Bright</h1>
            <span class="levels">MaxLevel: ${game.maxLevel}</span>
            <p class="type">${game.category}</p>
        </div>

        <p class="text">
            ${game.summary}
        </p>

        ${ownerBtn(isOwner, game, onDel)}
    </div>


</section>
`

const ownerBtn = (isOwner, book, onDel) => {
    
    if (isOwner) {
        return html`
        <div class="buttons">
            <a href="/edit/${book._id}" class="button">Edit</a>
            <a @click=${onDel} href="JavaScript:void(0)" class="button">Delete</a>
        </div>`
    } else {
        return null
    }
}


export async function detailsView(ctx) {


    
    const game = await getGameById(ctx.params.id)

    const userData = getUserData()
    const isOwner =  userData.id == game._ownerId

    async function onDel() {
        await delGame(game._id)
    ctx.page.redirect('/')
    }
    ctx.render(editBookTemplate(game, isOwner, onDel))

    
}
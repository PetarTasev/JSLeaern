import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllGames } from "../api/data.js";
import {gameView} from "./common.js"


let editBookTemplate = (games) => html`<section id="catalog-page">
<h1>All Games</h1>
<!-- Display div: with information about every game (if any) -->
${games.length == 0 ? 
html`<h3 class="no-articles">No articles yet</h3>`:
html `<ul class="my-books-list">${games.map(gameView)}</ul>`}

<!-- Display paragraph: If there is no games  -->

</section>`


export async function allGames(ctx) {

    const games = await getAllGames()
    
    ctx.render(editBookTemplate(games))

    async function onSubmit(ev) {
        ev.preventDefault()
        
    
    }
}
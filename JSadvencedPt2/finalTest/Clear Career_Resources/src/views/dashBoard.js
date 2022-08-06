import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllOffers } from "../api/data.js";
import { Preview } from "./common.js";


let editBookTemplate = (offers, template) => html`
 <section id="dashboard">
    <h2>Job Offers</h2>

    <!-- Display a div with information about every post (if any)-->
    ${offers.length == 0 ? 
    html`<h2>No offers yet.</h2>` :
    html`${offers.map(template)}`}
  </section>`


export async function dashBoard(ctx) {

    const offers = await getAllOffers()
    ctx.render(editBookTemplate(offers, Preview))

}

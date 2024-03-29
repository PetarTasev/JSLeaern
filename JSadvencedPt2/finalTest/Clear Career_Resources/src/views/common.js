import { html } from "../../node_modules/lit-html/lit-html.js";


export const Preview = (offer) => html`
<div class="offer">
      <img src=${offer.imageUrl} alt="./images/example3.png" />
      <p>
        <strong>Title: </strong
        ><span class="title">${offer.title}</span>
      </p>
      <p><strong>Salary:</strong><span class="salary">${offer.salary}</span></p>
      <a class="details-btn" href="/details/${offer._id}">Details</a>
    </div>`


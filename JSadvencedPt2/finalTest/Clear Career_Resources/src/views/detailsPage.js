import { html } from "../../node_modules/lit-html/lit-html.js";
import { delOffer, getOfferById } from "../api/data.js";
import { getUserData } from "../util.js";


let editBookTemplate = (offer, isOwner, creatorPerks, onDel) => html`<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src=${offer.imageUrl} alt="example1" />
        <p id="details-title">${offer.title}</p>
        <p id="details-category">
            Category: <span id="categories">${offer.category}</span>
        </p>
        <p id="details-salary">
            Salary: <span id="salary-number">${offer.salary}</span>
        </p>
        <div id="info-wrapper">
            <div id="details-description">
                <h4>Description</h4>
                <span>${offer.description}</span>
            </div>
            <div id="details-requirements">
                <h4>Requirements</h4>
                <span>${offer.requirements}</span>
            </div>
        </div>
        <p>Applications: <strong id="applications">1</strong></p>

        <!--Edit and Delete are only for creator-->
        ${creatorPerks(isOwner, offer, onDel)}


        <!--Bonus - Only for logged-in users ( not authors )-->
        <a href="" id="apply-btn">Apply</a>
    </div>
    </div>
</section>
`
function creatorPerks(isOwner, offer, onDel) {
    if (isOwner) {
        return html`
    <div id="action-buttons">
        <a href="/edit/${offer._id}" id="edit-btn">Edit</a>
        <a href="" @click=${onDel} id="delete-btn">Delete</a>`
    } else {
        return null
    }
}



export async function detailsPage(ctx) {


    const offer = await getOfferById(ctx.params.id)
    let userData = getUserData()
    let isOwner =  userData.id == offer._ownerId





    ctx.render(editBookTemplate(offer, isOwner, creatorPerks, onDel))

     async function onDel(ev) {
        ev.preventDefault()

        await delOffer(ctx.params.id)
        ctx.page.redirect('/dashboard')
    }
}


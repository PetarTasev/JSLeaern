import { html } from "../../node_modules/lit-html/lit-html.js";
import { getOfferById, updateOffer } from "../api/data.js";


let editBookTemplate = (offer, onSubmit) => html`
<section id="edit">
    <div class="form">
        <h2>Edit Offer</h2>
        <form @submit=${onSubmit} class="edit-form">
            <input type="text" name="title" id="job-title" placeholder="Title" value=${offer.title} >
            <input type="text" name="imageUrl" id="job-logo" placeholder="Company logo url" value=${offer.imageUrl} >
            <input type="text" name="category" id="job-category" placeholder="Category" value=${offer.category} >
            <textarea id="job-description" name="description" placeholder="Description" rows="4"
                cols="50">${offer.description}</textarea>
            <textarea id="job-requirements" name="requirements" placeholder="Requirements" rows="4"
                cols="50">${offer.requirements}</textarea>
            <input type="text" name="salary" id="job-salary" placeholder="Salary" value=${offer.salary} >

            <button type="submit">post</button>
        </form>
    </div>
</section>`


export async function editOffer(ctx) {

    const offer = await getOfferById(ctx.params.id)

    ctx.render(editBookTemplate(offer, onSubmit))

    async function onSubmit(ev) {
        ev.preventDefault()

        let formData = new FormData(ev.target)
    

        let title = formData.get('title').trim()
        let imageUrl = formData.get('imageUrl').trim()
        let category = formData.get('category').trim()
        let description = formData.get('description').trim()
        let requirements = formData.get('requirements').trim()
        let salary = formData.get('salary').trim()

        if (title.length == 0 || imageUrl.length == 0 || category.length == 0 || description.length == 0 || requirements.length == 0 || salary.length == 0) {
            alert('All fields are required')
            throw Error('All fields are required')
        }

        const data = {
            title,
            imageUrl,
            category,
            description,
            requirements,
            salary
        }
        
         await updateOffer(ctx.params.id, data)
            ctx.page.redirect('/dashboard')
    }
}
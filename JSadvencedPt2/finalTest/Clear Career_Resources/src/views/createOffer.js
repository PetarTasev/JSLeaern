import { html } from "../../node_modules/lit-html/lit-html.js";
import { createOffer } from "../api/data.js";


let newOfferTemplate = (onSubmit) => html`
  <section id="create">
    <div class="form">
      <h2>Create Offer</h2>
      <form @submit=${onSubmit} class="create-form">
        <input
          type="text"
          name="title"
          id="job-title"
          placeholder="Title"
        />
        <input
          type="text"
          name="imageUrl"
          id="job-logo"
          placeholder="Company logo url"
        />
        <input
          type="text"
          name="category"
          id="job-category"
          placeholder="Category"
        />
        <textarea
          id="job-description"
          name="description"
          placeholder="Description"
          rows="4"
          cols="50"
        ></textarea>
        <textarea
          id="job-requirements"
          name="requirements"
          placeholder="Requirements"
          rows="4"
          cols="50"
        ></textarea>
        <input
          type="text"
          name="salary"
          id="job-salary"
          placeholder="Salary"
        />

        <button type="submit">post</button>
      </form>
    </div>
  </section>`


export async function createOffrePage(ctx) {

    ctx.render(newOfferTemplate(onSubmit))

    async function onSubmit(ev) {
        ev.preventDefault()
        
        let formData = new FormData(ev.target)

        let title = formData.get('title').trim()
        let imageUrl = formData.get('imageUrl').trim()
        let category = formData.get('category').trim()
        let description = formData.get('description').trim()
        let requirements = formData.get('requirements').trim()
        let salary = formData.get('requirements').trim()
        
        if (title.length == 0 || imageUrl.length == 0 ||category.length == 0 ||description.length == 0 ||requirements.length == 0 ||salary.length == 0) {
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

         await createOffer(data)

        ctx.page.redirect('/dashboard')
    }
}
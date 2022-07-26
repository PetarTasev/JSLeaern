import { html, render } from 'https://unpkg.com/lit-html?module'
import { contacts } from './contacts.js'

const template = (info) => html`
<div class="contact card">
<div>
    <i class="far fa-user-circle gravatar"></i>
</div>
<div class="info">
    <h2>Name: ${info.name}</h2>
    <button class="detailsBtn" onclick="showDetails(3)">Details</button>
    <div class="details" id="3" style="display: none;">
        <p>Phone number: ${info.phoneNumber}</p>
        <p>Email: ${info.email}</p>
    </div>
</div>
</div>
`




start()

export function start() {

    const main = document.getElementById('contacts')


    const data = contacts

    render(data.map(template), main)

}
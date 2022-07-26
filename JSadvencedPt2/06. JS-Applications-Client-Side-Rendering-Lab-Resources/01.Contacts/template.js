import { html } from 'https://unpkg.com/lit-html?module'


export const template = (info) => html`
<div class="contact card">
<div>
    <i class="far fa-user-circle gravatar"></i>
</div>
<div class="info">
    <h2>Name: ${info[0]}</h2>
    <button class="detailsBtn" onclick="showDetails(3)">Details</button>
    <div class="details" id="3" style="display: none;">
        <p>Phone number: ${info[1]}</p>
        <p>Email: ${info[2]}</p>
    </div>
</div>
</div>
`
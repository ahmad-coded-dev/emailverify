let response_msg_section = document.getElementsByClassName(
    'response_msg_section'
)[0];
let response_msg = document.getElementsByClassName('response_msg')[0];

import env from 'emailv/landing_pages/env.js';

export const contactApiUrl = `${env.baseApiUrl}/api/mslm/v1/contact`;

// Sends POST request to server with the Form-Data as JSON
async function postFormDataAsJson({ url, formData }) {
    const plainFormData = Object.fromEntries(formData.entries());
    const formDataJsonString = JSON.stringify(plainFormData);
    const fetchOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: formDataJsonString,
    };

    const response = await fetch(url, fetchOptions);

    if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
    }

    return response.json();
}

// Event handler for the form Submit-Event
async function handleFormSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const url = contactApiUrl;

    try {
        const formData = new FormData(form);
        const res = await postFormDataAsJson({ url, formData });

        const msg = res.data;
        const errCode = res.code;
        if (errCode == 200) {
            show_response_msg(msg);
            response_msg_section.classList.add('message_submit');
        } else {
            show_response_msg(msg);
        }
    } catch (error) {
        msg = 'There is an error in submitting form.';
        show_response_msg(msg);
    }
}

// Event-Listener for the Contact-Form
const contactForm = document.getElementById('contact_form');
contactForm.addEventListener('submit', handleFormSubmit);

function show_response_msg(msg) {
    response_msg.innerHTML = msg;
    response_msg_section.classList.add('message_submit_error');
    response_msg_section.style.display = 'block';
    response_msg_section.scrollIntoView({ block: 'center' });
}

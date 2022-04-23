import Cookie, { COOKIE_AUTH_SESS } from 'libweb/cookie.js';
import env from 'emailv/landing_pages/env.js';
let login_btn = document.getElementsByClassName('login_btn');
let signup_btn = document.getElementsByClassName('signup_btn');
let dashboard_btn = document.getElementsByClassName('dashboard_btn');

if (!Cookie.get(COOKIE_AUTH_SESS)) {
    hide_dasboard_btn();
} else {
    show_dasboard_btn();
}

function hide_dasboard_btn() {
    for (let i = 0; i < login_btn.length; i++) {
        login_btn[i].style.display = 'block';
    }

    for (let i = 0; i < signup_btn.length; i++) {
        signup_btn[i].style.display = 'block';
    }

    for (let i = 0; i < dashboard_btn.length; i++) {
        dashboard_btn[i].style.display = 'none';
    }
}

function show_dasboard_btn() {
    for (let i = 0; i < login_btn.length; i++) {
        login_btn[i].style.display = 'none';
    }

    for (let i = 0; i < signup_btn.length; i++) {
        signup_btn[i].style.display = 'none';
    }

    for (let i = 0; i < dashboard_btn.length; i++) {
        dashboard_btn[i].style.display = 'block';
    }
}

//setting links of login, signup & dasboard buttons.

for (let i = 0; i < login_btn.length; i++) {
    login_btn[i].href = `/login`;
}

for (let i = 0; i < signup_btn.length; i++) {
    signup_btn[i].href = `/signup`;
}

for (let i = 0; i < dashboard_btn.length; i++) {
    dashboard_btn[i].href = `/emailv/app`;
}

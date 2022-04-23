function windowOnClick(event) {
    if (window.innerWidth < 901) {
        if (event.target.classList.contains('mob_navbar_hamburger')) {
            show_mob_navbar();
        } else if (event.target.classList.contains('mob_navbar_cross')) {
            hide_mob_navbar();
        } else if (event.target.classList.contains('menuitems')) {
        } else if (event.target.classList.contains('navbar')) {
        } else if (event.target.classList.contains('menuitems')) {
        } else if (event.target.classList.contains('navbar_logo')) {
        } else if (event.target.classList.contains('links_for_mobile_navbar')) {
        } else {
            hide_mob_navbar();
        }
    }
}
window.addEventListener('click', windowOnClick);
window.addEventListener('touchmove', set_mobile_navbar);

function hide_mob_navbar() {
    document
        .getElementsByClassName('navbar')[0]
        .classList.remove('show_navbar');
    document.getElementsByClassName('navbar')[0].classList.add('hide_navbar');
    setTimeout(() => {
        document.getElementsByClassName(
            'mob_navbar_hamburger'
        )[0].style.display = 'block';
        document.getElementsByClassName('mob_navbar_logo')[0].style.display =
            'block';
    }, 300);
    document.body.style.overflow = '';
    document.getElementsByClassName('bg_for_body')[0].style.display = 'none';
}

function show_mob_navbar() {
    document
        .getElementsByClassName('navbar')[0]
        .classList.remove('hide_navbar');
    document.getElementsByClassName('navbar')[0].classList.add('show_navbar');
    document.getElementsByClassName('mob_navbar_hamburger')[0].style.display =
        'none';
    document.getElementsByClassName('mob_navbar_logo')[0].style.display =
        'none';
    document.body.style.height = '100%';
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
        document.getElementsByClassName('bg_for_body')[0].style.display =
            'block';
    }, 150);
}

window.addEventListener('resize', () => {
    setTimeout(() => {
        set_mobile_navbar();
    }, 100);
});

function set_mobile_navbar() {
    if (window.innerWidth < 901) {
        hide_mob_navbar();
    } else {
        document.getElementsByClassName(
            'mob_navbar_hamburger'
        )[0].style.display = 'none';
        document.getElementsByClassName('mob_navbar_logo')[0].style.display =
            'none';
    }
}

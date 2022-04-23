let scroll =
    window.requestAnimationFrame ||
    function (callback) {
        window.setTimeout(callback, 1000 / 60);
    };
function AOS() {
    items = document.querySelectorAll('.mb-slider-item');
    items.forEach((item) => {
        if (isInViewport(item)) {
            item.classList.add('mb-scale');
            item.children[1].children[1].classList.add('mb-active');
            item.children[1].children[0].classList.add('mb-active-round');
        } else {
            item.classList.remove('mb-scale');
            item.children[1].children[1].classList.remove('mb-active');
            item.children[1].children[0].classList.remove('mb-active-round');
        }
    });
    scroll(AOS);
}
AOS();
function isInViewport(element) {
    const container = document.getElementsByClassName(
        'pay_for_fake_desc_mobile'
    )[0];
    const rect = element.getBoundingClientRect();
    return (
        rect.left >= 0 &&
        rect.right <=
            (window.innerWidth || document.documentElement.clientWidth) + 20
    );
}

$RefreshReg$ = () => {};

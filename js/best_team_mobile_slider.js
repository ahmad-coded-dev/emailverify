const sliderContainer = document.querySelector('.best-team-slider-container');
let sliderContainerOut = sliderContainer.getBoundingClientRect();
const memberCards = document.querySelectorAll('.member_card_mb');
const slider = document.querySelector('.best-team-slider');
const radioButtons = document.getElementsByTagName('input');
let clicked = false;
let xAxis;
let x;
let currentPos = 0;
let start = 0;

sliderContainer.addEventListener('touchstart', touchStart);
sliderContainer.addEventListener('touchmove', drag);
sliderContainer.addEventListener('touchend', touchEnd);
window.addEventListener('resize', cardsWidth);

function cardsWidth() {
    if (window.innerWidth < 601) {
        sliderContainerOut = sliderContainer.getBoundingClientRect();
        sliderContainer.style.width = window.innerWidth;
        memberCards.forEach((memberCard) => {
            memberCard.style.width = `${sliderContainerOut.width}px`;
        });
        currentPos = 0;
        setSliderPosition(currentPos);
        radioButtonChecked();
    }
}

cardsWidth();
if (window.innerWidth < 601) {
    radioButtonChecked();
}

function radioButtonChecked() {
    sliderContainerOut = sliderContainer.getBoundingClientRect();
    for (let i = 0; i < radioButtons.length; i++) {
        radioButtons[i].checked = false;
    }
    let i = (currentPos / sliderContainerOut.width) * -1;
    radioButtons[i].checked = true;
}

function setSliderPosition(pos) {
    slider.style.transition = 'all 0.3s ease';
    slider.style.left = `${pos}px`;
    setTimeout(() => {
        start = slider.offsetLeft;
        slider.style.transition = 'none';
    }, 300);
}
function checkSize() {
    let sliderContainerOut = sliderContainer.getBoundingClientRect();
    let sliderIn = slider.getBoundingClientRect();
    if (parseInt(slider.style.left) > 0) {
        slider.style.left = `0px`;
    } else if (sliderIn.right < sliderContainerOut.right) {
        slider.style.left = `-${sliderIn.width - sliderContainerOut.width}px`;
    }
}

function touchStart(e) {
    clicked = true;
    xAxis = e.touches[0].clientX - slider.offsetLeft;
    sliderContainer.style.cursor = `grabbing`;
}
function touchEnd() {
    const sliderContainerOut = sliderContainer.getBoundingClientRect();
    clicked = false;
    if (slider.offsetLeft < start && slider.offsetLeft * -1 - -1 * start > 50) {
        currentPos -= sliderContainerOut.width;
    }
    if (
        slider.offsetLeft > start &&
        slider.offsetLeft * -1 - -1 * start < -50
    ) {
        currentPos += sliderContainerOut.width;
    }
    radioButtonChecked();
    setSliderPosition(currentPos);
    checkSize();
}
function drag(e) {
    if (!clicked) return;
    e.preventDefault();
    x = e.touches[0].clientX;
    slider.style.left = `${x - xAxis}px`;
    checkSize();
}

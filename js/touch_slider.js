const sliderContainer = document.querySelector('.mb-slider-container');
const slider = document.querySelector('.mb-slider');
let clicked = false;
let xAxis;
let x;
let currentPos = 0;
let start = 0;
let inc = 490;
sliderContainer.addEventListener('touchstart', (e) => {
    clicked = true;
    start = slider.offsetLeft;
    xAxis = e.touches[0].clientX - slider.offsetLeft;
    sliderContainer.style.cursor = `grabbing`;
});
sliderContainer.addEventListener('touchend', () => {
    clicked = false;
    sliderContainer.style.cursor = `grab`;
    if (slider.offsetLeft < start && slider.offsetLeft * -1 - -1 * start > 70) {
        currentPos -= inc;
    }
    if (
        slider.offsetLeft > start &&
        slider.offsetLeft * -1 - -1 * start < -70
    ) {
        currentPos += inc;
    }
    setSliderPosition(currentPos);
});
sliderContainer.addEventListener('touchmove', (e) => {
    if (!clicked) return;
    e.preventDefault();
    x = e.touches[0].clientX;
    slider.style.left = `${x - xAxis}px`;
    checkSize();
});
window.addEventListener('resize', setInc);
setInc();
function setInc() {
    setSliderPosition(0);
    currentPos = 0;
    if (window.innerWidth > 1100) {
        inc = 585;
    }
    if (window.innerWidth <= 1100 && window.innerWidth > 1050) {
        inc = 610;
    }
    if (window.innerWidth <= 1050 && window.innerWidth > 1000) {
        inc = 615;
    }
    if (window.innerWidth <= 1000 && window.innerWidth > 900) {
        inc = 620;
    }
    if (window.innerWidth <= 900 && window.innerWidth > 850) {
        inc = 490;
    }
    if (window.innerWidth <= 850 && window.innerWidth > 800) {
        inc = 495;
    }
    if (window.innerWidth <= 800 && window.innerWidth > 770) {
        inc = 500;
    }
    if (window.innerWidth <= 770 && window.innerWidth > 600) {
        inc = 515;
    }
    if (window.innerWidth <= 600 && window.innerWidth > 550) {
        inc = 305;
    }
    if (window.innerWidth <= 550 && window.innerWidth > 450) {
        inc = 310;
    }
    if (window.innerWidth <= 450) {
        inc = 315;
    }
}
function setSliderPosition(pos) {
    start = slider.offsetLeft;
    slider.style.transition = 'all 0.3s ease';
    slider.style.left = `${pos}px`;
    setTimeout(() => {
        slider.style.transition = 'none';
    }, 300);
}
function checkSize() {
    let sliderContainerOut = sliderContainer.getBoundingClientRect();
    let sliderIn = slider.getBoundingClientRect();
    if (parseInt(slider.style.left) > 0) {
        slider.style.left = `0px`;
    } else if (sliderIn.right < sliderContainerOut.right) {
        slider.style.left = `-${
            sliderIn.width - sliderContainerOut.width + 50
        }px`;
    }
}
sliderContainer.addEventListener('mouseup', () => {
    sliderContainer.style.cursor = `grab`;
    clicked = false;
});
sliderContainer.addEventListener('mousedown', (e) => {
    clicked = true;
    xAxis = e.offsetX - slider.offsetLeft;
    sliderContainer.style.cursor = `grabbing`;
});
sliderContainer.addEventListener('mousemove', (e) => {
    if (!clicked) return;
    e.preventDefault();
    x = e.offsetX;
    slider.style.left = `${x - xAxis}px`;
    checkSize();
});

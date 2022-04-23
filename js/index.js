import step1Svg from '../images/step1.jpg';
import step2Svg from '../images/step2.jpg';
import step3Svg from '../images/step3.jpg';
import step4Svg from '../images/step4.jpg';
import step5Svg from '../images/step5.jpg';
import step6Svg from '../images/step6.jpg';
import step7Svg from '../images/step7.jpg';
import step8Svg from '../images/step8.jpg';
const slider = document.getElementById('slider');
var target = document.getElementsByClassName('pic_warpper')[0];
const opt = document.getElementsByClassName('opt');
var images = document.getElementsByClassName('scroll_img');
var forwardPicCount = 0;
var backwardPicCount = 0;
function opt_control(margin_value, opt_no) {
    slider.style.marginTop = margin_value + 'px';
    document.getElementsByClassName('active')[0].classList.remove('active');
    opt[opt_no].classList.add('active');
    document.getElementsByClassName('pay_for_fake')[0].style.position = 'fixed';
    document.getElementsByClassName('pay_for_fake')[0].style.top = '0px';
    document.getElementsByClassName('main_bg')[0].style.position = 'fixed';
    document.getElementsByClassName('main_bg')[0].style.top = '0px';
}
function forward_pic() {
    target.firstElementChild.classList.add('fade_down_scrol');
    setTimeout(() => {
        target.removeChild(target.firstElementChild);
    }, 200);
}
function backward_pic(n) {
    for (
        let i = 0;
        i < document.getElementsByClassName('fade_up_scrol').length;
        i++
    ) {
        document
            .getElementsByClassName('fade_up_scrol')[0]
            .classList.remove('fade_up_scrol');
    }
    var image = new Image();
    image.classList.add('scroll_img', 'fade_up_scrol');
    if (n == 1) {
        image.src = step1Svg;
    }
    if (n == 2) {
        image.src = step2Svg;
    }
    if (n == 3) {
        image.src = step3Svg;
    }
    if (n == 4) {
        image.src = step4Svg;
    }
    if (n == 5) {
        image.src = step5Svg;
    }
    if (n == 6) {
        image.src = step6Svg;
    }
    if (n == 7) {
        image.src = step7Svg;
    }
    if (n == 8) {
        image.src = step8Svg;
    }
    target.insertBefore(image, target.firstChild);
}
function reset() {
    var allImages = `
    <img class="scroll_img" src="${step1Svg}" alt="step1">
    <img class="scroll_img" src="${step2Svg}" alt="step2">
    <img class="scroll_img" src="${step3Svg}" alt="step3">
    <img class="scroll_img" src="${step4Svg}" alt="step4">
    <img class="scroll_img" src="${step5Svg}" alt="step5">
    <img class="scroll_img" src="${step6Svg}" alt="step6">
    <img class="scroll_img" src="${step7Svg}" alt="step7">
    <img class="scroll_img" src="${step8Svg}" alt="step8"> `;
    target.innerHTML = allImages;
}
reset();
function scroll_down() {
    if (window.pageYOffset > 0 && window.pageYOffset < 10) {
        opt_control(100, 0);
        reset();
    }
    if (window.pageYOffset > 0 && window.pageYOffset <= 106) {
        opt_control(100, 0);
        forwardPicCount = 0;
        backwardPicCount = 0;
    } else if (window.pageYOffset > 107 && window.pageYOffset < 212) {
        for (forwardPicCount; forwardPicCount < 1; forwardPicCount++) {
            forward_pic();
        }
        forwardPicCount = 1;
        backwardPicCount = 1;
        opt_control(0, 1);
    } else if (window.pageYOffset > 213 && window.pageYOffset < 318) {
        for (forwardPicCount; forwardPicCount < 2; forwardPicCount++) {
            forward_pic();
        }
        forwardPicCount = 2;
        backwardPicCount = 2;
        opt_control(-100, 2);
    } else if (window.pageYOffset > 319 && window.pageYOffset < 424) {
        for (forwardPicCount; forwardPicCount < 3; forwardPicCount++) {
            forward_pic();
        }
        forwardPicCount = 3;
        backwardPicCount = 3;
        opt_control(-200, 3);
    } else if (window.pageYOffset > 425 && window.pageYOffset < 530) {
        for (forwardPicCount; forwardPicCount < 4; forwardPicCount++) {
            forward_pic();
        }
        forwardPicCount = 4;
        backwardPicCount = 4;
        opt_control(-300, 4);
    } else if (window.pageYOffset > 531 && window.pageYOffset < 636) {
        for (forwardPicCount; forwardPicCount < 5; forwardPicCount++) {
            forward_pic();
        }
        forwardPicCount = 5;
        backwardPicCount = 5;
        opt_control(-400, 5);
    } else if (window.pageYOffset > 637 && window.pageYOffset < 742) {
        for (forwardPicCount; forwardPicCount < 6; forwardPicCount++) {
            forward_pic();
        }
        forwardPicCount = 6;
        backwardPicCount = 6;
        opt_control(-500, 6);
    } else if (window.pageYOffset > 743 && window.pageYOffset < 848) {
        for (forwardPicCount; forwardPicCount < 7; forwardPicCount++) {
            forward_pic();
        }
        forwardPicCount = 7;
        backwardPicCount = 7;
        opt_control(-600, 7);
    } else if (window.pageYOffset > 849) {
        opt_control(-600, 7);
        setTimeout(() => {
            for (; images.length != 1; ) {
                if (images.length == 0) {
                    target.innerHTML = `<img class="scroll_img" src="${step8Svg}"> `;
                    break;
                }
                target.removeChild(target.firstElementChild);
            }
            target.innerHTML = `<img class="scroll_img" src="${step8Svg}"> `;
        }, 200);
        document.getElementsByClassName('pay_for_fake')[0].style.position =
            'absolute';
        document.getElementsByClassName('pay_for_fake')[0].style.top = '830px';
        document.getElementsByClassName('main_bg')[0].style.position =
            'absolute';
        document.getElementsByClassName('main_bg')[0].style.top = '830px';
    }
}
function scroll_up() {
    if (window.pageYOffset > 0 && window.pageYOffset < 10) {
        opt_control(100, 0);
        reset();
    }
    if (window.pageYOffset > 0 && window.pageYOffset <= 106) {
        for (backwardPicCount; backwardPicCount >= 1; backwardPicCount--) {
            backward_pic(backwardPicCount);
        }
        forwardPicCount = 0;
        backwardPicCount = 0;
        opt_control(100, 0);
    } else if (window.pageYOffset > 107 && window.pageYOffset < 212) {
        for (backwardPicCount; backwardPicCount >= 2; backwardPicCount--) {
            backward_pic(backwardPicCount);
        }
        forwardPicCount = 1;
        backwardPicCount = 1;
        opt_control(0, 1);
    } else if (window.pageYOffset > 213 && window.pageYOffset < 318) {
        for (backwardPicCount; backwardPicCount >= 3; backwardPicCount--) {
            backward_pic(backwardPicCount);
        }
        forwardPicCount = 2;
        backwardPicCount = 2;
        opt_control(-100, 2);
    } else if (window.pageYOffset > 319 && window.pageYOffset < 424) {
        for (backwardPicCount; backwardPicCount >= 4; backwardPicCount--) {
            backward_pic(backwardPicCount);
        }
        forwardPicCount = 3;
        backwardPicCount = 3;
        opt_control(-200, 3);
    } else if (window.pageYOffset > 425 && window.pageYOffset < 530) {
        for (backwardPicCount; backwardPicCount >= 5; backwardPicCount--) {
            backward_pic(backwardPicCount);
        }
        forwardPicCount = 4;
        backwardPicCount = 4;
        opt_control(-300, 4);
    } else if (window.pageYOffset > 531 && window.pageYOffset < 636) {
        for (backwardPicCount; backwardPicCount >= 6; backwardPicCount--) {
            backward_pic(backwardPicCount);
        }
        forwardPicCount = 5;
        backwardPicCount = 5;
        opt_control(-400, 5);
    } else if (window.pageYOffset > 637 && window.pageYOffset < 742) {
        for (backwardPicCount; backwardPicCount >= 7; backwardPicCount--) {
            backward_pic(backwardPicCount);
        }
        forwardPicCount = 6;
        backwardPicCount = 6;
        opt_control(-500, 6);
    } else if (window.pageYOffset > 743 && window.pageYOffset < 848) {
        forwardPicCount = 7;
        backwardPicCount = 7;
        opt_control(-600, 7);
    } else if (window.pageYOffset > 849) {
        target.innerHTML = `<img class="scroll_img" src="${step8Svg}"> `;
        document.getElementsByClassName('pay_for_fake')[0].style.position =
            'absolute';
        document.getElementsByClassName('pay_for_fake')[0].style.top = '830px';
        document.getElementsByClassName('main_bg')[0].style.position =
            'absolute';
        document.getElementsByClassName('main_bg')[0].style.top = '830px';
    }
}
scroll_up();
scroll_down();
var lastScrollTop = 0;
window.addEventListener('scroll', function () {
    var st = window.pageYOffset;
    if (st > lastScrollTop) {
        scroll_down();
    } else {
        scroll_up();
    }
    lastScrollTop = st <= 0 ? 0 : st;
});

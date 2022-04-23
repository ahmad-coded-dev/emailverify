var valid_slider = document.getElementById('valid_slider'); //hold slider of valid emails
var valid_input = document.getElementsByClassName('valid_input')[0]; //hold input feild of valid emails
var valid_price = document.getElementById('valid_price'); //hold price field of valid emails

var invalid_slider = document.getElementById('invalid_slider'); //hold slider of total invalid emails
var invalid_input = document.getElementsByClassName('invalid_input')[0]; //hold input feild of total invalid emails
var invalid_price = document.getElementById('invalid_price'); //hold price field of total emails

var total_price = document.getElementById('total_price');
var price;
var color;

var valid_emails_price;
var invalid_emails_price;

set_invalid_slider();
set_valid_slider_color();
set_invalid_slider_color();
set_valid_price();
set_price();
valid_input.value = valid_slider.value.replace(
    /(\d)(?=(\d\d\d)+(?!\d))/g,
    '$1,'
);

valid_slider.oninput = function () {
    valid_input.value = valid_slider.value.replace(
        /(\d)(?=(\d\d\d)+(?!\d))/g,
        '$1,'
    );
    set_invalid_slider();
    set_valid_slider_color();
    set_invalid_slider_color();
    set_valid_price();
    set_price();
};
valid_input.oninput = function () {
    this.value = this.value.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1');
    if (valid_input.value.replace(/,/g, '') > parseFloat(valid_slider.max)) {
        valid_input.value = valid_slider.max.replace(
            /(\d)(?=(\d\d\d)+(?!\d))/g,
            '$1,'
        );
    }
    if (parseFloat(valid_input.value.replace(/,/g, '')) == 0) {
        valid_input.value = '';
    }
    if (valid_input.value != '') {
        valid_input.value = parseFloat(valid_input.value.replace(/,/g, ''));
    }
    valid_input.value = valid_input.value.replace(
        /(\d)(?=(\d\d\d)+(?!\d))/g,
        '$1,'
    );

    valid_slider.value = valid_input.value.replace(/,/g, '');
    set_invalid_slider();
    set_valid_slider_color();
    set_invalid_slider_color();
    set_valid_price();
    set_price();
    if (valid_input.value == '') {
        valid_slider.value = 0;
        set_valid_price();
        set_valid_slider_color();
        set_price();
        set_invalid_slider();
        set_invalid_slider_color();
    }
};
invalid_slider.oninput = function () {
    invalid_input.value = invalid_slider.value.replace(
        /(\d)(?=(\d\d\d)+(?!\d))/g,
        '$1,'
    );
    set_invalid_price();
    set_invalid_slider_color();
    set_price();
};
invalid_input.oninput = function () {
    this.value = this.value.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1');
    if (
        invalid_input.value.replace(/,/g, '') > parseFloat(invalid_slider.max)
    ) {
        invalid_input.value = invalid_slider.max.replace(
            /(\d)(?=(\d\d\d)+(?!\d))/g,
            '$1,'
        );
    }
    if (parseFloat(invalid_input.value.replace(/,/g, '')) == 0) {
        invalid_input.value = '';
    }
    if (invalid_input.value != '') {
        invalid_input.value = parseFloat(invalid_input.value.replace(/,/g, ''));
    }
    invalid_input.value = invalid_input.value.replace(
        /(\d)(?=(\d\d\d)+(?!\d))/g,
        '$1,'
    );
    invalid_slider.value = invalid_input.value.replace(/,/g, '');
    set_invalid_price();
    set_invalid_slider_color();
    set_price();
    if (invalid_input.value == '') {
        invalid_slider.value = 0;
        set_invalid_price();
        set_invalid_slider_color();
        set_price();
        set_invalid_slider();
        set_invalid_slider_color();
    }
};

function set_invalid_slider() {
    invalid_slider.max = valid_input.value.replace(/,/g, '');
    if (
        invalid_input.value.replace(/,/g, '') > parseFloat(invalid_slider.max)
    ) {
        invalid_input.value = invalid_slider.max.replace(
            /(\d)(?=(\d\d\d)+(?!\d))/g,
            '$1,'
        );
    }
    if (
        valid_input.value.replace(/,/g, '') == '' ||
        valid_input.value.replace(/,/g, '') == '0'
    ) {
        invalid_slider.value = 0;
        invalid_input.value = 0;
        var invalid_slider_color =
            'linear-gradient(90deg, rgb(230, 0, 0) 0%, rgb(224,224,224) 0%)';
        invalid_slider.style.background = invalid_slider_color;
    }

    if (valid_input.value == 0) {
        invalid_slider.disabled = true;
        invalid_input.disabled = true;
    } else {
        invalid_slider.disabled = false;
        invalid_input.disabled = false;
    }
    set_invalid_price();
}
function set_valid_slider_color() {
    var valid_slider_color =
        'linear-gradient(90deg, rgb(0, 174, 0)' +
        (valid_slider.value / valid_slider.max) * 100 +
        '%, rgb(224,224,224)' +
        (valid_slider.value / valid_slider.max) * 100 +
        '%)';
    valid_slider.style.background = valid_slider_color;
}
function set_invalid_slider_color() {
    var invalid_slider_color =
        'linear-gradient(90deg, rgb(230, 0, 0)' +
        (invalid_slider.value * 100) / invalid_slider.max +
        '%, rgb(224,224,224)' +
        (invalid_slider.value * 100) / invalid_slider.max +
        '%)';
    invalid_slider.style.background = invalid_slider_color;
}
function set_price() {
    price = parseFloat(
        parseFloat(valid_price.innerHTML.replace(/,/g, '')) +
            parseFloat(invalid_price.innerHTML.replace(/,/g, ''))
    );
    var total_emails_price = price.toFixed(2);
    total_price.innerHTML = total_emails_price.replace(
        /(\d)(?=(\d\d\d)+(?!\d))/g,
        '$1,'
    );
}
function set_valid_price() {
    var x = parseFloat(valid_input.value.replace(/,/g, '')) / 2000;
    if (valid_input.value == '') {
        x = 0;
    }
    if (x < 5 && x > 0) {
        x = 5;
    }
    valid_emails_price = x.toFixed(2);
    valid_price.innerHTML = valid_emails_price.replace(
        /(\d)(?=(\d\d\d)+(?!\d))/g,
        '$1,'
    );
}
function set_invalid_price() {
    var x = parseFloat(invalid_input.value.replace(/,/g, '')) / 50;
    if (invalid_input.value == '') {
        x = 0;
    }
    if (x < 1 && x > 0) {
        x = 1;
    }
    invalid_emails_price = x.toFixed(2);
    invalid_price.innerHTML = invalid_emails_price.replace(
        /(\d)(?=(\d\d\d)+(?!\d))/g,
        '$1,'
    );
}

valid_input.onclick = function () {
    if (valid_input.value == '0') {
        valid_input.value = '';
    }
};

invalid_input.onclick = function () {
    if (invalid_input.value == '0') {
        invalid_input.value = '';
    }
};

invalid_input.onblur = function () {
    if (invalid_input.value == '') {
        invalid_input.value = 0;
    }
};

valid_input.onblur = function () {
    if (valid_input.value == '') {
        valid_input.value = 0;
    }
};

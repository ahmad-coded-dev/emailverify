//this function makes input field look active with its label.
function active_input(input_field) {
    input_field.parentElement.classList.add('active_input');
    input_field.parentElement.style.marginBottom = '47px';
}

//this function makes input field and its label look active when user leave the field if it is not empty
function check_input_field(input_field) {
    if (input_field.value != '') {
        input_field.parentElement.classList.add('active_input');
        input_field.parentElement.style.marginBottom = '47px';
    } else {
        input_field.parentElement.classList.remove('active_input');
        input_field.parentElement.style.marginBottom = '49px';
    }
}

//this function will allow user to enter number only.
function check_charecters(input_field) {
    input_field.value = input_field.value.replace(/[^0-9]/g, '');
}

import Form from './class/Form.js';


window.addEventListener('load', function () {
    const $form = document.querySelector('form');
    const $fields = $form.querySelectorAll('input, select, textarea');
    const form = new Form($fields);
    const $submit = document.querySelector('.btn');
    $submit.addEventListener('click', function (e) {
        e.preventDefault();
        form.validate();
    });
});
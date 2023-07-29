
import Form from "./class/Form.js";
import Validator from "./class/Validator.js";

window.addEventListener("load", () => {
    const $form = document.querySelector("form");
    const $submitBtn = document.querySelector("button[type=submit]");

    $submitBtn.addEventListener("click", function (e) {
        e.preventDefault();
        
        if (new Validator($form).validate()) {

            const name = $form.querySelector("#name").value;
            const mail = $form.querySelector("#email").value;
            const age = $form.querySelector("#age").value;

            const form = new Form(name, mail, age);
            form.push();
        }else console.log("Formulaire invalide");
    });

});
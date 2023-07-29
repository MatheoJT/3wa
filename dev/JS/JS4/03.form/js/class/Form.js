
import LocalStorage from "./LocalStorage.js";
import Validator from "./Validator.js";

class Form {

    constructor(name, mail, age) {
        this.name = name;
        this.mail = mail;
        this.age = age;
    }

    #checkName() {
        return Validator.isValidName(this.name);
    }

    #checkMail() {
        return Validator.isValidEmail(this.mail);
    }

    #checkAge() {
        return Validator.isValidAge(this.age);
    }

    check() {
        return this.#checkName() && this.#checkMail() && this.#checkAge();
    }

    push() {
         
        let contacts = LocalStorage.getItem("contacts");
        
        if (contacts === null) {
            contacts = [];
        }

            let newContact = {
                name: this.name,
                email: this.mail,
                age: this.age
            };

            contacts.push(newContact);
            LocalStorage.setItem("contacts", contacts);
    }

}


export default Form;
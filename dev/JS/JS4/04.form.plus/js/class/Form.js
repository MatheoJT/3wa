import LocalStorage from "./LocalStorage.js";

class Form {
    constructor(fields) {
        this.fields = fields;
        this._firstName = '';
        this._lastName = '';
        this._mail = '';
        this._password = '';
        this._birthDate = '';
        this._hobbies = [];
        this._genre = '';
        this._lastWork = '';
    }

    validate() {
        this.fields.forEach(field => {
            if(field.id === 'firstname') {
                this._firstName = field.value;
            } else if (field.id === 'lastname') {
                this._lastName = field.value;
            } else if (field.id === 'email') {
                this._mail = field.value;
            } else if (field.id === 'password') {
                this._password = field.value;
            } else if (field.id === 'birthdate') {
                this._birthDate = field.value;
            } else if (field.type === 'checkbox') {
                if (field.checked) {
                    this._hobbies.push(field.value);
                }
            } else if (field.name === 'genre') {
                if (field.checked) {
                    this._genre = field.value;
                }
            } else if (field.id === 'oldActivities') {
                this._lastWork = field.value;
            }
        });

        if (!this.isValid()) {
            console.error("Le formulaire n'est pas valide");
            return false;
        }else this.push();


    }


    isValid() {
        const forbiddenPasswords = ["azerti123", "password", "motdepasse"];
        let isValid = true;

        const nameRegex = /^[a-zA-ZÀ-ÖØ-öø-ÿ\-]+$/;
        if (!nameRegex.test(this._firstName) || !nameRegex.test(this._lastName)) {
            console.error("vous devez saisir un nom et un prénom valide");
            isValid = false;
        } else console.log("OK > nom et prénom valides");

        if (forbiddenPasswords.includes(this._password) || this._password.length < 1) {
            console.error("Les mots de passe suivants sont interdits: azerti123, password, motdepasse");
            isValid = false;
        } else console.log("OK > mot de passe valide");

        const emailRegex = /^\S+@\S+\.\S+$/;
        if (!emailRegex.test(this._mail)) {
            console.error("L'adresse mail n'est pas valide");
            isValid = false;
        } else console.log("OK > adresse mail valide");

        const birthdateParts = this._birthDate.split("-");
        const birthdate = new Date(birthdateParts[0], birthdateParts[1] - 1, birthdateParts[2]);
        if (birthdate > new Date()) {
            console.error("Comment es-tu né dans le futur ? :o Retour vers le passé ! (TDC)");
            isValid = false;
        } else console.log("OK > date de naissance dans le passé");

        if (this._hobbies.length < 1) {
            console.error("Vous devez choisir au moins un hobby");
            isValid = false;
        } else console.log("OK > hobby choisi");

        if (this._genre === '') {
            console.error("Vous devez choisir un genre");
            isValid = false;
        } else console.log("OK > genre choisi");

        if (this._lastWork === '') {
            console.error("Vous devez choisir une activité");
            isValid = false;
        } else console.log("OK > activité choisie");

        return isValid;
    }

    getContact() {
        return {
            firstName: this._firstName,
            lastName: this._lastName,
            mail: this._mail,
            password: this._password,
            birthDate: this._birthDate,
            hobbies: this._hobbies,
            genre: this._genre,
            lastWork: this._lastWork
        };
    }

    push() {
        LocalStorage.pushItem("contact", this.getContact());
    }
}

export default Form;

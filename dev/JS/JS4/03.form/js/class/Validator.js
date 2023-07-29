class Validator {

  constructor(form) {
    this.input = form.querySelectorAll("input");
  }

    // Vérifie si le nom est valide (contient du texte)
    _isValidName(name) {
        if(name === null || name === undefined || name === "") return false;
        return /^[a-zA-Z\s]+$/.test(name);
    }
  
    // Vérifie si l'adresse email est valide
    _isValidEmail(email) {
      if (email === null || email === undefined || email === "") return false;
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
  
    // Vérifie si l'âge est valide (entier compris entre 0 et 200)
    _isValidAge(age) {
      if (age === null || age === undefined || age === "") return false;
      age = parseInt(age);
      return !isNaN(age) && age >= 0 && age <= 200 && Number.isInteger(age);
  }
  
  validate() {
    let isValid = true;
    this.input.forEach(input => {
      if(input.id === "name") {
        if(!this._isValidName(input.value)) {
          input.classList.add("form-error");
          isValid = false;
        } else {
          console.log("name valid: " + input.value);
          input.classList.remove("form-error");
        }
      } else if(input.id === "email") {
        if(!this._isValidEmail(input.value)) {
          input.classList.add("form-error");
          isValid = false;
        } else {
          console.log("email valid: " + input.value);
          input.classList.remove("form-error");
        }
      } else if(input.id === "age") {
        if(!this._isValidAge(input.value)) {
          input.classList.add("form-error");
          isValid = false;
        } else {
          console.log("age valid: " + input.value);
          input.classList.remove("form-error");
        }
      }
    });
    return isValid;
  }
}
  
export default Validator;
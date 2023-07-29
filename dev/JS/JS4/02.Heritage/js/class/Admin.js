import User from "./User.js";

class Admin extends User {

    constructor(firstName, lastName, editArticle) {
        super(firstName, lastName);
        this.editArticle = editArticle;
    }

    canEditArticle() {
        return this.editArticle;
    }

}

export default Admin;
import Admin from "./class/Admin.js";

let admin = new Admin("John", "Doe", true);
console.log(admin.canEditArticle());
console.log(admin.getFullName());
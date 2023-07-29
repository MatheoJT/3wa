class LocalStorage {
   
    // Ajoute une clé:valeur au local storage
    static setItem(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    // Récupére la valeur d'une clé du local storage
    static getItem(key) {
        return JSON.parse(localStorage.getItem(key));
    }

    // Supprime une clé:valeur du local storage
    static removeItem(key) {
        localStorage.removeItem(key);
    }

    // Supprime toutes les clé:valeur du local storage
    static clear() {
        localStorage.clear();
    }
}

export default LocalStorage;
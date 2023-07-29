class LocalStorage {
    static _storage = localStorage;

    static pushItem(key, value) {
        let items = this._storage.getItem(key);
        if (items === null) {
            items = [];
        } else {
            items = JSON.parse(items);
        }
        items.push(value);
        this._storage.setItem(key, JSON.stringify(items));
    }

    static getItem(key) {
        let items = this._storage.getItem(key);
        return items !== null ? JSON.parse(items) : [];
    }

    static removeItem(key) {
        this._storage.removeItem(key);
    }

    static clear() {
        this._storage.clear();
    }

    static setItem(key, value) {
        this._storage.setItem(key, JSON.stringify(value));
    }
}
export default LocalStorage;
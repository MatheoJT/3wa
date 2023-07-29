class Notification {

    constructor(element) {
        this.element = element;
    }

    // envoie une notification de succès
    sendSuccess(message) {
        this.element.innerHTML = message;
        this.element.classList.add('success');
        this.element.classList.remove('failure');
    }

    // envoie une notification d'erreur et la supprime au bout de 5 secondes
    sendFailure(message) {
        this.element.innerHTML = message;
        this.element.classList.add('failure');
        this.element.classList.remove('success');
    }
}

export default Notification;
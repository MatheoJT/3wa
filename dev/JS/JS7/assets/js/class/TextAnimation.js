class TextAnimation {
    constructor(element) {
        this.element = element;
    }

    // Animation de l'élément
    animate() {
        this.element.style.transform = 'translateX(-100%)';

        setTimeout(async () => {
            this.element.innerHTML = categorySelect.options[categorySelect.selectedIndex].text;
            this.element.style.transform = 'translateX(100%)';
            
            setTimeout(async () => {
                this.element.style.transform = 'translateX(0)';
            }, 100);
        }, 300);
    }
}

export default TextAnimation;
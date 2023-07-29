// Récupération de la librairie Vue
// et en particulier de la fonction createApp (qui créé l'instance)
const { createApp } = Vue

createApp({
  data() {
    return {
        film: '',
        musique: '',
        artiste: '',
        listeDeCourse: {
            légumes: ['patate', 'courge'],
            fruits: ['banane', 'pomme', 'figue', 'citron vert'],
            boissons: ['lait', 'eau', 'rhum']
        }
    }
}
}).mount('#app')



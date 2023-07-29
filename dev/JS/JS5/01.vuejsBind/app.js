// Récupération de la librairie Vue
// et en particulier de la fonction createApp (qui créé l'instance)
const { createApp } = Vue

createApp({
  data() {
    return {
      name: 'Joe Bar',
      sutitle: 'Ici on voit le binding'
    }
  }
}).mount('#app')
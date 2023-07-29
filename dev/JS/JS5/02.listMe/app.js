// Récupération de la librairie Vue
// et en particulier de la fonction createApp (qui créé l'instance)
const { createApp } = Vue

createApp({
  data() {
    return {
      simpleArray: ['item1', 'item2', 'item3'],
      complexArray: [
        { name: 'object1', value: 'value1' },
        { name: 'object2', value: 'value2' },
        { name: 'object3', value: 'value3' }
      ]
    }
  }
}).mount('#app')

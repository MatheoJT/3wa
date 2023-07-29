const { createApp } = Vue
createApp({
  data() {
    return{
      nom: '',
      description: '',
      pha: '',
      pv: '',
      qtt: '',
      ref: '',
      key: 'products',
      products: [],
      isEmpty: false
    }
  },
  // L'objet methods permet d'écrire des fonctions, ces fonctions sont locales dans le contexte d'un 'component'
  methods: {
    createProduct() {
      // On créé un objet interne
      // pour le process de validation
      const product = {
        nom: this.nom,
        description: this.description,
        pha: this.pha,
        pv: this.pv,
        qtt: this.qtt,
        ref: this.ref,
      }

      // Vérification si un champ est vide dans l'objet 'product'
      if (this.checkIfEmpty(product)) {
        console.log('not save');
        // this.isEmpty = true
      } else {
        console.log('save');
        // Get products if exists
        this.products = this.getDatas(this.key)
        // Mise à jour de la liste, aen ajoutant le nouveau product
        this.products.push(product)
        // Save
        this.save(this.key, this.products)
        // Reset error msg
         this.isEmpty = false
      }

      // Vider le form
      this.emptyFields()
    },
    checkIfEmpty(dataObj) {
      // Test if empty
      // Méthode 1
      /* for (const [key, value] of Object.entries(dataObj)) {
        if (value == '') return true
      }
      return false */

      // Méthode 2
      const values = Object.values(dataObj)
      if (values.includes('')) {
        return true
      } else {
        return false
      }

    },
    save(keyFromLocalStorage, datas) {
      localStorage.setItem(keyFromLocalStorage, JSON.stringify(datas))
    },
    getDatas(keyFromLocalStorage) {
      return JSON.parse(localStorage.getItem(keyFromLocalStorage)) ?? []
    },
    emptyFields() {
      // Solve simple
      this.$refs.fields.reset()

      // Vider les champs du form
      // this.nom = ''
      // this.description = ''
      // this.pha = ''
      // this.pv = ''
      // this.qtt = ''
      // this.ref = ''
    }
  }
}).mount('#app') 
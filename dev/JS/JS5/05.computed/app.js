const { createApp } = Vue



createApp({
  data() {
    return {
      isVisible: true,
      tasks: [
          { description: 'Faire des courses', done: true },
          { description: 'Reviser', done: false },
          { description: 'Lire mes emails', done: false },
          { description: 'Faire le menage', done: true },
      ],
  }
},

  computed: {
    doneTasks() {
      return this.tasks.filter(task => task.done)
    },

    remainingTasks() {
      return this.tasks.filter(task => !task.done)
    }
  }
}).mount('#app');
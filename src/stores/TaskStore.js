import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [
      { id: 1, title: 'buy milk', isFav: false },
      { id: 2, title: 'buy sugar', isFav: true },
      { id: 3, title: 'buy Book', isFav: true },
    ],
  }),
  getters: {
    favs() {
      return this.tasks.filter((t) => t.isFav);
    },
  },
  actions: {
    addTask(task) {
      this.tasks.push(task);
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
    toggleFav(id) {
      const task = this.tasks.find((task) => task.id === id);
      if (task) {
        task.isFav = !task.isFav;
      }
    },
  },
});

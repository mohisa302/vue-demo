<script setup>
import { defineProps, ref, computed } from 'vue';
import { useTaskStore } from '../stores/TaskStore.js'; // Adjust the path if needed

const taskStore = useTaskStore();
const props = defineProps({
  task: Object,
});
const toggleFavorite = (id) => {
  taskStore.toggleFav(id);
};

const deleteTask = (id) => {
  taskStore.deleteTask(id);
};
</script>
<template>
  <div>
    <div class="flex mb-4 items-center">
      <p class="w-full text-grey-darkest">{{ task.title }}</p>
      <button
        @click="toggleFavorite(task.id)"
        class="pi"
        :class="[task.isFav ? 'pi-heart text-red-700' : 'pi-heart-fill text-black']"
      ></button>
      <button @click="deleteTask(task.id)" class="pi pi-trash text-black flex-no-shrink p-2 ml-2"></button>
    </div>
  </div>
</template>

<script setup>
import { useTaskStore } from '../stores/TaskStore.js'; // Adjust the path if needed
import { defineProps, ref, computed } from 'vue';

const taskStore = useTaskStore();
const newTask = ref('');
const handleSubmit = () => {
  if (newTask.value.length > 0) {
    taskStore.addTask({
      title: newTask.value,
      isFav: false,
      id: Math.floor(Math.random() * 1000),
    });
    newTask.value = '';
  }
};
</script>
<template>
  <form @submit.prevent="handleSubmit" class="w-full">
    <div class="flex mb-4 items-center justify-between">
      <input
        v-model="newTask"
        placeholder="I need to ..."
        type="text"
        class="py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500"
        required
      />
      <button
        type="submit"
        class="ml-2 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700"
      >
        Add
      </button>
    </div>
  </form>
</template>

<script setup>
import { defineProps, ref, computed } from 'vue';
import { useTaskStore } from '../stores/TaskStore.js'; // Adjust the path if needed
import Task from '@/components/Task.vue';
import TaskForm from '@/components/TaskForm.vue';
const tasks = useTaskStore();
</script>
<template>
  <h1 class="h-100 w-full font-bold flex items-center justify-center mt-4">Enjoy Managing Your Tasks!</h1>
  <div class="h-100 w-full flex items-center justify-center bg-teal-lightest">
    <div class="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
      <TaskForm class="mb-4 w-full" />
      <Task v-for="task in tasks.tasks" :key="task.id" :task="task" />
    </div>
  </div>
</template>

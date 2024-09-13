<template>
  <h1>{{ name }}</h1>
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status">User is inactive</p>
  <ul>
    <li v-for="task in tasks" :key="task">{{ task }}</li>
  </ul>
  <a :href="link">Click for Google</a>
  <br />
  <button v-on:click="toggleStatus">Change Status</button>
</template>

<script>
export default {
  data() {
    return {
      name: 'John Doe',
      status: 'pending',
      tasks: ['Task one', 'Task two', 'Task three'],
      link: 'https//google.com',
    };
  },
  methods: {
    toggleStatus() {
      if (this.status === 'active') {
        this.status = 'pending';
      } else {
        this.status = 'active';
      }
    },
  },
};
</script>

<script setup>
import HomeCards from '@/components/HomeCards.vue';
import Hero from '@/components/Hero.vue';
import JobListings from '@/components/JobListings.vue';
</script>
<template>
  <Hero title="Test " subtitle="Test2" />
  <HomeCards />
  <JobListings :limit="3" :showButton="true" />
</template>

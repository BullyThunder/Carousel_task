<template>
  <ul  class="list">
    <li v-for="(url, index) in Carousel.arr_selected" :key="index">
      <a :href="url" target="_blank">{{ url }}</a>
    </li>
  </ul>
</template>

<script setup>
 import { useCarousel } from '@/store/index.js';
 const Carousel = useCarousel();
</script>

<style>

</style>
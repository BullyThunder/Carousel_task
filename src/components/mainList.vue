<template>
  <ul v-if="Carousel.arr_selected.length > 0" class="list">
    <transition-group name="fade" tag="ul" class="list">
    <li  v-for="(url, index) in Carousel.arr_selected" 
    :key="index">
      <a :href="url" target="_blank">{{ url }}</a>
    </li>
    </transition-group>
  </ul>
</template>

<script setup>
 import { useCarousel } from '@/store/index.js';
 const Carousel = useCarousel();
</script>

<style>
@import "@/assets/css/style.css";
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-enter-to, .fade-leave-from {
  opacity: 1;
}
</style>
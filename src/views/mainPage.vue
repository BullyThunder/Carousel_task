<template>
  <div class="carousel carousel__padding carousel__container">
   <mainCarousel/>
   <mainList/>
  </div>
</template>

<script setup>

// @ is an alias to /src
import mainCarousel from '@/components/mainCarousel.vue'
import mainList from '@/components/mainList.vue'
</script>
<style>
@import "@/assets/css/style.css";
</style>

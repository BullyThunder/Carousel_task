<template class="carousel-wrapper">
  <div class="carousel__content">
    <div v-for="(img) in Carousel.visibleSliders"
     :key="img.id" 
     class="carousel__block">
      <div class="carousel_image" 
      :style="carouselStyle">
        <img
         @load="handleImageLoad"
        @click="() => Carousel.select_url(img.url)"
         class="carousel__image" 
         :src="img.download_url" :alt="'Image ' + img.id" />
      </div>
    </div>
  </div>

  <div class="carousel__arrow">
    <button @click="Carousel.prev_slider" 
    class="carousel-nav button is-primary is-light">
      Previous slider
    </button>
    <button @click="Carousel.next_slider" 
    class="carousel-nav button is-link is-light">
      Next slider
    </button>
  </div>
</template>

<script setup>
  import { useCarousel } from '@/store/index.js';
  const Carousel = useCarousel();
  import { onMounted, onBeforeUnmount,computed,ref } from 'vue';
  //Повільне завантаження зображень для уникання лагів 
  const imageLoaded = ref(false);
  const handleImageLoad = () => {
  imageLoaded.value = true;
  };

  onMounted(() => {
  
  setTimeout(() => {
    imageLoaded.value = true;
  }, 500);  
  });
    //Загрузка фото, зміна кількості фото в залежності від розширення екрану
  onMounted(() => {
    Carousel.fetchUsers();
    Carousel.updateVisibleCount();
    window.addEventListener('resize', Carousel.updateVisibleCount);
  });
  onBeforeUnmount(() => {
    window.removeEventListener('resize', Carousel.updateVisibleCount);
  });
  const carouselStyle = computed(() => {
  return {
    transform: `translateX(-${Carousel.current_index * (100 / Carousel.visibleCount)}%)`,
    transition: 'transform 0.5s ease',  // Плавный переход
  };
});
</script>

<style scoped lang="scss">
@import "@/assets/css/style.css";

</style>
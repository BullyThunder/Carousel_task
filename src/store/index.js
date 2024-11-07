import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import axios from 'axios';

export const useCarousel = defineStore('Carousel', () => {
  const arr_img = ref([]);
  const loading = ref(false);
  const error = ref(null);
  const link = ref([]);
   // загрузка слайдерів
  const fetchUsers = async () => {
    loading.value = true;
    error.value = null;
    try {
      const response = await axios.get('https://picsum.photos/v2/list?limit=10');
      arr_img.value = response.data;
    } catch (err) {
      error.value = err.message;
      console.error('Error to fetch data', err);
    } finally {
      loading.value = false;
    }
  };

  const current_index = ref(0);
  const totalSliders = computed(() =>  arr_img.value.length);

  const visibleCount = ref(5);
  const visibleSliders = computed(() => {
    console.log('arr_img:', arr_img.value);
    console.log('totalSliders:', totalSliders.value);
  
    if (arr_img.value.length === 0) return [];  
  
    const visibleSlides = [];
  
    for (let i = 0; i < visibleCount.value; i++) {
      
      const index = (current_index.value + i) % totalSliders.value;  
      console.log('visibleSlides index:', index); 
      visibleSlides.push(arr_img.value[index]);  
    }
  
    return visibleSlides;
  });
  // логіка перемикання слайдерів
  const next_slider = () => {
    current_index.value = (current_index.value + 1) % totalSliders.value;
  };
  
  const prev_slider = () => {
    current_index.value = (current_index.value - 1 + totalSliders.value) % totalSliders.value;
  };
  // Звуження екрану в залежності від кількості слайдерів
  const updateVisibleCount = () => {
    const width = window.innerWidth;

    if (width >= 1200) {
      visibleCount.value = 5;
    } else if (width >= 768) {
      visibleCount.value = 3;
    } else {
      visibleCount.value = 1;
    }
  };

  return { arr_img, fetchUsers, next_slider, prev_slider, updateVisibleCount, visibleSliders, current_index, totalSliders };
});
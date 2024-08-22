<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template> 
  <RouterView />
  <div class="footer flex flex-row justify-center items-center w-[100%] h-[70px] bg-[#FF4508]">
    <span class="text-[#fff]">Created and Designed by Kholnazarov Damirbek</span>
  </div>
</template>

<style scoped>
.footer{
  z-index: 999999 !important;
  position: fixed;
  bottom: 0;
  left: 0
}
</style>

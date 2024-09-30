<script setup>

import TheLogo from "@/components/header/TheLogo.vue";
import TheNav from "@/components/header/TheNav.vue";
</script>

<template>
  <header class="header">
    <div class="header-inner">
      <router-link to="/"><the-logo/></router-link>
      <the-nav/>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header{
  @apply m-auto z-50 sticky w-11/12 top-1.5 mt-4 mb-2 rounded-lg drop-shadow h-16 bg-white px-12;

  @media screen and (max-width: 770px){
    @apply px-6 w-full;
  }
  &-inner{
    @apply h-full w-full flex items-center justify-between;

  }
}

</style>

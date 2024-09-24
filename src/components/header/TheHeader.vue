<script setup>

import TheLogo from "@/components/header/TheLogo.vue";
import TheNav from "@/components/header/TheNav.vue";
</script>

<template>
  <header class="sticky top-1.5 mt-4 mb-2 rounded-lg drop-shadow h-16 bg-white px-12">
    <div class="h-full w-full flex items-center justify-between">
      <router-link to="/"><the-logo/></router-link>
      <the-nav/>
    </div>
  </header>
</template>

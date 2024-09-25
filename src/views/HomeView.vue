<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Card from "@/components/Card.vue";

const showScroll = ref(false);

const handleScroll = () => {
  showScroll.value = window.scrollY > window.innerHeight * 0.3;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div>
    <div class="catalog tracking-widest flex text-xl items-center justify-center uppercase p-2"><span class="text-white">каталог</span></div>
    <section class="p-9 flex flex-wrap gap-y-16 justify-between bg-white rounded-sm min-h-svh w-full">
      <card v-for="item in 100" />
    </section>
    <img
      v-if="showScroll"
      class="scroll-up"
      src="@/assets/images/arrow.svg"
      alt="arrow-up"
      @click="scrollToTop"
    >
  </div>
</template>

<style scoped lang="scss">
.catalog {
  font-family: $second-font;
  background: radial-gradient(rgb(147 197 253 / var(--tw-bg-opacity)), $background-color);
}
.scroll-up {
  @apply fixed bottom-5 right-10 w-9 cursor-pointer;
  opacity: 0.7;
  transition: opacity 0.3s;
  &:hover {
    opacity: 1;
  }
}
</style>

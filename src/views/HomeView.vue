<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import ProductCard from "@/components/cards/ProductCard.vue";
import {useCardStore} from "@/stores/CardStore.js";


const showScroll = ref(false);

const cardStore = useCardStore()
const { getCards } = useCardStore();

const handleScroll = () => {
  showScroll.value = window.scrollY > window.innerHeight * 0.3;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted( async () => {
  await getCards()
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div>
    <div class="catalog"><span class="text-white">каталог</span></div>
    <section class="p-9 flex flex-wrap gap-y-16 justify-between bg-white rounded-sm min-h-svh w-full">
      <product-card
        v-for="card of cardStore.cards"
        :key="card.id"
        :card-id="card.id"
        :card = "card"
      />
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
  @apply tracking-widest flex text-xl items-center justify-center uppercase p-2;
}
.scroll-up {
  @apply fixed bottom-5 right-10 w-9 cursor-pointer opacity-70 duration-300 hover:opacity-100 hover:scale-110;

}
</style>

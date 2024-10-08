<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import ProductCard from "@/components/cards/ProductCard.vue";
import {useCardStore} from "@/stores/CardStore.js";
import {scrollToTop} from "@/shared/functions.js";
import ProductCardSkeleton from "@/components/cards/ProductCardSkeleton.vue";


const showScroll = ref(false);

const cardStore = useCardStore()
const { getCards } = useCardStore();

const handleScroll = () => {
  showScroll.value = window.scrollY > window.innerHeight * 0.3;
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
    <section class="catalog-section">
      <template v-if="cardStore.cards.length">
        <product-card
          v-for="card in cardStore.cards"
          :key="card.id"
          :card="card"
        />
      </template>
      <template v-else>
        <product-card-skeleton
          v-for="item in 8"
        />
      </template>
      
      <img
        v-if="showScroll"
        class="scroll-up"
        src="@/assets/images/arrow.svg"
        alt="arrow-up"
        @click="scrollToTop"
      >
    </section>
  </div>
</template>

<style scoped lang="scss">
.catalog {
  font-family: $second-font;
  background: radial-gradient(rgb(147 197 253 / var(--tw-bg-opacity)), $background-color);
  @apply justify-center p-2;

  &-section{
    @apply items-center;

    @media screen and (max-width: 1300px) {
      @apply justify-around gap-x-8;
    }
  }
}
</style>

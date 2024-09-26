<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import BasketCard from "@/components/cards/BasketCard.vue";
import {useAuthStore} from "@/stores/AuthStore.js";


const showScroll = ref(false);

const cartStore = useAuthStore()
const { showCarts } = useAuthStore()
const data = ref();

const handleScroll = () => {
  showScroll.value = window.scrollY > window.innerHeight * 0.3;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(async () => {
  data.value = await showCarts()
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div>
    <div class="catalog"><button class="catalog-button">оформить</button></div>
    <section class="p-9 flex flex-wrap gap-y-16 justify-between bg-white rounded-sm min-h-svh w-full">
      <basket-card
        v-for="cart of cartStore.carts"
        :key="cart.id"
        :cart = "cart"
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
  @apply tracking-widest flex text-xl items-center justify-end uppercase py-2;

  &-button{
    color: rgba(77, 115, 198, 0.86);
    @apply  p-2 bg-white rounded hover:text-blue-600 transition duration-300;
  }
}
.scroll-up {
  @apply fixed bottom-5 right-10 w-9 cursor-pointer opacity-70 duration-300 hover:opacity-100 hover:scale-110;

}
</style>

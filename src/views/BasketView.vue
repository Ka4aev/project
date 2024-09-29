<script setup>
import {ref, onMounted, onBeforeUnmount, computed} from 'vue';
import BasketCard from "@/components/cards/BasketCard.vue";
import { useBasketStore } from "@/stores/BasketStore.js";
import {useOrdersStore} from "@/stores/OrdersStore.js";


const showScroll = ref(false);

const BasketStore = useBasketStore()
const { getProducts } = useBasketStore()
const { addToOrders } = useOrdersStore()
const handleScroll = () => {
  showScroll.value = window.scrollY > window.innerHeight * 0.3;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
const groupedProducts = computed(() => {
  return BasketStore.basketProducts.reduce((acc, product) => {
    if (!acc[product.product_id]) {
      acc[product.product_id] = { products: [], count: 0 };
    }
    acc[product.product_id].products.push(product);
    acc[product.product_id].count += product.quantity;
    return acc;
  }, {});
});
onMounted(async () => {
  await getProducts()
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div>
    <div class="catalog">
      <button
        v-show="BasketStore.basketProducts.length > 0"
        class="catalog-button"
        @click = "addToOrders"
      >
        оформить
      </button>
    </div>
    <section class="p-9 flex flex-wrap gap-y-16 justify-start gap-8 bg-white rounded-sm min-h-svh w-full">
      <h1
        v-if="BasketStore.basketProducts.length === 0"
        class="m-auto mt-48 text-blue-600 text-3xl"
      >
        Корзина пуста
      </h1>
      <div
        v-for="(group, productId) in groupedProducts"
        :key="productId"
        class="flex gap-10 flex-wrap"
      >
        <div class="flex w-full gap-y-5 justify-around flex-wrap">
          <basket-card
            v-for="product in group.products.slice(0, 1)"
            :key="product.id"
            :group-count="group.count"
            :group="group"
            :product="product"
          />
        </div>
      </div>
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

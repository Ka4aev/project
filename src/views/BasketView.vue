<script setup>
import {ref, onMounted, onBeforeUnmount, computed} from 'vue';

import BasketCard from "@/components/cards/BasketCard.vue";
import { useBasketStore } from "@/stores/BasketStore.js";
import {useOrdersStore} from "@/stores/OrdersStore.js";
import {useRouter} from "vue-router";
import {scrollToTop} from "@/shared/functions.js";

const BasketStore = useBasketStore()
const { getProducts } = useBasketStore()
const { addToOrders } = useOrdersStore()
const router = useRouter();

const showScroll = ref(false);

const handleScroll = () => {
  showScroll.value = window.scrollY > window.innerHeight * 0.3;
};

// Метод для анимации и очистки корзины
const checkoutWithAnimation = async () => {
  const basketItems = document.querySelectorAll('.basket-item');
  basketItems.forEach(item => {
    item.classList.add('fade-out');
  });

  // Подождем 500 мс для завершения анимации
  setTimeout(() => {
    addToOrders();
    BasketStore.basketProducts = [];
    router.push('/orders')
  }, 500);
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
        @click = "checkoutWithAnimation"
      >
        оформить
      </button>
    </div>
    <section class="catalog-section">
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
            :group-count="group.count"
            class="basket-item"
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
  @apply justify-end py-2;

  &-section{
    @media screen and (max-width: 1100px) {
      @apply justify-around p-6;
    }
  }

  &-button{
    color: rgba(77, 115, 198, 0.86);
    @apply  p-2 bg-white rounded hover:text-blue-600 transition duration-300;
  }
}
.basket-item {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-out {
  opacity: 0;
  transform: translateY(50px); /* эффект смещения при исчезновении */
}


</style>

<script setup>
import OrderCard from "@/components/cards/OrderCard.vue";
import {onBeforeUnmount, onMounted, ref} from "vue";
import { useOrdersStore } from "@/stores/OrdersStore.js";
import { useCardStore } from "@/stores/CardStore.js";
import {scrollToTop} from "@/shared/functions.js"; // Добавляем хранилище товаров

const { getOrders } = useOrdersStore();
const { getCards } = useCardStore();
const orderStore = useOrdersStore();

const showScroll = ref(false);

const handleScroll = () => {
  showScroll.value = window.scrollY > window.innerHeight * 0.3;
};


onMounted(async () => {
  await getOrders();
  await getCards();
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <section class="p-9 mt-6 flex flex-wrap gap-y-16 justify-start gap-12 bg-white rounded-sm min-h-svh w-full">
    <h1
      v-if="orderStore.ordersProducts.length === 0"
      class="m-auto mt-48 text-blue-600 text-3xl"
    >
      Заказов нет
    </h1>
    <order-card
      v-for="(order,index) of orderStore.ordersProducts"
      :key="order.id"
      :number-order ="index + 1"
      :order="order"
    />
    <img
      v-if="showScroll"
      class="scroll-up"
      src="@/assets/images/arrow.svg"
      alt="arrow-up"
      @click="scrollToTop"
    >
  </section>
</template>


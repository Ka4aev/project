<script setup>
import OrderCard from "@/components/cards/OrderCard.vue";
import { onMounted } from "vue";
import { useOrdersStore } from "@/stores/OrdersStore.js";
import { useCardStore } from "@/stores/CardStore.js"; // Добавляем хранилище товаров

const { getOrders } = useOrdersStore();
const { getCards } = useCardStore();
const orderStore = useOrdersStore();

onMounted(async () => {
  await getOrders();  // Загружаем заказы
  await getCards();   // Загружаем карточки товаров
});
</script>

<template>
  <section class="p-9 flex flex-wrap gap-y-16 justify-start gap-12 bg-white rounded-sm min-h-svh w-full">
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
      :order-id="order.id"
      :order="order"
    />
  </section>
</template>


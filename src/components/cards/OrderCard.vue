<script setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useCardStore } from '@/stores/CardStore.js'
import {buySectionHeight, imageUrl} from "@/shared/functions.js";

const props = defineProps({
  order: {
    type: Object,
    required: true
  },
  numberOrder: {
    type: Number,
    required: true
  }
})

const { cards } = storeToRefs(useCardStore())

// Группируем товары по `product_id` и считаем их количество
const orderProducts = computed(() => {
  const productCountMap = {}

  props.order.products.forEach((id) => {
    if (productCountMap[id]) return;

    productCountMap[id] = {
      count: props.order.products.filter(item => item === id).length,
      ...cards.value.find((card) => card.id === id)
    }
  })
  return productCountMap;
});
</script>

<template>
  <article
    class="order"
  >
    <h3 class="text-lg">Заказ № {{ props.numberOrder }}</h3>
    <div>
      <h4>Товары:</h4>
      <ul class="order-list">
        <li
          v-for="(product, index) in orderProducts"
          :key="index"
          class="card"
        >
          <img
            class="card-img"
            :src="imageUrl(product)"
            alt="Product Image"
          />

          <div class="info mt-6 flex justify-between tracking-wide">
            <p>{{ product.name }}</p>
            <span class="text-green-600 pl-2">₽{{ product.price }}</span>
          </div>
          <span>Количество: {{ product.count }}</span>
          <div
            class="buy-section"
            :style="{ height: buySectionHeight(product) }"
          >
            <div class="info mt-4 flex justify-between tracking-wide">
              <p>{{ product.name }}</p>
              <span class="text-green-600 pl-2">₽{{ product.price }}</span>
            </div>
            <p class="card-text">
              {{ product.description }}
            </p>
          </div>
        </li>
      </ul>
    </div>
    <div class="info mt-4 flex justify-between tracking-wide">
      <p class="text-blue-400 pl-2">
        Итоговая цена заказа: &nbsp;
        <span class="text-green-600">₽{{ order.order_price }}</span>
      </p>
    </div>
  </article>
</template>

<style scoped lang="scss">
.order{
  @apply shadow-lg h-fit z-20 p-5 relative overflow-hidden flex flex-col hover:shadow-2xl ease-in-out duration-200;
  
  &-list{
    @apply flex w-full gap-y-5 justify-start gap-4 flex-wrap;
    
    @media screen and (max-width: 716px) {
      @apply justify-around
    }
  }
}
.card {
  width: 270px;
  height: 320px;
  @apply shadow-lg z-20 p-4 relative overflow-hidden flex flex-col hover:shadow-2xl ease-in-out duration-200;

  &::before {
    content: '';
    @apply absolute top-0 left-0 right-0 bottom-0 opacity-0 z-0;
    background-color: rgba(77, 115, 198, 0.33);
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }

  &-text {
    font-family: $default-font;
    @apply text-gray-500 w-full text-xs text-justify
  }
  &-img{
    @apply h-48 -z-10 mt-2;

    @media screen and (max-width: 500px) {
      @apply h-40
    }
  }
}

.info {
  font-family: $second-font;
  transition: transform 0.3s ease;

  @media screen and (max-width: 550px) {
    @apply text-base/none
  }
}

.buy-section {
  @apply left-0 right-0 bottom-0 absolute z-30 flex w-full p-4 flex-col bg-white translate-y-full max-h-52;
  transition: all 0.5s ease;
}

.card:hover .info {
  transform: translateY(-50%);
}

.card:hover .buy-section {
  transform: translateY(0);
}
</style>

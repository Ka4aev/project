<script setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useCardStore } from '@/stores/CardStore.js'

const props = defineProps({
  order: {
    type: Object,
    required: true
  },
  orderId: {
    type: Number,
    required: true
  },
  numberOrder: {
    type: Number,
    required: true
  }
})

// Получаем карточки товаров из CardStore
const cardStore = useCardStore()
const { cards } = storeToRefs(cardStore)

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

  // props.order.products.forEach((productId) => {
  //   const product = cards.value.find((card) => card.id === productId)
  //   if (product) {
  //     if (productCountMap[product.id]) {
  //       productCountMap[product.id].count += 1
  //     } else {
  //       productCountMap[product.id] = {
  //         ...product,
  //         count: 1
  //       }
  //     }
  //   }
  // })
  // // Возвращаем массив сгруппированных товаров
  // return Object.values(productCountMap)
})

const imageUrl = (product) => {
  return `${import.meta.env.VITE_API_IMG}${product.image}` // Используем default изображение, если его нет
}

const buySectionHeight = (product) => {
  const baseHeight = 40
  const extraHeight = Math.ceil((product.description?.length || 0) / 5) * 5
  return `${baseHeight + extraHeight}px`
}
</script>

<template>
  <article
    class="order shadow-lg z-20 p-4 relative overflow-hidden flex flex-col hover:shadow-2xl ease-in-out duration-200"
  >
    <h3 class="text-lg">Заказ № {{ props.numberOrder }}</h3>
    <div>
      <h4>Товары:</h4>
      <ul class="flex w-full gap-y-5 justify-start gap-12 flex-wrap">
        <li
          v-for="(product, index) in orderProducts"
          :key="index"
          class="card shadow-lg z-20 p-4 relative overflow-hidden flex flex-col hover:shadow-2xl ease-in-out duration-200"
        >
          <img
            class="card-img -z-10 mt-2"
            :src="imageUrl(product)"
            alt="Product Image"
          />

          <div class="info mt-4 flex justify-between tracking-wide">
            <p>{{ product.name }}</p>
            <span class="text-green-600 pl-2">₽{{ product.price }}</span>
          </div>
          <span>Количество: {{ product.count }}</span>
          <div
            class="buy-section absolute z-30 flex w-full p-4 flex-col"
            :style="{ height: buySectionHeight(product) }"
          >
            <div class="info mt-4 flex justify-between tracking-wide">
              <p>{{ product.name }}</p>
              <span class="text-green-600 pl-2">₽{{ product.price }}</span>
            </div>
            <p class="card-text text-gray-500 w-full text-xs text-justify">
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

  &-img {
    height: 200px;
  }

  &-text {
    font-family: $default-font;
  }
}

.info {
  font-family: $second-font;
  transition: transform 0.3s ease;
}

.buy-section {
  max-height: 200px;
  @apply left-0 right-0 bottom-0;
  background-color: white;
  transform: translateY(100%);
  transition: transform 0.5s ease;
}

.card:hover .info {
  transform: translateY(-50%);
}

.card:hover .buy-section {
  transform: translateY(0);
}
</style>

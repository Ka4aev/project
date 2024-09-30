<script setup>
import {computed, onMounted, ref, watch} from 'vue'
import { useBasketStore } from '@/stores/BasketStore.js'
import {buySectionHeight, imageUrl, toastNotification} from "@/shared/functions.js";
import {useCardStore} from "@/stores/CardStore.js";
import {storeToRefs} from "pinia";

const { removeFromBasket, updateQuantity, getProducts } = useBasketStore()
const { getCards } = useCardStore()
const { cards } = storeToRefs(useCardStore())

const props = defineProps({
  product: {
    type: Object,
    required: true
  },
  groupCount: {
    type: Number,
    required: true
  },
  group: {
    type: Object,
    required: true
  }
})
const quantity = ref(props.groupCount)

watch(
  () => props.groupCount,
  (newCount) => {
    quantity.value = newCount // Синхронизация с пропсами
  }
)

const productCard = computed(() => {
  return cards.value.find(card => card.id === props.product.product_id)
})

const removeProduct = async () => {
  props.group.products.forEach(
    (item) => removeFromBasket(item.id)
  );
  toastNotification("Товар удален из корзины!","success")
}

const increment = async () => {
  quantity.value++
  toastNotification('Количество товара увеличено!','info');
  await updateQuantity(props.product.product_id, 1); // Увеличение количества
}

const decrement = async () => {
  if (quantity.value > 1) {
    quantity.value--
    toastNotification('Количество товара убавлено!','info');
    await updateQuantity(props.product.id, -1); // Уменьшение количества
  }
}

onMounted(async () => {
  await getCards()
})

</script>

<template>
  <article
    v-if="productCard"
    class="product"
  >
    <img
      class="product-img h-48 -z-10 mt-2"
      :src="imageUrl(productCard)"
      alt="Product Image"
    />
    <div class="info mt-6 flex justify-between tracking-wide">
      <p>{{ product.name }}</p>
      <span class="text-green-600 pl-2">₽{{ product.price }}</span>
    </div>

    <div
      class="buy-section"
      :style="{ height: buySectionHeight(props.product)}"
    >
      <div>
        <div
          class="info mt-2.5 flex justify-between tracking-wide leading-none"
        >
          <p>{{ product.name }}</p>
          <span class="text-green-600 pl-2">₽{{ product.price }}</span>
        </div>
        <p class="product-text ">
          {{ product.description }}
        </p>
      </div>

      <div class="flex justify-between">
        <div class="flex gap-2.5">
          <button
            :disabled="quantity <= 1"
            @click="decrement"
          >
            <img
              class="product-counting h-5"
              alt="minus"
              src="@/assets/images/card/minus.svg"
            />
          </button>
          <span class="product-number">{{ quantity }}</span>
          <button @click="increment">
            <img
              class="product-counting h-5"
              alt="plus"
              src="@/assets/images/card/plus.svg"
            />
          </button>
        </div>
        <button
          class="product-button"
          @click="removeProduct().then(() => getProducts())"
        >
          удалить
        </button>
      </div>
    </div>
  </article>
</template>

<style scoped lang="scss">
.product {
  @apply shadow-lg z-20 p-4 relative overflow-hidden flex flex-col hover:shadow-2xl ease-in-out duration-200 w-[270px] h-80;

  &-counting {
    transition: 0.3s all ease-in-out;
    &:hover {
      filter: hue-rotate(40deg);
      transform: scale(1.1);
    }
    &:active {
      transform: scale(0.9);
    }
  }

  &-number {
    font-family: $second-font;
    @apply text-2xl;
  }
  &-button {
    @apply text-center text-sm w-1/2 bg-red-500 text-white rounded hover:bg-red-600 active:scale-95 transition duration-300;
  }
  &::before {
    content: '';
    @apply absolute top-0 left-0 right-0 bottom-0 opacity-0 z-0;
    background-color: rgba(77, 115, 198, 0.33);
    transition: all 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }

  &-text {
    font-family: $default-font;
    @apply text-gray-500 w-full text-xs text-justify;
  }
}

.info {
  font-family: $second-font;
  transition: transform 0.3s ease;
}

.buy-section {
  @apply left-0 right-0 bottom-0 absolute z-30 flex justify-between w-full p-4 flex-col max-h-52 bg-white translate-y-full;
  transition: all 0.5s ease;
}

.product:hover .info {
  transform: translateY(-50%);
}
.product:hover .buy-section {
  transform: translateY(0);
}
</style>
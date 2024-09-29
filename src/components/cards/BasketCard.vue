<script setup>
import { computed, ref, watch } from 'vue'
import { useBasketStore } from '@/stores/BasketStore.js'
import {toast} from "vue3-toastify";

const { removeFromBasket, updateQuantity, getProducts } = useBasketStore()

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

console.log(props.group)

const removeProduct = async () => {
  props.group.products.forEach(
    (item) => removeFromBasket(item.id)
  );
  toast("Товар удален из корзины!", {
    autoClose: 2000,
    theme: "auto",
    type: "success",
    position: "top-right",
    dangerouslyHTMLString: true
  });
}

const buySectionHeight = computed(() => {
  const baseHeight = 40 // базовая высота
  const extraHeight = Math.ceil(props.product.description.length / 10) * 12 // за каждые 10 символов 12px
  return `${baseHeight + extraHeight}px`
})

const imageUrl = computed(() => {
  return `${import.meta.env.VITE_API_IMG}${props.product.image}`
})
console.log(props.product)

const increment = async () => {
  quantity.value++
  await updateQuantity(props.product.product_id, 1) // Увеличение количества
}

const decrement = async () => {
  if (quantity.value > 1) {
    quantity.value--
    await updateQuantity(props.product.id, -1) // Уменьшение количества
  }
}
</script>

<template>
  <article
    class="product shadow-lg z-20 p-4 relative overflow-hidden flex flex-col hover:shadow-2xl ease-in-out duration-200"
  >
    <img
      class="product-img -z-10 mt-2"
      :src="imageUrl"
      alt="Product Image"
    />
    <div class="info mt-6 flex justify-between tracking-wide">
      <p>{{ product.name }}</p>
      <span class="text-green-600 pl-2">₽{{ product.price }}</span>
    </div>

    <div
      class="buy-section absolute z-30 flex justify-between w-full p-4 flex-col"
      :style="{ height: buySectionHeight }"
    >
      <div>
        <div
          class="info mt-2.5 flex justify-between tracking-wide leading-none"
        >
          <p>{{ product.name }}</p>
          <span class="text-green-600 pl-2">₽{{ product.price }}</span>
        </div>
        <p class="product-text text-gray-500 w-full text-xs text-justify">
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
  width: 270px;
  height: 320px;

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

.product:hover .info {
  transform: translateY(-50%);
}
.product:hover .buy-section {
  transform: translateY(0);
}
</style>
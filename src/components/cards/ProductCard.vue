<script setup>
import {storeToRefs} from "pinia";
import {useAuthStore} from "@/stores/AuthStore.js";
import {useBasketStore} from "@/stores/BasketStore.js";
import {buySectionHeight, imageUrl, toastNotification} from "@/shared/functions.js";
import { debounce } from 'lodash'

const props = defineProps({
  card:{
    type: Object,
    required: true
  }
});

const { isAuthenticated } = storeToRefs(useAuthStore())
const { addToBasket } = useBasketStore()


/*дебаунс для предотвращения отправки несколько запросов на 1 нажатие/id
используется в нексольких местах, знаю что не совсем правильно, но пойдет
 */
const addToBasketButton = debounce(() =>{
  toastNotification('Товар добавлен в корзину!','success');
  addToBasket(props.card.id);
},200)
</script>

<template>
  <article class="card">
    <img
      class="card-img h-48 -z-10 mt-2"
      :src='imageUrl(props.card)'
      alt="Product Image"
    >

    <button
      v-if="isAuthenticated"
      class="buy-button"
      @click="addToBasketButton"
    >
      в корзину
    </button>
    <div class="info mt-6 flex justify-between tracking-wide ">
      <p>{{ card.name }}</p>
      <span class="text-green-600 pl-2">₽{{ card.price }}</span>
    </div>
    <div
      class="buy-section "
      :style="{ height: buySectionHeight(props.card) }"
    >
      <div class="info mt-4 flex justify-between tracking-wide">
        <p>{{ card.name }}</p>
        <span class="text-green-600 pl-2">₽{{ card.price }}</span>
      </div>
      <p class="card-text">
        {{ card.description }}
      </p>
    </div>
  </article>
</template>

<style scoped lang="scss">
.card {
  width: 270px;
  height: 320px;
  @apply shadow-lg z-20 p-4 relative overflow-hidden flex flex-col hover:shadow-2xl ease-in-out duration-200;
  @media screen and (max-width: 995px) {
    @apply w-56 h-64;
  }
  @media screen and (max-width: 595px) {
    @apply w-[270px] h-[320px];
  }

  &-img {
    @media screen and (max-width: 995px) {
      @apply h-32;
    }
    @media screen and (max-width: 595px) {
      @apply h-48;
    }

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

  &-text {
    font-family: $default-font;
    @apply text-gray-500 w-full text-xs text-justify;

    @media screen and (max-width: 995px) {
      font-size: 11px;
      margin-top: -8px;
      line-height: normal;
    }
    @media screen and (max-width: 595px) {
      @apply text-xs;
    }
  }
}

.info {
  font-family: $second-font;
  transition: transform 0.3s ease;
  @media screen and (max-width: 995px){
    @apply text-sm justify-normal gap-1;
  }
  @media screen and (max-width: 995px){
    @apply text-base;
  }
}

.buy-section {
  @apply left-0 right-0 bottom-0 absolute z-30 flex w-full p-4 flex-col bg-white translate-y-full max-h-44;
  transition: all 0.5s ease;
  @media screen and (max-width: 995px){
    @apply max-h-40
  }
  @media screen and (max-width: 595px){
    @apply max-h-44
  }
}

.card:hover .info {
  transform: translateY(-50%);
}
.card:hover .buy-section {
  transform: translateY(0);
}

.buy-button {
  @apply z-50 tracking-widest self-center absolute text-white uppercase cursor-pointer opacity-0 w-[132px] h-8 py-2 px-4 text-sm -top-[50px];
  font-family: $default-font;
  border: 1px solid #fff;
  transition: all 0.4s ease-in-out;
}

.card:hover .buy-button {
  @apply top-1/4 opacity-100;

  @media screen and (max-width: 995px){
    @apply  top-10;
  }
  @media screen and (max-width: 595px){
    @apply  top-1/4;
  }
}
.buy-button:hover {
  background-color: rgba(197, 197, 197, 0.55);
}
</style>
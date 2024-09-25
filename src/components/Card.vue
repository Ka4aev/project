<script setup>
import {computed} from "vue";

const props = defineProps({
  card:{
    type: Object,
    required: true
  }
})
const buySectionHeight = computed(() => {
  const baseHeight = 40; // базовая высота
  const extraHeight = Math.ceil(props.card.description.length / 5) * 5;
  return `${baseHeight + extraHeight}px`;
});

const imageUrl = computed(() => {
  return `${import.meta.env.VITE_API_IMG}${props.card.image}`;
});
console.log(props.card)
</script>

<template>
  <article class="card shadow-lg z-20 p-4 relative overflow-hidden flex flex-col hover:shadow-2xl ease-in-out duration-200">
    <img
      class="card-img -z-10 mt-2"
      :src='imageUrl'
      alt="Product Image"
    >

    <button class="buy-button tracking-widest">в корзину</button>
    <div class="info mt-4 flex justify-between tracking-wide ">
      <p>{{ card.name }}</p>
      <span class="text-green-600 pl-2">₽{{ card.price }}</span>
    </div>
    <div
      class="buy-section absolute z-30 flex w-full p-4 flex-col"
      :style="{ height: buySectionHeight }"
    >
      <div class="info mt-4 flex justify-between tracking-wide">
        <p>{{ card.name }}</p>
        <span class="text-green-600 pl-2">₽{{ card.price }}</span>
      </div>
      <p class="card-text text-gray-500 w-full text-xs text-justify">
        {{ card.description }}
      </p>
    </div>
  </article>
</template>

<style scoped lang="scss">
.card {
  width: 270px;
  height: 320px;

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
  &-text{
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

.buy-button {
  @apply z-50 absolute text-white uppercase cursor-pointer opacity-0 w-[132px] h-8 py-2 px-4 text-sm -top-[50px];
  font-family: $default-font;
  border: 1px solid #fff;
  transition: all 0.4s ease-in-out;
  align-self: center;
}

.card:hover .buy-button {
  top: 25%;
  opacity: 1;
}
.buy-button:hover {
  background-color: rgba(197, 197, 197, 0.55);
}
</style>
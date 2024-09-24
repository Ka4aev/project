<template>
  <div class="scale flex gap-1 text-xl uppercase items-baseline">
    <h1 class="duration-300 text-black hover:text-blue-300">просто купить</h1>
    <img 
      class="duration-300 h-4 "
      src="@/assets/icons/basket.png"
      alt="корзина"
    >
  </div>
</template>
<style scoped lang="scss">
img{
  transition: transform 0.3s;
}
.scale:hover img {
  transform: scale(1.2); /* увеличение изображения */
}
</style>

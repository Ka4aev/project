<template>
  <div class="header-logo">
    <h1>просто купить</h1>
    <img 
      class="duration-300 h-4 "
      src="@/assets/icons/basket.png"
      alt="корзина"
    >
  </div>
</template>
<style scoped lang="scss">
.header-logo{
  @apply scale flex gap-1 text-xl uppercase items-baseline;

  @media screen and (max-width: 770px){
    @apply text-base;
  }
  @media screen and (max-width: 550px){
    @apply text-xs;
  }
}
h1{
  @apply duration-300 text-black hover:text-blue-300;
}
img{
  transition: transform 0.3s;
  @media screen and (max-width: 470px){
    display: none;
  }
}
.scale:hover img {
  transform: scale(1.2);
  @media screen and (max-width: 770px){
    transform: scale(1.1);
  }
}
</style>

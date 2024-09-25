<script setup>
// Your script setup can go here if needed
</script>

<template>
  <article class="card shadow-lg z-20 p-4 relative overflow-hidden flex flex-col hover:shadow-2xl ease-in-out duration-200">
    <img
      class="card-img -z-10 mt-2"
      src='@/assets/images/card/card-img.png'
      alt="Product Image"
    >
    <button class="buy-button tracking-widest">в корзину</button>
    <div class="info mt-4 flex justify-between tracking-widest">
      <p>Крутая женщина</p>
      <span class="text-green-600">₽50</span>
    </div>
    <div class="buy-section absolute z-30 flex w-full p-4 flex-col">
      <div class="info mt-4 flex justify-between tracking-widest">
        <p>Крутая женщина</p>
        <span class="text-green-600">₽50</span>
      </div>
      <p class="card-text text-gray-500 tracking-widest w-full text-xs text-justify">
        Умеет делать абсолютно всё все что
        не скажешь, в общем имба.
      </p>
    </div>
  </article>
</template>

<style scoped lang="scss">
.card {
  width: 250px;
  height: 260px;

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
    width: 218px;
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
  height: 110px;
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
  @apply z-50 absolute text-white uppercase cursor-pointer opacity-0;
  font-family: $default-font;
  width: 132px;
  height: 32px;
  border: 1px solid #fff;
  padding: 8px 16px;
  font-size: 14px;
  transition: all 0.4s ease-in-out;
  top: -50px;
  margin-inline: 16%;
}

.card:hover .buy-button {
  top: 25%;
  opacity: 1;
}
.buy-button:hover {
  background-color: rgba(253, 255, 255, 0.44);
}
</style>
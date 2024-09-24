<template>
  <nav>
    <menu class="flex uppercase gap-16 h-full items-center text-sm tracking-widest">
      <router-link to="/basket"><li>корзина</li></router-link>
      <li>заказы</li>
      <button
        class="flex p-2 bg-black rounded text-white uppercase hover:bg-blue-200 hover:text-black ease-in-out duration-300"  
        @click="$router.push({name: 'register'})"
      >
        регистрация
      </button>
    </menu>
  </nav>
</template>
<style scoped lang="scss">
li {
  display: inline;
  position: relative;
  cursor: pointer;
}

li::after {
  content: '';
  display: block;
  height: 3px;
  background: #bbb8f3;
  width: 0;
  transition: width 0.3s;
  position: absolute;
  left: 0;
  bottom: -3px; /* Расстояние от текста */
}

li:hover::after {
  width: 100%; /* Длина подчеркивания */
}
</style>
<script setup lang="ts">
</script>
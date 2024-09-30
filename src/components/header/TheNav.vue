<script setup>
import { useAuthStore } from '@/stores/AuthStore.js';

import {storeToRefs} from "pinia";

const { isAuthenticated } = storeToRefs(useAuthStore());
const authStore = useAuthStore();
</script>

<template>
  <nav>
    <menu class="header-nav">
      <template v-if="isAuthenticated">
        <router-link to="/basket"><li>корзина</li></router-link>
        <router-link to="/orders"><li>заказы</li></router-link>
      </template>
      <button
        v-if="!isAuthenticated"
        class="flex p-2 bg-black rounded text-white uppercase hover:bg-blue-200 hover:text-black ease-in-out duration-300"
        @click="$router.push('/register')"
      >
        регистрация/вход
      </button>
      <button
        v-else
        class="flex p-2 bg-black rounded text-white uppercase hover:bg-blue-200 hover:text-black ease-in-out duration-300"
        @click="authStore.logout"
      >
        выйти
      </button>
    </menu>
  </nav>
</template>

<style scoped lang="scss">
.header-nav{
  @apply flex uppercase gap-16 h-full items-center text-sm tracking-widest;

  @media screen and (max-width: 770px) {
    @apply gap-6 text-xs
  }
  @media screen and (max-width: 595px) {
    @apply gap-2
  }
}
a.router-link-active li::after {
  width: 100%;
}
li {
  @apply inline relative cursor-pointer;
}

li::after {
  content: '';
  @apply block w-0 absolute left-0 -bottom-1 rounded;
  background: #bbb8f3;
  transition: all 0.3s;
  height: 3px;
}

li:hover::after {
  width: 100%;
}
</style>
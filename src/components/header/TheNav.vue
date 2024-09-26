<template>
  <nav>
    <menu class="flex uppercase gap-16 h-full items-center text-sm tracking-widest">
      <template v-if="isAuthenticated">
        <router-link to="/basket"><li>корзина</li></router-link>
        <router-link to="/order"><li>заказы</li></router-link>
      </template>
      <button
        v-if="!isAuthenticated"
        class="flex p-2 bg-black rounded text-white uppercase hover:bg-blue-200 hover:text-black ease-in-out duration-300"
        @click="goToRegister"
      >
        регистрация/вход
      </button>
      <button
        v-else
        class="flex p-2 bg-black rounded text-white uppercase hover:bg-blue-200 hover:text-black ease-in-out duration-300"
        @click="logout"
      >
        выйти
      </button>
    </menu>
  </nav>
</template>
<script setup>
import { useAuthStore } from '@/stores/AuthStore.js';

import {useRouter} from "vue-router";
import {storeToRefs} from "pinia";

const { isAuthenticated } = storeToRefs(useAuthStore());
const { logout } = useAuthStore();
const router = useRouter();


const goToRegister = () => {
  router.push('/register');
};

// const logout = () => {
//   authLogout();
// };
</script>
<style scoped lang="scss">
a.router-link-active li::after {
  width: 100%;
}
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
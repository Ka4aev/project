<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/AuthStore.js';

const email = ref('');
const password = ref('');
const authStore = useAuthStore();

const handleLogin = () => {
  authStore.login({ email: email.value, password: password.value });
};

</script>

<template>
  <div class="login">
    <form @submit.prevent="handleLogin">
      <label
        class="label"
        for="chk"
        aria-hidden="true"
      >
        Вход
      </label>
      <p
        v-if="authStore.loginError"
        class="text-red-600 text-center"
      >
        {{ authStore.loginError }}
      </p>
      <input
        v-model="email"
        type="email"
        name="email"
        placeholder="Почта"
        required
      />
      <input
        v-model="password"
        type="password"
        name="pswd"
        placeholder="Пароль"
        required
      />
      <button
        type="submit"
      >
        Войти
      </button>
    </form>
  </div>
</template>

<style scoped lang="scss">
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:active,
input:-webkit-autofill:focus {
  background-color: #ffffff !important;
  color: #555 !important;
  -webkit-box-shadow: 0 0 0 1000px #d3d2ff inset !important;
  -webkit-text-fill-color: #06459c !important;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
.label {
  font-family: $second-font;
  letter-spacing: 2px;
}
label {
  color: #fff;
  font-size: 2.5em;
  justify-content: center;
  display: flex;
  margin: 50px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.5s ease-in-out;
}
input {
  width: 60%;
  height: 35px;
  background: #ffffff;
  justify-content: center;
  display: flex;
  margin: 20px auto;
  padding: 12px;
  border: none;
  outline: none;
  border-radius: 5px;
}
button {
  width: 60%;
  height: 40px;
  margin: 30px auto;
  justify-content: center;
  display: block;
  color: #fff;
  background: #2861c3;
  font-size: 1em;
  font-weight: bold;
  outline: none;
  border: none;
  border-radius: 5px;
  transition: 0.2s ease-in;
  cursor: pointer;
}
button:hover {
  background: #568ee4;
}
.login {
  height: 490px;
  background: #eee;
  border-radius: 60% / 10%;
  transform: translateY(-190px);
  transition: 0.8s ease-in-out;
}
.login label {
  color: #573b8a;
  transform: scale(0.6);
}

#chk:checked ~ .login {
  transform: translateY(-500px);
}
#chk:checked ~ .login label {
  transform: scale(1);
}
</style>
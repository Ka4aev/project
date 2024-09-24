<script setup>
import {ref} from "vue";

const email = ref('');
const password = ref('');
const fio = ref('')
</script>

<template>
  <div class="m-0 p-0 justify-center items-center min-h-svh overflow-hidden flex">
    <div class="main overflow-hidden rounded-xl drop-shadow-2xl">
      <input
        id="chk"
        class="hidden"
        type="checkbox"
        aria-hidden="true"
      />
      <div class="relative w-full h-full">
        <form @submit.prevent>
          <label
            class="label"
            for="chk"
            aria-hidden="true"
          >
            Регистрация
          </label>

          <input
            v-model="fio"
            type="text"
            name="txt"
            placeholder="ФИО"
            required
          />

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

          <button type="submit">Зарегистрироваться</button>
        </form>
      </div>

      <div class="login">
        <form @submit.prevent>
          <label
            class="label"
            for="chk"
            aria-hidden="true"
          >
            Вход
          </label>

          <input
            type="email"
            name="email"
            placeholder="Почта"
            required
          />
          <input
            type="password"
            name="pswd"
            placeholder="Пароль"
            required
          />
          <button type="submit">Войти</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:active,
input:-webkit-autofill:focus {
  background-color: #FFFFFF !important;
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

.main {
  width: 800px;
  height: 550px;
  background: linear-gradient($blue-color, #415bb6);
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
  height: 460px;
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
#chk:checked ~ .signup label {
  transform: scale(0.6);
}
</style>

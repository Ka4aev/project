<script setup>
import * as yup from "yup";
import {useForm} from "vee-validate";


import {useAuthStore} from "@/stores/AuthStore.js";
import {storeToRefs} from "pinia";
import {useRouter} from "vue-router";

const { isAuthenticated } = storeToRefs(useAuthStore())
const authStore = useAuthStore();
const router = useRouter()

const yupValidationSchema = yup.object({
  email: yup
      .string()
      .email('Некорректная почта')
      .required('Поле является обязательным'),
  password: yup.string().min(6, 'Минимум 6 символов').max(20).required('Поле является обязательным'),
  fio: yup.string().required('Поле является обязательным')
})
const {
  defineField,
  errors,
  handleSubmit
} = useForm({
  validationSchema: yupValidationSchema
})

/** объявление полей для хранения значений */
const [email, emailAttrs] = defineField('email')
const [password, passwordAttrs] = defineField('password')
const [fio, fioAttrs] = defineField('fio')

const submit = handleSubmit((values) => {
  authStore.register({ email: values.email, password: values.password, fio: values.fio })})

const goHome = () =>{
  isAuthenticated.value ? router.push('/') : null;
}
</script>

<template>
  <form @submit.prevent="submit">
    <label
      class="label"
      for="chk"
      aria-hidden="true"
    >
      Регистрация
    </label>
  
    <input
      id="fio"
      v-model="fio"
      v-bind="fioAttrs"
      :class ="{'error-input' : errors.fio}"
      type="text"
      name="fio"
      placeholder="ФИО"
      required
    />
    <p
      v-if="errors.fio"
      class="error-message"
    >
      {{ errors.fio }}
    </p>
    <input
      v-bind="emailAttrs"
      id="email"
      v-model="email"
      :class ="{'error-input' : errors.email}"
      type="email"
      name="email"
      autocomplete="user-name"
      placeholder="Почта"
      required
    />
    <p
      v-if="errors.email"
      class="error-message"
    >
      {{ errors.email }}
    </p>

    <input
      v-bind="passwordAttrs"
      id="password"
      v-model="password"
      :class="{'error-input' : errors.password}"
      type="password"
      name="password"
      autocomplete="current-password"
      placeholder="Пароль"
      
      required
    />
    <p
      v-if="errors.password"
      class="error-message"
    >
      {{ errors.password }}
    </p>

    <button
      :disabled="errors.email || errors.password || errors.fio"
      :class="{'error-button' : errors.email || errors.password || errors.fio}"
      type="submit"
      @click="goHome"
    >
      Зарегистрироваться
    </button>
  </form>
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

.error-message{
  @apply ml-40 text-base -mt-3.5 opacity-80 text-blue-950;

  @media screen and (max-width:550px ) {
    @apply ml-0 text-center
  }
}
.error-input{
  border: 0.15rem solid rgba(255, 0, 0, 0.78);
}
.error-button{
  background: #aca2a2;
  &:hover{
    background: #aca2a2;
  }
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
  @apply text-white text-4xl/normal justify-center flex m-10 font-bold cursor-pointer;
  transition: 0.5s ease-in-out;
}
input {
  @apply w-3/5 h-9 bg-white justify-center flex my-5 mx-auto p-3 border-none outline-none rounded-md;
}
button {
  @apply w-3/5 h-10 my-8 mx-auto justify-center block text-white text-base font-bold border-none outline-none rounded-md cursor-pointer;
  background: $button-auth-color;
  transition: 0.2s ease-in;
}
button:hover {
  background: $button-auth-hover;
}
#chk:checked ~ .signup label {
  transform: scale(0.6);
}
</style>
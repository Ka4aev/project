<script setup>
import * as yup from "yup";
import {useForm} from "vee-validate";


import {useAuthStore} from "@/stores/AuthStore.js";
import {onMounted} from "vue";
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
  password: yup.string().min(6).max(20)

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
//   axios.post(API_LINK, {
//     fio: values.fio,
//     email: values.email,
//     password: values.password
//   }).then((res) => console.log(res.data))
//       .catch((err) => console.error(err))
// })
const goHome = () =>{
  isAuthenticated.value ? router.push('/') : null;
}
onMounted(() => console.log(isAuthenticated.value))
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
      type="text"
      name="fio"
      placeholder="ФИО"
      required
    />

    <input
      v-bind="emailAttrs"
      id="email"
      v-model="email"
      type="email"
      name="email"
      placeholder="Почта"
      required
    />
    <p
      v-if="errors.email"
      class="ml-40 text-base -mt-3.5 opacity-80 text-blue-950"
    >
      {{ errors.email }}
    </p>

    <input
      v-bind="passwordAttrs"
      id="password"
      v-model="password"
      type="password"
      name="password"
      placeholder="Пароль"
      required
    />
    <p
      v-if="errors.password"
      class="ml-40 text-base -mt-3.5 opacity-80 text-blue-950"
    >
      {{ errors.password }}
    </p>

    <button
      :disabled="errors.email || errors.password"
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
#chk:checked ~ .signup label {
  transform: scale(0.6);
}
</style>
<script setup>
import RegisterForm from "@/components/forms/RegisterForm.vue";
import LoginForm from "@/components/forms/LoginForm.vue";
</script>

<template>
  <div
    class="m-0 mt-12 p-0 justify-center items-center flex"
  >
    <div class="main">
      <input
        id="chk"
        class="hidden"
        type="checkbox"
        aria-hidden="true"
      />
      <div class="relative w-full h-full">
        <register-form/>
      </div>
      <login-form/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.main {
  @apply overflow-hidden rounded-xl drop-shadow-2xl w-[800px] h-[550px];
  background: linear-gradient($blue-color, #415bb6);
}
</style>

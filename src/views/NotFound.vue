<template>
  <div class="flex items-center justify-center text-5xl p-2.5 m-10 rounded flex-col gap-16 bg-white min-h-[80vh]">
    <div class="flex items-center justify-center flex-col">
      <img
        src="@/assets/images/smile-not-found.png"
        alt="tilt-smile"
        class="h-96"
      >
      <h1>Ошибка 4<span class="text-blue-400">0</span>4</h1>
    </div>

    <p class="text-xl text-center w-3/4">
      Страница, которую вы ищете, не существует или произошла другая ошибка.
      Вернитесь назад или перейдите по ссылке <router-link to="/"><span class="text-blue-400 hover:underline duration-300">simplebuy.com</span></router-link>, чтобы выбрать новое направление.
    </p>
  </div>
</template>

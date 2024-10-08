<template>
  <article class="card">
    <div class="card-img h-48 -z-10 mt-2"/>

    <div class="mt-8 flex justify-between">
      <p class="card-text w-3/5 h-4"></p>
      <span class="card-span pl-2 w-1/5 h-4"></span>
    </div>
  </article>
</template>

<style scoped lang="scss">
.card {
  width: 270px;
  height: 320px;
  @apply shadow-lg z-20 p-4 relative overflow-hidden flex flex-col;

  &-img, &-text, &-span {
    position: relative;
    background-color: #e0e0e0;
    border: none;
    box-shadow: none;
    outline: none;
  }

  &-img {
    animation: shimmer 1.5s infinite linear;
  }

  &-text, &-span {
    animation: shimmer 1.5s infinite linear;
  }
}

@keyframes shimmer {
  0% {
    background-position: -100% 0;
  }
  100% {
    background-position: 100% 0;
  }
}

.card-img, .card-text, .card-span {
  background: linear-gradient(
          90deg,
          rgb(211, 211, 211) 0%,
          rgba(240, 240, 240, 1) 50%,
          rgba(211, 211, 211, 1) 100%
  );
  background-size: 200% 100%;
}
</style>
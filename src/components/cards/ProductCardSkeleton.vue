<template>
  <article class="card">
    <div class="card-img h-48 -z-10 mt-2"/>

    <div class="card-info mt-8 flex justify-between">
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
  @media screen and (max-width: 995px) {
    @apply w-56 h-64;
  }
  @media screen and (max-width: 595px) {
    @apply w-[270px] h-[320px];
  }

  &-img, &-text, &-span {
    position: relative;
    background-color: #e0e0e0;
    border: none;
    box-shadow: none;
    outline: none;
  }


  &-img {
    animation: shimmer 1.5s infinite linear;
    @media screen and (max-width: 995px) {
      @apply h-32;
    }
    @media screen and (max-width: 595px) {
      @apply h-48;
    }
  }

  &-text, &-span {
    animation: shimmer 1.5s infinite linear;
  }
  &-info{
    @media screen and (max-width: 995px){
      @apply text-sm justify-between gap-1;
    }
    @media screen and (max-width: 995px){
      @apply text-base;
    }
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
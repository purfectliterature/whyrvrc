<template>
  <section class="relative bg-memory-black flex flex-col md:items-center">
    <div class="
      this-year-text relative z-10 flex flex-col text-white pt-16 px-4 space-y-8
      sm:px-8 md:px-16
      md:text-center md:items-center
    ">
      <div class="space-y-1">
        <h2>Even when life gets hard,</h2>
        <p class="font-extended font-extrabold text-7xl lg:text-8xl">we'll overcome together.</p>
      </div>

      <p class="text-lg this-year-description">
        RVRC is the first residential college at NUS to stay open despite others want to close.
        I know we are cool and all, and you can be sure that we always ready with all the safe 
        management measures. Just declare your temperature, you won’t be kicked out.
      </p>
    </div>

    <img src="@/assets/images/memory-lawn.jpg" alt="Lawn" class="
      -mt-8 sm:-mt-16 md:-mt-32 lg:-mt-64
    ">

    <div class="px-5 pb-8 flex flex-row items-center justify-center md:flex-col md:items-start md:justify-start md:w-4/5 md:pr-0">
      <unicon name="image-v" fill="#BDBDBD" width="1.5rem" height="1.5rem" />
      <p class="memory-description text-memory-light-gray font-medium text-sm leading-snug ml-3 md:ml-0 md:mt-1">
        Photo of people partying like it’s 2020
      </p>
    </div>
  </section>
</template>

<script>
import { theme } from "@/../tailwind.config";
const colours = theme.extend.colors;

export default {

}
</script>

<style scoped>
.this-year-text {
  max-width: 75rem;
}

@media (min-width: 768px) {
  .this-year-description {
    max-width: 32rem;
  }
}

@media (min-width: 1024px) {
  .this-year-description {
    max-width: 40rem;
  }
}
</style>
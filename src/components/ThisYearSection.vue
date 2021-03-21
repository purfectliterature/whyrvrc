<template>
  <section class="relative bg-memory-black flex flex-col md:items-center">
    <div class="
      this-year-text relative z-10 flex flex-col text-white pt-16 px-4 space-y-8
      sm:px-8 md:px-16
      md:text-center md:items-center
    ">
      <div class="space-y-1">
        <h2>And even if this year has been tough,</h2>
        <p class="font-extended font-extrabold text-7xl lg:text-8xl">fun still exists.</p>
      </div>

      <p class="text-lg this-year-description">
        RVRC is the first residential college at NUS to restore face-to-face physical classes, all conducted
        safely with compliance of safe management measures. Physical interactions are important in your experiential 
        learning and living here, and thus the college enforces and maintains a high standard of safe management measures.
        With these measures, you can continue to learn and live your precious university life smoothly and safely, and your
        loved ones can have the peace of mind that you will be catered for doing so.
      </p>
    </div>

    <img src="@/assets/images/memory-lawn.jpg" alt="Lawn" class="
      -mt-8 sm:-mt-16 md:-mt-32 lg:-mt-64
    ">

    <div class="px-5 pb-8 flex flex-row items-center justify-center md:flex-col md:items-start md:justify-start md:w-4/5 md:pr-0">
      <unicon name="image-v" fill="#BDBDBD" width="1.5rem" height="1.5rem" />
      <p class="memory-description text-memory-light-gray font-medium text-sm leading-snug ml-3 md:ml-0 md:mt-1">
        RVRC residents having a late-night supper party on the RVRC Lawn, all exuberantly mingling while respecting safe management measures.
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
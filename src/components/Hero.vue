<template>
  <section class="relative hero">
    <div class="hero-fragment hero-image bg-hero" />

    <div class="hero-fragment h-full flex flex-col justify-between">
      <div class="
        w-full
        h-full
        px-4
        flex
        flex-col
        items-start
        justify-end
        mb-28
        sm:px-8
        md:w-2/3
        md:self-start
        md:pl-8
        lg:pl-16
        lg:w-3/5
        2xl:w-1/2
        2xl:pl-28
      ">
        <img 
          src="@/assets/images/rvrc-logo-secondary.svg"
          alt="RVRC logo"
          class="h-16 mb-4 md:h-20 lg:h-26 lg:mb-10"
        >

        <div class="text-white">
          <h1 class="font-bold md:text-6xl lg:text-7xl">
            The potential to be
            <span class="font-extended font-extrabold text-yellow-300">what you want to be</span>.
          </h1>
        </div>
      </div>

      <scroll-down-indicator />
    </div>
  </section>
</template>

<script>
import ScrollDownIndicator from "./ScrollDownIndicator";

export default {
  name: "Hero",
  components: { ScrollDownIndicator }
}
</script>

<style scoped>
.hero {
  @apply h-screen bg-shield-black;
  min-height: 42rem;
  max-height: 60rem;
}

.hero-fragment {
  @apply absolute w-full;
}

.hero-image {
  @apply bg-no-repeat bg-cover;
  height: 70%;
  background-position: 80% 50%;
}

@media (min-width: 768px) {
  .hero-image {
    height: 100%;
  }
}
</style>
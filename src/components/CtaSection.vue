<template>
  <section class="bg-gray-100 text-rvrc-purple flex flex-col md:items-center">
    <div class="
      cta-text relative z-10 flex flex-col text-rvrc-purple pt-16 px-4 space-y-8
      sm:px-8 md:px-16
      md:text-center md:items-center
    ">
      <div class="space-y-1">
        <h2>Now it's your turn to</h2>
        <p class="font-extended font-extrabold text-7xl lg:text-8xl">frame your story.</p>
        <p class="text-2xl pt-2">Because at RVRC, you have the potential to be.</p>
      </div>

      <p class="text-lg cta-description">
        RVRC is situated at whatever valley, allowing you to access to essential facilities, amenities, and your 
        classes right within walking distance. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <button>Apply now</button>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.cta-text {
  max-width: 75rem;
}

@media (min-width: 768px) {
  .cta-description {
    max-width: 32rem;
  }
}

@media (min-width: 1024px) {
  .cta-description {
    max-width: 40rem;
  }
}
</style>
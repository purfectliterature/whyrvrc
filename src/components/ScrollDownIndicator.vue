<template>
  <div class="gradient flex flex-col items-center text-white w-full pb-4">
    <p class="block uppercase tracking-wider pb-1">Discover your potential</p>
    <unicon class="hidden sm:block" name="mouse-alt" fill="white" width="2rem" height="2rem" />
    <unicon name="angle-down" fill="white" width="1.5rem" height="1.5rem" />
  </div>
</template>

<script>
export default {
  name: "ScrollDownIndicator"
}
</script>

<style scoped>
@media (min-width: 768px) {
  .gradient {
    background: linear-gradient(to bottom, transparent, #0F0F0E);
  }
}
</style>
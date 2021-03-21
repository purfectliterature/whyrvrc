<template>
  <div class="gradient flex flex-col items-center text-white w-full pb-4 sticky bottom-0">
    <p class="block uppercase tracking-wider pb-1">Discover your potential</p>
    <unicon class="hidden sm:block" name="mouse-alt" fill="white" width="2rem" height="2rem" />
    <unicon class="angle-down" name="angle-down" fill="white" width="1.5rem" height="1.5rem" />
  </div>
</template>

<script>
export default {
  name: "ScrollDownIndicator"
}
</script>

<style scoped>
.angle-down {
  animation: sliding 2s linear infinite;
}

@keyframes sliding {
  0% { 
    transform: translateY(0rem);
    opacity: 0; 
  }

  50% {
    transform: translateY(0.5rem);
    opacity: 1;
  }

  100% {
    transform: translateY(1rem);
    opacity: 0; 
  }
}

@media (min-width: 768px) {
  .gradient {
    background: linear-gradient(to bottom, transparent, #0F0F0E);
  }
}

@media (max-height: 35rem) {
  .gradient {
    position: relative;
  }
}
</style>
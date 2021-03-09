<template>
  <section class="bg-gray-100 h-screen flex flex-col">
    <div class="space-y-1 text-rvrc-purple text-center h-full flex flex-col justify-center sm:px-8 md:px-16 lg:px-32">
      <h2>But, seriously</h2>
      <p class="font-extended font-extrabold text-7xl">what can you be?</p>
    </div>
    <div class="flex flex-row justify-center tracking-wider font-semibold uppercase text-memory-gray text-center pb-8">
      <p>Continue </p>
      <div id="scrolling" class="mt-4 ml-1">
        <p>scrolling</p>
      </div>
    </div>

    <div class="bg-zig bg-contain h-8 bg-center" />
  </section>
</template>

<script>
export default {
  name: "WhatSection"
}
</script>

<style scoped>
#scrolling {
  perspective: 2rem;
}

#scrolling p {
  animation: sliding 1.5s linear infinite;
}

@keyframes sliding {
  0% { 
    transform: translateY(0rem) rotateX(-20deg) scaleY(0.8) scaleX(0.95);
    opacity: 0;
  }

  50% {
    transform: translateY(-1rem) rotateX(0deg) scaleY(1.0) scaleX(1.0);
    opacity: 1;
  }

  100% {
    transform: translateY(-2rem) rotateX(20deg) scaleY(0.8) scaleX(0.95);
    opacity: 0; 
  }
}
</style>
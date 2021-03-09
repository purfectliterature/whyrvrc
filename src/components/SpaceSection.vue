<template>
  <section id="space-bg" class="bg-space bg-no-repeat bg-center bg-cover">
    <div id="space-shade" class="w-full h-full text-center px-4 py-16 lg:py-32 space-y-16 2xl:space-y-32 text-white flex flex-col items-center">
      <div class="w-full flex flex-col items-center">
        <h2 class="mb-1">The college with the</h2>
        <div v-observe-visibility="spaceWordVisible" class="space-container font-extended font-black text-7xl lg:text-8xl 2xl:text-9xl flex flex-row justify-center w-full">
          <span id="space-word">s</span>
          <span id="space-word">p</span>
          <span id="space-word">a</span>
          <span id="space-word">c</span>
          <span id="space-word">e</span>
        </div>
        <h2 class="mt-5">to unleash your true potential.</h2>
      </div>

      <p class="text-lg space-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <button>
        Show me around
      </button>
    </div>
  </section>
</template>

<script>

import anime from "animejs";

export default {
  name: "SpaceSection",
  methods: {
    spaceWordVisible: function (isVisible) {
      if (isVisible) {
        anime({
          targets: "#space-word",
          width: "20%", // width must be (100/n)%, where n is number of letters assigned #space-word
          duration: 1000,
          easing: "easeOutExpo"
        });

        anime({
          targets: "#space-shade",
          backgroundColor: "rgba(0,0,0,0.4)",
          duration: 500,
          easing: "easeOutExpo"
        });
      } else {
        anime({
          targets: "#space-word",
          width: "11%",
          duration: 1
        });
      }
    }
  }
}
</script>

<style scoped>
.space-container {
  max-width: 700px;
}

.space-description {
  max-width: 500px;
}

@media (min-width: 1536px) {
  .space-container {
    max-width: 1000px;
  }

  .space-description {
    max-width: 700px;
  }
}
</style>
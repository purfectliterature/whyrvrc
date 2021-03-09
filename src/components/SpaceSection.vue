<template>
  <section id="space-bg" class="text-center px-4 py-16 space-y-16 text-white bg-black bg-space bg-no-repeat bg-center bg-cover">
    <div class="space-y-2">
      <h2 class="font-bold">The college with the</h2>
      <div v-observe-visibility="spaceWordVisible" class="font-extended font-black text-7xl flex flex-row justify-center">
        <span id="space-word">s</span>
        <span id="space-word">p</span>
        <span id="space-word">a</span>
        <span id="space-word">c</span>
        <span id="space-word">e</span>
      </div>
      <h2 class="font-bold">to unleash your true potential.</h2>
    </div>

    <p class="text-lg">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>

    <button>
      Show me around
    </button>
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

</style>
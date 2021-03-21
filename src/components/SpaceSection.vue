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
        RVRC is the <b>largest residential college</b> at NUS. The visually distinct brick-clad interconnected buildings span along the Kent Ridge and nestled 
        against the lush backdrop of the Kent Ridge Forest. Unlike the typically dense urban Singaporean setting, RVRC is landscaped with open courtyards, 
        heritage trees, open grills, and culture gardens. It is really the college with the space to unleash your true potential.
      </p>

      <p-button href="https://www.youtube.com/watch?v=I5srlwPX0Qc" icon="arrow-right" :icon-color="yellow" childClasses="bg-white text-rvrc-purple">
        Show me around
      </p-button>
    </div>
  </section>
</template>

<script>
import anime from "animejs";
import PButton from "./PButton";
import { theme } from "@/../tailwind.config";
const colours = theme.extend.colors;

export default {
  name: "SpaceSection",
  components: { PButton },
  data() {
    return {
      yellow: colours['rvrc-yellow']
    }
  },
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
<template>
  <section class="flex flex-row justify-center bg-shield-black">
    <section class="shield-intro w-full h-full bg-shield text-white relative space-y-4">
      <text-section v-for="para in paragraphs" :key="para.id" :heading="para.heading" :paragraph="para.paragraph" />
    </section>
  </section>
</template>

<script>
import TextSection from "./TextSection";

class Paragraph {
  constructor(id, heading, paragraph) {
    this.id = id;
    this.heading = heading;
    this.paragraph = paragraph;
  }
}

export default {
  components: { TextSection },
  name: "IntroShield",
  data() {
    return {
      paragraphs: [
        new Paragraph("about",
          "Ridge View Residential College is a flagship residential college at the National University of Singapore.",
          "RVRC is the largest residential college at NUS, housing diverse students from a plethora of academic disciplines, all together in the Ridge View Residential College Programme."
        ),

        new Paragraph("programme",
          "The RVRC experience prepares you for life in university, during and beyond.",
          "The RVRC programme is two-year experiential learning residency with an integrated inter-disciplinary approach in sustaibility and communication, designed to cultivate students’ holistic development to embrace life in and beyond university and the workplace. "
        ),

        new Paragraph("potential",
          "Find the potential to be what your heart desires to be, within a diverse and engaging community.",
          "The integration between living and learning at RVRC allows you to immerse in an engaging, diverse community where you have every space to express and hone your interests with like-minded people. RVRC is truly more than a residential college, it is a potential."
        )
      ]
    };
  }
}
</script>

<style scoped>
.shield-intro {
  @apply bg-no-repeat bg-top px-4 sm:px-8 md:px-16 lg:pr-8;
  max-width: 1200px;
  background-size: 130%;
  padding-top: 120%;
}

@media (min-width: 640px) {
  .shield-intro {
    background-size: 110%;
    padding-top: 100%;
  }
}

@media (min-width: 768px) {
  .shield-intro {
    background-size: 100%;
    padding-top: 95%;
  }
}

@media (min-width: 1024px) {
  .shield-intro {
    /* pt-16 must be here to override padding-top from previous */
    @apply py-16;
    background-size: 60%;
    background-position: -2rem 0;
  }

  .shield-intro section {
    margin-left: 50%;
  }
}
</style>
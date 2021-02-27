<template>
  <section class="flex flex-row justify-center bg-shield-black">
    <section class="shield-intro w-full h-full bg-shield text-white relative">
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
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        ),

        new Paragraph("location",
          "Situated at the heart of NUS, RVRC is home to the many lorem ipsum dolor sit amet.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        ),

        new Paragraph("else",
          "We will never gonna give you up, let you down, run around and desert you, make you cry, or say goodbye.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        ),

        new Paragraph("else2",
          "We will never gonna give you up, let you down, run around and desert you, make you cry, or say goodbye.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
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
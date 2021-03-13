<template>
  <!-- <section class="bg-memory-gray pt-16 text-white flex flex-col items-center">
    <div class="memory-content">
      <div class="relative flex flex-col">
        <div class="relative z-10 px-4 sm:px-8 lg:px-16">
          <h2 class="text-gray-300">These people are</h2>
          <p class="font-extended font-bold text-5xl">playing in RVRC's annual concert.</p>
        </div>

        <aspect-ratio-image w="3" h="2" src="memory-jukebox.jpg" alt="Jukebox" fitting="cover" classes="
          z-0 w-full mt-8 md:-mt-4 md:w-10/12 md:self-end
        " />
      </div>

      <div class="px-4 py-4 sm:px-8 flex flex-col md:flex-row-reverse lg:pr-16 lg:ml-20">
        <div class="px-5 flex flex-row justify-center md:flex-col md:pr-0">
          <unicon name="image-v" fill="white" width="1.5rem" height="1.5rem" />
          <p class="memory-description font-medium text-sm leading-snug ml-3 md:ml-0 md:mt-1">
            <span>Anything is Fine</span> performing in <span>Concert by the Ridge</span> in 2018 and having very much fun.
          </p>
        </div>

        <p class="memory-description mt-8 text-lg md:mt-0 md:mr-8">
          <span>Jukebox</span> is RVRC’s music performance interest group, recognised around NUS for their lorem ipsum vibrant 
          holistic words insert here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  </section> -->
  <section class="bg-gradient-to-b from-memory-gray to-memory-black">
    <memory-list-item imageUrl="memory-jukebox.jpg" imageAlt="Jukebox">
      <template v-slot:pre-caption>These people are</template>
      <template v-slot:caption>playing in RVRC's annual concert.</template>
      <template v-slot:image-description>
        <span>Anything is Fine</span> performing in <span>Concert by the Ridge</span> in 2018 and having very much fun.
      </template>
      <template v-slot:description>
        <span>Jukebox</span> is RVRC’s music performance interest group, recognised around NUS for their lorem ipsum vibrant 
        holistic words insert here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua.
      </template>
    </memory-list-item>

    <memory-list-item imageUrl="memory-refresh.jpg" imageAlt="Project Refresh" right>
      <template v-slot:pre-caption>These people are</template>
      <template v-slot:caption>refurbishing needy houses for new year.</template>
      <template v-slot:image-description>
        <span>Ke Yimin laughing</span> for no reason in <span>Project Refresh</span> in 2018.
      </template>
      <template v-slot:description>
        <span>Community service</span> is RVRC’s whatever I’m not a copywriter, recognised around NUS for their lorem ipsum
        vibrant holistic words insert here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua.
      </template>
    </memory-list-item>

    <memory-list-item imageUrl="memory-tchoukball.jpg" imageAlt="Tchoukball">
      <template v-slot:pre-caption>These people are</template>
      <template v-slot:caption>smacking that ball hard to make us proud.</template>
      <template v-slot:image-description>
        <span>Mr X</span> smacc that thicc bol in <span>Intercollege Games</span> sometime ago.
      </template>
      <template v-slot:description>
        <span>Jukebox</span> is RVRC’s music performance interest group, recognised around NUS for their lorem ipsum vibrant 
        holistic words insert here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua.
      </template>
    </memory-list-item>
  </section>
</template>

<script>
import MemoryListItem from './MemoryListItem';

export default {
  name: "MemorySection",
  components: { MemoryListItem }
}
</script>

<style scope>
.memory-content {
  max-width: 85rem;
}

p.memory-description span {
  @apply font-extended;
}
</style>
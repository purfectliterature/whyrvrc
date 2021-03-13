<template>
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
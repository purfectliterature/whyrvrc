<template>
  <div>
    <hero />
    <intro-shield />
    <space-section />
    <heart-section />
    <div class="bg-blue-700 h-60"></div>
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue';
import IntroShield from '@/components/IntroShield.vue';
import SpaceSection from '@/components/SpaceSection.vue';
import HeartSection from '@/components/HeartSection.vue';

export default {
  name: "HomePage",
  components: { Hero, IntroShield, SpaceSection, HeartSection }
}
</script>
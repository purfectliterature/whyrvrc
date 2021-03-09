<template>
  <div>
    <hero />
    <intro-shield />
    <space-section />
    <div class="bg-blue-700 h-60"></div>
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue';
import IntroShield from '@/components/IntroShield.vue';
import SpaceSection from '@/components/SpaceSection.vue';

export default {
  components: { Hero, IntroShield, SpaceSection },
  name: "HomePage"
}
</script>
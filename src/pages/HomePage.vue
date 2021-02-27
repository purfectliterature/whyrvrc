<template>
  <div>
    <hero />
    <intro-shield />
    <div class="bg-blue-700 h-60"></div>
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue';
import IntroShield from '@/components/IntroShield.vue';

export default {
  components: { Hero, IntroShield },
  name: "HomePage"
}
</script>
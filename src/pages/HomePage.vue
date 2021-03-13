<template>
  <div>
    <hero />
    <intro-shield />
    <space-section />
    <heart-section />
    <what-section />
    <memory-section />
    <this-year-section />
    <cta-section />
    <div class="bg-blue-700 h-60"></div>
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue';
import IntroShield from '@/components/IntroShield.vue';
import SpaceSection from '@/components/SpaceSection.vue';
import HeartSection from '@/components/HeartSection.vue';
import WhatSection from '@/components/WhatSection.vue';
import MemorySection from '@/components/MemorySection.vue';
import ThisYearSection from '@/components/ThisYearSection.vue';
import CtaSection from '@/components/CtaSection.vue';

export default {
  name: "HomePage",
  components: {
    Hero,
    IntroShield,
    SpaceSection,
    HeartSection,
    WhatSection,
    MemorySection,
    ThisYearSection,
    CtaSection
  }
}
</script>,
    ThisYearSection
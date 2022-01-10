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
    <footer-section />
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
import FooterSection from '@/components/FooterSection.vue';

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
    CtaSection,
    FooterSection
  },
  mounted() {
    this.$nextTick(function () {
      this.$gtag.pageview("/");
    });
  }
}
</script>,
    ThisYearSection
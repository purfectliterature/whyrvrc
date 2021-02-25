<template>
  <div>
    <hero />
    <div class="bg-blue-700 h-60"></div>
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue';

export default {
  components: { Hero },
  name: "HomePage"
}
</script>
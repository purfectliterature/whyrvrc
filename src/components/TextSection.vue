<template>
  <section class="pb-10">
    <h3 class="font-semibold mb-3">{{ heading }}</h3>
    <p class="text-lg">{{ paragraph }}</p>
  </section>
</template>

<script>
export default {
  name: "TextSection",
  props: ["heading", "paragraph"]
}
</script>
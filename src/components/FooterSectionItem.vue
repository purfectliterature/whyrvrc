<template>
  <div class="flex flex-col">
    <p class="font-extended text-memory-light-gray text-lg mb-2">{{ title }}</p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "FooterSectionItem",
  props: {
    title: String
  }
}
</script>
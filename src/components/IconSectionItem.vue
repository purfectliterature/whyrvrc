<template>
  <div class="flex flex-row">
    <unicon :name="name" fill="#cecece" width="1.5rem" height="1.5rem" />
    <div class="ml-3">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "IconSectionItem",
  props: {
    name: String
  }
}
</script>
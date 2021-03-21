<template>
  <a :href="href" rel="noreferrer noopener" target="_blank" :class="classes">
    <unicon :name="name" :fill="fill" :width="size" :height="size" :class="iconClasses" :viewBox="viewBox" />
  </a>
</template>

<script>
export default {
  name: "IconLink",
  props: {
    size: String,
    name: String,
    fill: String,
    href: String,
    classes: String,
    iconClasses: String,
    viewBox: String
  }
}
</script>
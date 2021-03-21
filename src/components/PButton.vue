<template>
  <a :href="href" rel="noreferrer noopener" target="_blank" :class="`w-full sm:w-auto ${classes}`">
    <button :class="`
      text-2xl font-bold
      px-4 py-4
      rounded-2xl shadow-xl
      w-full flex flex-row items-center justify-center
      ${childClasses}
    `">
      <slot></slot>
      <unicon :name="icon" :fill="iconColor" width="2rem" height="2rem" class="ml-2" />
    </button>
  </a>
</template>

<script>
export default {
  name: "PButton",
  data() {
    return {
      yellow: colours['rvrc-yellow']
    }
  },
  props: {
    href: String,
    icon: String,
    iconColor: String,
    classes: String,
    childClasses: String
  }
}
</script>

<style scoped>

</style>
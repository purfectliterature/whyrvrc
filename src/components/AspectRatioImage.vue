<template>
  <div :class="classes">
    <div :id="id" :class="`relative h-0 overflow-hidden`" :style="`padding-top: ${parseInt(h) / parseInt(w) * 100}%;`">
      <img :src="require('@/assets/images/' + src)" :alt="alt" :class="`w-full h-full absolute top-0 right-0 object-${fitting} ${childClasses}`">
    </div>
  </div>
</template>

<script>
export default {
  name: "AspectRatioImage",
  props: {
    "w": String, 
    "h": String,
    "src": String,
    "alt": String,
    "classes": String,
    "id": String,
    "childClasses": String,
    "fitting": {
      type: String,
      default: "contain",
      validator(value) {
        return ["contain", "cover", "fill", "none", "scale-down"].indexOf(value) !== -1;
      }
    }
  }
}
</script>
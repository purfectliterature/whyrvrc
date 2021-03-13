<template>
  <section class="pt-16 text-white flex flex-col items-center">
    <div class="memory-content">
      <div :class="`relative flex flex-col ${!right ? 'items-start' : 'items-end'}`">
        <div :class="`
          relative z-10 px-4 sm:px-8
          ${!right ?
            'md:pr-32 lg:pl-16' : 
            'md:pl-32 lg:pr-16 xl:pr-32'
          }
        `">
          <h2 class="text-gray-300">
            <slot name="pre-caption"></slot>
          </h2>
          <p class="font-extended font-bold text-5xl">
            <slot name="caption"></slot>
          </p>
        </div>

        <aspect-ratio-image w="3" h="2" :src="imageUrl" :alt="imageAlt" fitting="cover" :classes="`
          z-0 w-full mt-8 md:-mt-4 md:w-10/12 ${!right ? 'md:self-end' : 'md:self-start'} 
        `" />
      </div>

      <div :class="`
        p-4 sm:px-8 flex flex-col
        ${!right ?
          'md:flex-row-reverse lg:pr-16 lg:ml-20' : 
          'md:flex-row lg:pl-16 lg:mr-20'
        }
      `">
        <div :class="`px-5 flex flex-row justify-center md:flex-col md:justify-start md:w-4/5 ${!right ? 'md:pr-0' : 'md:pl-0'}`">
          <unicon name="image-v" fill="white" width="1.5rem" height="1.5rem" />
          <p class="memory-description font-medium text-sm leading-snug ml-3 md:ml-0 md:mt-1">
            <slot name="image-description"></slot>
          </p>
        </div>

        <p :class="`memory-description mt-8 text-lg md:mt-0 ${!right ? 'md:mr-8' : 'md:ml-8'}`">
          <slot name="description"></slot>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import AspectRatioImage from "./AspectRatioImage";

export default {
  name: "MemoryListItem",
  components: { AspectRatioImage },
  props: {
    imageUrl: String,
    imageAlt: String,
    right: Boolean
  }
}
</script>

<style scope>
.memory-content {
  max-width: 85rem;
}

p.memory-description span {
  @apply font-extended;
}
</style>
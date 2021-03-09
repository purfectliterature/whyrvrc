<template>
  <section class="flex flex-col items-center lg:px-4 lg:pb-4 bg-gray-100">
    <div class="heart-text">
      <div class="
        px-4
        pt-16
        pb-8 
        space-y-8 
        text-rvrc-purple
        sm:px-8
        md:px-16
        lg:px-32
      ">
        <div class="space-y-1">
          <h2>Right in the</h2>
          <p class="font-extended font-extrabold text-7xl">heart of NUS.</p>
          <p class="font-medium italic text-2xl">No, literally.</p>
        </div>
        
        <p class="text-lg">
          RVRC is situated at whatever valley, allowing you to access to essential facilities, amenities, and your 
          classes right within walking distance. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div class="relative">
        <img
          alt="map"
          class="lg:rounded-xl"
          srcset="
            @/assets/images/map.jpg 2764w,
            @/assets/images/map-portrait.jpg 650w
          "
          sizes="
            (min-width: 1024px) 2764w,
            (max-width: 1023px) 650w
          "
        >

        <img
          alt="map"
          class="absolute top-0 w-full"
          srcset="
            @/assets/images/map-overlay.svg 2764w,
            @/assets/images/map-overlay-portrait.svg 650w
          "
          sizes="
            (min-width: 1024px) 2764w,
            (max-width: 1023px) 650w
          "
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>
.heart-text {
  max-width: 1200px;
}
</style>
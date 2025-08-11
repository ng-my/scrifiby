<template>
  <div>
    <div class="box bg-pink-400">正常 | pink</div>
    <div class="box sm:bg-red-500">
      sm: | 640px | @media (min-width: 640px) | red
    </div>
    <div class="box md:bg-blue-600">
      md: | 768px | @media (min-width: 768px) | blue
    </div>
    <div class="box lg:bg-yellow-500">
      lg: | 1024px | @media (min-width: 1024px) | yellow
    </div>
    <div class="box xl:bg-green-500">
      xl: | 1280px | @media (min-width: 1280px) | green
    </div>
    <div class="box 2xl:bg-purple-700">
      2xl: | 1536px | @media (min-width: 1536px) | purple
    </div>
  </div>
</template>

<script setup lang="ts">
/* media 组件 */
</script>

<style scoped>
.box {
  @apply flex h-20 items-center justify-center border-b;
}
</style>

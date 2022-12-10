<script setup lang="ts">
import Lenis from "@studio-freight/lenis";

tryOnMounted(() => {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
    direction: "vertical", // vertical, horizontal
    gestureDirection: "vertical", // vertical, horizontal, both
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  });

  //get scroll value
  lenis.on(
    "scroll",
    ({
      scroll,
      limit,
      velocity,
      direction,
      progress,
    }: {
      scroll: number;
      limit: number;
      velocity: number;
      direction: number;
      progress: number;
    }) => {
      console.log({ scroll, limit, velocity, direction, progress });
    }
  );

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
});
</script>

<template>
  <div class="h-[200vh] w-screen grid">
    <h1 class="place-self-center">Coco Bells</h1>
  </div>
</template>

<style lang="scss">
h1 {
  @apply text-9xl;
  @apply font-bold;
}
</style>

<script setup lang="ts">
useHead({ title: "Coco Bells" });

const links = {
  church: { url: "https://wccbangalore.org" },
  blog: { url: "https://blog.saftapologetics.com" },
} as const;
</script>

<template>
  <div class="min-h-screen w-screen grid" id="bg">
    <div class="container grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
      <svg-icon
        name="logo"
        class="w-96 col-start-1 !flex mx-auto justify-self-center"
      />
      <div class="lg:col-start-2 text-white row-start-2 lg:row-start-1">
        <h1 class="font-rochester">Merry Christmas and happy sipping!</h1>
        <p class="font-libre mt-7">
          Thank you for stopping by Coco Bells. If you ever want to drop in on a
          Sunday and catch up with us and listen to a soulful message on faith,
          hope and love,
          <nuxt-link :to="links.church.url">
            our church is always open for you.
          </nuxt-link>
          We can't wait to see you again! <br />
          <nuxt-link :to="links.blog.url">
            For thought provoking and blissful reading on Christmas, Christ and
            Christianity, click here!
          </nuxt-link>
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
h1 {
  @apply text-7xl;
}

p {
  @apply text-2xl;
  @apply leading-[1.75];
}

a {
  @apply p-1;
  @apply bg-white/40;
  @apply rounded;
  @apply transition-colors;

  &:hover {
    @apply bg-white;
    @apply text-[#75090f];
  }
}

.container {
  width: min(100%, 1200px);
  @apply mx-auto;
  @apply p-5;
}

#bg {
  background: linear-gradient(0deg, #75090f, #75090f),
    linear-gradient(0deg, #f32e6c 15.46%, rgba(243, 47, 108, 0) 93.07%),
    url(~/assets/raspberry-lace.gif);
  background-blend-mode: color, normal, normal;

  @screen lg {
    background: linear-gradient(0deg, #75090f, #75090f),
      linear-gradient(270.07deg, #f32e6c 15.46%, rgba(243, 47, 108, 0) 93.07%),
      url(~/assets/raspberry-lace.gif);
  }
}
</style>

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-font-loader",
    "@vueuse/nuxt",
    "@nuxt/image-edge",
    "nuxt-icon",
    "nuxt-svg-transformer",
  ],

  fontLoader: {
    external: [
      {
        src: "https://fonts.googleapis.com/css2?family=Rochester&display=swap",
        fallback: "cursive",
        family: "Rochester",
        class: "font-rochester",
      },
      {
        src: "https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap",
        fallback: "serif",
        family: "Libre Baskerville",
        class: "font-libre",
      },
    ],
  },
});

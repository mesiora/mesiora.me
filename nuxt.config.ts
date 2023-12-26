// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  ssr: false,

  nitro: {
    static: true,
  },

  modules: ["@nuxt/ui"],

  app: {
    head: {
      titleTemplate: "%s - Meduiora",
      title: "Me",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Itsarachon Puansak (Khom), a fullstack web developer",
        },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },

  postcss: {
    plugins: {
      "postcss-nested": {},
      "postcss-hexrgba": {},
      "postcss-import": {},
    },
  },
});

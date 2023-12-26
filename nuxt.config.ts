// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@nuxt/ui"],

  app: {
    head: {
      titleTemplate: "%s - Meduiora",
      title: "Me",
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

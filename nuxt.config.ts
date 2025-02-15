// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  components: {
    global: true,
    dirs: ["~/components"],
  },

  app: {
    head: {
      title: "My App",
      meta: [
        {
          name: "description",
          content: "My App description",
        },
      ],
    },
  },

  modules: ["@nuxtjs/tailwindcss"],
});

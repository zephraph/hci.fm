// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/fontaine", "@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      VT323: true,
    },
  },
  app: {
    head: {
      script: [
        {
          defer: true,
          "data-domain": "hci.fm",
          src: "https://plausible.io/js/script.js",
        },
      ],
    },
  },
});

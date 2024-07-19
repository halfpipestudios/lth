// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '@/assets/global.css',
  ],
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  devServer: {
    host: "192.168.1.7",
    port: 3000,
  },
})
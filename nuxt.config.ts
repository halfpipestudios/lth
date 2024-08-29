// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '@/assets/global.css',
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/variables.scss";',
        },
      },
    },
  },

  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  // devServer: {
  //   host: "192.168.100.144",
  //   port: 3000,
  // },
})
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '@/assets/global.scss',
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ['legacy-js-api', 'import'],
          additionalData: '@import "@/assets/variables.scss";',
        },
      },
    },
  },

  ssr: true,

  nitro: {
    compressPublicAssets: true,
  },

  // devServer: {
  //   host: "192.168.100.144",
  //   port: 3000,
  // },
  devtools: { enabled: false },

  compatibilityDate: '2024-09-06',
  modules: ["@nuxt/image"]
})
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '@/assets/global.scss',
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

  ssr: true,

  nitro: {
    compressPublicAssets: true,
  },

  devtools: { enabled: false },

  // devServer: {
  //   host: "192.168.100.144",
  //   port: 3000,
  // },
})
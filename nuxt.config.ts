// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  app: {
    baseURL: '/example-nuxt-app/',
    buildAssetsDir: 'build-assets',
  },
  devtools: { enabled: false },
  modules: [
    '@nuxt/eslint',
  ],
  css: ['~/assets/styles/global.css'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/main.scss" as *;',
        },
      },
    },
  },
  components: [{
    path: '~/components/ui',
    prefix: 'UI',
    extensions: ['.vue'],
  }],

});

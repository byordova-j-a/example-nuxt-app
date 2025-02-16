// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    'nuxt-mdi',
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

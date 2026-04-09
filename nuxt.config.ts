// https://nuxt.com/docs/api/configuration/nuxt-config

const IS_DEV_BUILD = process.env.NODE_ENV === 'development';

export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    '@tylkocom': '/node_modules/@tylkocom'
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',

  ],

  vite: {
    build: {
      rollupOptions: {
        output: {
          experimentalMinChunkSize: 25000
        }
      },
      modulePreload: false
    }
  },

  app: {
    buildAssetsDir: '_nuxt3/',
    // SEO
    head: {
      title: 'tylko',
      htmlAttrs: {
        lang: 'en',
      },
    },
  },

  devServer: {
    port: 3000
  },

  css: ['@/assets/scss/main.scss'],
});

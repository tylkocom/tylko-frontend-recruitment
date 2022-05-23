require('events').EventEmitter.defaultMaxListeners = 20;

const IS_DEV_BUILD = process.env.NODE_ENV === 'development';

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  target: 'server',
  server: {
    port: 3333,
    host: '0.0.0.0'
  },
  render: {
    bundleRenderer: {
      runInNewContext: false
    }
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/scss/main.scss'
  ],
  styleResources: {
    scss: [
    ],
    hoistUseStatements: true
  },
  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],
  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxtjs/axios',
    '@nuxtjs/composition-api/module',
    '@nuxtjs/device',
    '@nuxtjs/style-resources',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
    '@nuxt/typescript-build',
    '@nuxtjs/web-vitals'
  ],
  build: {
    extractCSS: !IS_DEV_BUILD,
    babel: {
      plugins: [
        ['@babel/plugin-proposal-class-properties', { loose: true }],
        ['@babel/plugin-proposal-private-methods', { loose: true }],
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }]
      ]
    },
  },
  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BROWSER_BASE_URL || 'http://127.0.0.1',
      baseURL: process.env.BASE_URL || 'http://127.0.0.1'
    },
  },
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    'nuxt-i18n',
    'portal-vue/nuxt',
  ],
  telemetry: false,
  i18n: {
    defaultLocale: 'en',
    locales: [
      { code: 'en', name: 'English', iso: 'en-GB', file: 'en.json' },
    ],
    langDir: 'locales/',
    lazy: true,
    strategy: 'prefix_except_default'
  },
  router: {},
  axios: {
    credentials: true
  },
  stylelint: {
    fix: true,
    configFile: './stylelint.config.js'
  },
  tailwindcss: {},
};

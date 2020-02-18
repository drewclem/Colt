require('dotenv').config()

export default {
  mode: 'universal',

  router: {
    prefetchLinks: true
  },
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'ColtXP is a platform for junior and senior developers to pair-program on open-source issues for a mutual benefit and growth. Add some experience to your resume while working on actual code projects!'
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'ColtXP is a platform for junior and senior developers to pair-program on open-source issues for a mutual benefit and growth. Add some experience to your resume while working on actual code projects!'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://coltxp.com/images/og-image.png'
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary',
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@coltxp1',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon-02.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat|Poppins:400,700&display=swap' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/tailwind.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/firebase.js',
    '~/plugins/fireauth.js',
    '~/plugins/vee-validate.js',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/dotenv'
  ],
  /*
  ** Build configuration
  */
  env: {
    API_KEY: process.env.API_KEY,
    AUTH_DOMAIN: process.env.AUTH_DOMAIN,
    DATABASE_URL: process.env.DATABASE_URL,
    PROJECT_ID: process.env.PROJECT_ID,
    STORAGE_BUCKET: process.env.STORAGE_BUCKET,
    MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
    APP_ID: process.env.APP_ID
  },
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      plugins: {
        tailwindcss: './tailwind.config.js'
      }
    },
    parallel: true,
    cache: true,
    transpile: [
      "vee-validate/dist/rules"
    ],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      const urlLoader = config.module.rules.find(rule => {
        return rule.test.toString() === '/\\.(png|jpe?g|gif|svg|webp)$/i'
      })

      urlLoader.test = /\.(png|jpe?g|gif|webp)$/

      config.module.rules.push({
        test: /\.svg$/,
        loader: 'svg-inline-loader?removeSVGTagAttrs=false&classPrefix=true&idPrefix=true',
      })
    }
  }
}

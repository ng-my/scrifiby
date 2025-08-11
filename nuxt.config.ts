import i18nConfig from './i18Config'
import removeConsole from 'vite-plugin-remove-console'
console.log(process.env.NUXT_PUBLIC_ENV, '---NUXT_PUBLIC_GTAG_ID---gtagId---', process.env.NUXT_PUBLIC_GTAG_ID, process.env.NUXT_PUBLIC_GOOGLE_CLIENT_ID)
export default defineNuxtConfig({
  appConfig: { // useAppConfig 获取
    title: 'Transcribe Meetings & Audio: Speaker Identification, Translate, Share | 100+ Languages - Scribify',
    version: '1.0.0'
  },
  app: {
    head: {
      title: 'Transcribe Meetings & Audio: Speaker Identification, Translate, Share | 100+ Languages - Scribify',
      meta: [
        { name: 'description', content: 'Scribify converts speech (meetings, interviews, videos, podcasts) into searchable, translatable, shareable transcripts. Identify speakers automatically, generate subtitles, & break language barriers in 100+ languages. Try Free!' },
        { name: 'keywords', content: 'Scribify, audio to text, transcription service, speaker diarization, meeting transcription, speech to text 100+ languages, transcribe meetings with multiple speakers, best transcription service for interviews' }
      ],
      link: [
        { rel: 'stylesheet', href: '/assets/iconfont/iconfont.css' }
      ],
      script: [
        { src: '/assets/iconfont/iconfont.js' },
        { src: '/assets/js/aes.js' },
        { src: '/assets/js/jsencrypt.js' }
      ]
    }
  },

  ssr: true,
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  routeRules: {
    // prerender index route by default
    '/': { prerender: true },
  },
  nitro: { // 开发环境代理配置
    preset: 'vercel',
    output: {
      dir: '.output',
      serverDir: '.output/server',
      publicDir: '.output/public'
    },
    devProxy: {
      '/wapi': {
        target: 'https://dev.scribify.ai/wapi',
        changeOrigin: true,
        prependPath: true,
        secure: false
      },
      '/domainServer': {
        target: 'https://blue.wechatsi.com/domainServer',
        changeOrigin: true,
        prependPath: true,
        secure: false
      },
      '/userServer': {
        target: 'http://rap2api.taobao.org/app/mock/324058/userServer',
        changeOrigin: true,
        prependPath: true,
        secure: false
      },
      '/stripeServer': {
        target: 'http://localhost:4242',
        changeOrigin: true,
        prependPath: true,
        secure: false
      }
    }
  },
  css: [ //指定全局css  注意顺序下覆盖上
    '~/assets/css/tailwind.css',
    '~/assets/css/element.scss'
  ],
  plugins: [
    { src: '~/plugins/gtag.js', mode: 'client' },
    { src: '~/plugins/global-error.js', mode: 'client' },
    { src: '~/plugins/vconsole.js', mode: 'client' }
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@element-plus/nuxt',
    '@unlok-co/nuxt-stripe',
    '@nuxtjs/i18n',
    '@nuxtjs/plausible',
    '@nuxtjs/sitemap',
    'nuxt-llms',
    '@nuxtjs/seo',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@vueuse/nuxt',
    'dayjs-nuxt'
  ],
  piniaPluginPersistedstate: {
    storage: 'localStorage',
    cookieOptions: {
      maxAge: 7 * 24 * 60 * 60
    },
    debug: true,
  },
  i18n: i18nConfig,
  //配置公共seo数据
  site: {
    url: 'https://www.scribify.ai',
    name: 'Transcribe Meetings & Audio: Speaker Identification, Translate, Share | 100+ Languages - Scribify', // 后面的title
    description: 'Scribify converts speech (meetings, interviews, videos, podcasts) into searchable, translatable, shareable transcripts. Identify speakers automatically, generate subtitles, & break language barriers in 100+ languages. Try Free!',
    defaultLocale: 'en-US',
    enabled: true,
    debug: false,
    indexable: true,
    trailingSlash: false,
    rules: [
      {
        userAgent: '*',
        disallow: '/private',
        allow: '/',
      }
    ],
    sitemap: 'https://www.scribify.ai/sitemap.xml'
  },
  //配置结构化数据
  schemaOrg: {
    identity: {
      type: 'Organization',
      name: 'Scribify',
      url: 'https://www.scribify.ai',
      logo: 'https://www.scribify.ai/favicon.ico'
    },
    defaults: true,
    minify: true,
    reactive: false,
    enabled: true,
    debug: false
  },
  // 大型语言模型
  llms: {
    domain: 'https://www.scribify.ai',
    title: 'Transcribe Meetings & Audio: Speaker Identification, Translate, Share | 100+ La',
    description: 'Scribify converts speech (meetings, interviews, videos, podcasts) into searchable, translatable, shareable transcripts. Identify speakers automatically, generate subtitles, & break language barriers in 100+ languages. Try Free!',
    sections: [
      {
        title: 'YouTube to MP4 Converter | Fast, HD, Ad-Free Downloads',
        description: 'Convert YouTube to HD MP4s instantly. 100% secure, ad-free tool. Download videos for offline viewing on any device. Share anywhere, no signup!',
        links: [
          {
            title: 'YouTube to MP4 Converter | Fast, HD, Ad-Free Downloads',
            description: 'Convert YouTube to HD MP4s instantly. 100% secure, ad-free tool. Download videos for offline viewing on any device. Share anywhere, no signup!',
            href: 'https://www.scribify.ai/downloader/youtube-to-mp4',
          }
        ]
      }
    ]
  },
  //运行时全局变量
  runtimeConfig: {
    //此处定义的属性只能在服务端获取到
    // Server
    name: 'SCRIBIFY',
    environment: process.env.NODE_ENV || 'production',
    stripe: {
      key: process.env.NUXT_STRIPE_SECRET_KEY,
      options: {},
    },
    // ipinfo 获取Ip信息
    ipinfoToken: process.env.IPINFO_TOKEN,
    //public中定义的属性既可以在服务端，也可以在客户端获取到
    public: {
      env: process.env.NUXT_PUBLIC_ENV || 'production',
      baseUrl: process.env.NUXT_PUBLIC_BASE_URL,
      gtagId: process.env.NUXT_PUBLIC_GTAG_ID,
      googleClientId: process.env.NUXT_PUBLIC_GOOGLE_CLIENT_ID,
      plausible: {
        domain: process.env.NUXT_PUBLIC_PLAUSIBLE_DOMAIN,
        // apiHost: process.env.NUXT_PUBLIC_PLAUSIBLE_API_HOST,
        ignoredHostnames: ['localhost', '127.0.0.1'],
        autoOutboundTracking: true,
        enabled: true,
      },
      // Client
      stripe: {
        key: process.env.NUXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
        options: {},
      }
    },
  },
  sitemap: {
    defaults: {
      changefreq: 'daily',
      priority: 0.8
    }
  },
  devServer: {
    host: '0.0.0.0' // 允许所有 IP 访问
  },
  vite: {
    // 开发环境优化
    optimizeDeps: {
      include: [
        'vue',
        'pinia',
        // 明确包含经常使用的依赖
      ]
    },
    server: {
      // 预构建优化
      preTransformRequests: true,
      allowedHosts: true // 允许指定域名
    },
    plugins: [
      ...(process.env.NUXT_PUBLIC_ENV === 'production'
        ? [removeConsole({ includes: ['log', 'info', 'warn', 'error'] })]
        : [])
    ],
    build: {
      sourcemap: true,
      minify: false,
      rollupOptions: {
        output: {
          manualChunks: {
            // 按功能分组
            'vendor-reactive': ['vue', '@vue/reactivity', '@vue/runtime-core'],
            'vendor-utils': ['lodash', 'dayjs'],
            'vendor-ui': ['element-plus'],
            'vendor-player': ['xgplayer']
          }
        }
      }
    }
  },
  // 启用组件自动导入和懒加载
  components: {
    dirs: [
      '~/components'
    ],
    // 启用懒加载
    transform: {
      exclude: [/node_modules/]
    }
  },
  // 启用实验性功能
  experimental: {
    payloadExtraction: true
  },
  // 配置构建优化
  build: {
    transpile: ['element-plus'] // 只转译必要的依赖
  },
  elementPlus: {
    /** Options */
    importStyle: 'scss',
    cache: true
  },
})

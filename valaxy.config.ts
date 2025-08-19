import type { UserThemeConfig } from 'valaxy-theme-yun'
import { defineValaxyConfig } from 'valaxy'

// add icons what you will need
const safelist = [
  'i-ri-home-line',
]

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  theme: 'yun',

  themeConfig: {
    banner: {
      enable: true,
      title: 'MQ的小站',
    },

    // bg_image: {
    //   /**
    //    * @en Enable background image
    //    */
    //   enable: true,
    //   /**
    //    * @en Image url
    //    */
    //   url?: './styles/bg.png',
    //   /**
    //    * @en Image url when dark mode
    //    */
    //   // dark?: string,
    //   /**
    //    * @en Image opacity
    //    */
    //   opacity?: number,
    // },

    pages: [
      {
        name: '友情链接',
        url: '/links/',
        icon: 'i-tabler-link',
        color: '#9ecfff',
      },
      {
        name: '网站历史',
        url: '/building/',
        icon: 'i-lucide-laugh',
        color: '#04c0f4ff',
      },
      {
        name: '文章归档',
        url: '/archives/',
        icon: 'i-si-archive-duotone',
        color: 'dodgerblue',
      },
    ],

    footer: {
      since: 2025,
      beian: {
        enable: true,
        icp: '鲁ICP备17038157号',
      },
    },
  },

  unocss: { safelist },
})

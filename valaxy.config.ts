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

    pages: [
      {
        name: '友情链接',
        url: '/links/',
        icon: 'i-ri-genderless-line',
        color: 'dodgerblue',
      },
      {
        name: '历史&碎碎念',
        url: '/girls/',
        icon: 'i-lucide-laugh',
        color: '#545454ff',
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

import { blogPlugin } from '@vuepress/plugin-blog'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import {redirectPlugin} from "@vuepress/plugin-redirect";

export default defineUserConfig({
  locales:{
    '/':{
      lang: 'en-US',
      title: 'Linncharm\'s Blog',
      description: 'My first blog site based on VuePress',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'Linncharm的博客',
      description: '基于VuePress的第一个博客站点',
    },
  },

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',
    repo: 'https://github.com/Linncharm',
    locales:{
      '/':{
        selectLanguageName: 'English',
        selectLanguageText: 'Languages',
        repoLabel: 'GitHub',
        navbar: [
          {
            text: 'Article',
            link: '/en/article/',
          },
          {
            text: 'Category',
            link: '/en/category/',
          },
          {
            text: 'Tag',
            link: '/en/tag/',
          },
          {
            text: 'Timeline',
            link: '/en/timeline/',
          }
        ]
      },
      '/zh/':{
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        repoLabel: 'GitHub',
        navbar: [
          {
              text: '文章',
              link: '/zh/article/',
          },
          {
              text: '分类',
              link: '/zh/category/',
          },
          {
              text: '标签',
              link: '/zh/tag/',
          },
          {
              text: '时间线',
              link: '/zh/timeline/',
          },
          {
              text: '更多',
              children: [
                { text: '子菜单1', link: '/zh/submenu1/' },
                { text: '子菜单2', link: '/zh/submenu2/' },
              ],
          },
        ]

      },
    },
  }),

  plugins: [
    // redirectPlugin({
    //   autoLocale: true,
    //   defaultLocale: '/en/',
    // }),
    blogPlugin({
      // Only files under posts are articles
      filter: ({ filePathRelative }) =>
        filePathRelative ? filePathRelative.startsWith('posts/') : false,

      // Getting article info
      getInfo: ({ frontmatter, title, data }) => ({
        title,
        author: frontmatter.author || '',
        date: frontmatter.date || null,
        category: frontmatter.category || [],
        tag: frontmatter.tag || [],
        excerpt:
          // Support manually set excerpt through frontmatter
          typeof frontmatter.excerpt === 'string'
            ? frontmatter.excerpt
            : data?.excerpt || '',
      }),

      // Generate excerpt for all pages excerpt those users choose to disable
      excerptFilter: ({ frontmatter }) =>
        !frontmatter.home &&
        frontmatter.excerpt !== false &&
        typeof frontmatter.excerpt !== 'string',

      category: [
        {
          key: 'category',
          getter: (page) => page.frontmatter.category || [],
          layout: 'Category',
          itemLayout: 'Category',
          frontmatter: () => ({
            title: 'Categories',
            sidebar: false,
          }),
          itemFrontmatter: (name) => ({
            title: `Category ${name}`,
            sidebar: false,
          }),
        },
        {
          key: 'tag',
          getter: (page) => page.frontmatter.tag || [],
          layout: 'Tag',
          itemLayout: 'Tag',
          frontmatter: () => ({
            title: 'Tags',
            sidebar: false,
          }),
          itemFrontmatter: (name) => ({
            title: `Tag ${name}`,
            sidebar: false,
          }),
        },
      ],

      type: [
        {
          key: 'article',
          // Remove archive articles
          filter: (page) => !page.frontmatter.archive,
          layout: 'Article',
          frontmatter: () => ({
            title: 'Articles',
            sidebar: false,
          }),
          // Sort pages with time and sticky
          sorter: (pageA, pageB) => {
            if (pageA.frontmatter.sticky && pageB.frontmatter.sticky)
              return pageB.frontmatter.sticky - pageA.frontmatter.sticky

            if (pageA.frontmatter.sticky && !pageB.frontmatter.sticky) return -1

            if (!pageA.frontmatter.sticky && pageB.frontmatter.sticky) return 1

            if (!pageB.frontmatter.date) return 1
            if (!pageA.frontmatter.date) return -1

            return (
              new Date(pageB.frontmatter.date).getTime() -
              new Date(pageA.frontmatter.date).getTime()
            )
          },
        },
        {
          key: 'timeline',
          // Only article with date should be added to timeline
          filter: (page) => page.frontmatter.date instanceof Date,
          // Sort pages with time
          sorter: (pageA, pageB) =>
            new Date(pageB.frontmatter.date).getTime() -
            new Date(pageA.frontmatter.date).getTime(),
          layout: 'Timeline',
          frontmatter: () => ({
            title: 'Timeline',
            sidebar: false,
          }),
        },
      ],
      hotReload: true,
    }),
  ],

  bundler: viteBundler(),
})

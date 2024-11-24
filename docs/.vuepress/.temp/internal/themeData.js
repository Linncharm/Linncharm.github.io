export const themeData = JSON.parse("{\"logo\":\"https://vuejs.press/images/hero.png\",\"repo\":\"https://github.com/Linncharm\",\"locales\":{\"/\":{\"selectLanguageName\":\"English\",\"selectLanguageText\":\"Languages\",\"repoLabel\":\"GitHub\",\"navbar\":[{\"text\":\"Article\",\"link\":\"/en/article/\"},{\"text\":\"Category\",\"link\":\"/en/category/\"},{\"text\":\"Tag\",\"link\":\"/en/tag/\"},{\"text\":\"Timeline\",\"link\":\"/en/timeline/\"}]},\"/zh/\":{\"selectLanguageName\":\"简体中文\",\"selectLanguageText\":\"选择语言\",\"repoLabel\":\"GitHub\",\"navbar\":[{\"text\":\"文章\",\"link\":\"/zh/article/\"},{\"text\":\"分类\",\"link\":\"/zh/category/\"},{\"text\":\"标签\",\"link\":\"/zh/tag/\"},{\"text\":\"时间线\",\"link\":\"/zh/timeline/\"},{\"text\":\"更多\",\"children\":[{\"text\":\"子菜单1\",\"link\":\"/zh/submenu1/\"},{\"text\":\"子菜单2\",\"link\":\"/zh/submenu2/\"}]}]}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"navbar\":[],\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"heading\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}

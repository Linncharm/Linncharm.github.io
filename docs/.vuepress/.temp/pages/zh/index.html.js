import comp from "D:/vueDev/PageTest/docs/.vuepress/.temp/pages/zh/index.html.vue"
const data = JSON.parse("{\"path\":\"/zh/\",\"title\":\"Home\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"title\":\"Home\",\"heroImage\":\"https://vuejs.press/images/hero.png\",\"actions\":[{\"text\":\"进入博客\",\"link\":\"/getting-started.html\",\"type\":\"primary\"},{\"text\":\"介绍\",\"link\":\"https://vuejs.press/guide/introduction.html\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"简约至上\",\"details\":\"基于极简风格构建的博客\"},{\"title\":\"前端技术\",\"details\":\"记录每天学习的前端技术\"},{\"title\":\"坚持\",\"details\":\"熟能生巧，坚持每天学习\"}]},\"headers\":[],\"git\":{\"updatedTime\":1732461517000,\"contributors\":[{\"name\":\"Linncharm\",\"email\":\"linncharm9@gmail.com\",\"commits\":1,\"url\":\"https://github.com/Linncharm\"}]},\"filePathRelative\":\"zh/README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}

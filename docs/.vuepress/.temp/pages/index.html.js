import comp from "D:/vueDev/PageTest/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Home\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"title\":\"Home\",\"heroImage\":\"https://vuejs.press/images/hero.png\",\"actions\":[{\"text\":\"Get Started Test\",\"link\":\"/getting-started.html\",\"type\":\"primary\"},{\"text\":\"Introduction\",\"link\":\"https://vuejs.press/guide/introduction.html\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"Simplicity First\",\"details\":\"A blog built with a minimalist style\"},{\"title\":\"Frontend Technology\",\"details\":\"Documenting daily learning of frontend technologies\"},{\"title\":\"Perseverance\",\"details\":\"Practice makes perfect, keep learning every day\"}],\"footer\":\"MIT Licensed | Copyright © 2018-present VuePress Community\"},\"headers\":[],\"git\":{\"updatedTime\":1732461517000,\"contributors\":[{\"name\":\"Linncharm\",\"email\":\"linncharm9@gmail.com\",\"commits\":5,\"url\":\"https://github.com/Linncharm\"}]},\"filePathRelative\":\"README.md\"}")
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

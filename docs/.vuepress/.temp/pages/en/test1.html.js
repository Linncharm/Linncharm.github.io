import comp from "D:/vueDev/PageTest/docs/.vuepress/.temp/pages/en/test1.html.vue"
const data = JSON.parse("{\"path\":\"/en/test1.html\",\"title\":\"1111\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"test\",\"slug\":\"test\",\"link\":\"#test\",\"children\":[]}],\"git\":{\"updatedTime\":1732461517000,\"contributors\":[{\"name\":\"Linncharm\",\"email\":\"linncharm9@gmail.com\",\"commits\":2,\"url\":\"https://github.com/Linncharm\"}]},\"filePathRelative\":\"en/test1.md\",\"excerpt\":\"\\n<h2>test</h2>\\n\"}")
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

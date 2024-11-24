import comp from "D:/vueDev/PageTest/docs/.vuepress/.temp/pages/zh/test.html.vue"
const data = JSON.parse("{\"path\":\"/zh/test.html\",\"title\":\"Test\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Test\",\"slug\":\"test-1\",\"link\":\"#test-1\",\"children\":[]}],\"git\":{\"updatedTime\":1732461517000,\"contributors\":[{\"name\":\"Linncharm\",\"email\":\"linncharm9@gmail.com\",\"commits\":2,\"url\":\"https://github.com/Linncharm\"}]},\"filePathRelative\":\"zh/test.md\",\"excerpt\":\"\\n<h2>Test</h2>\\n<ul>\\n<li>test</li>\\n<li>test\\n<a href=\\\"google.com\\\">test</a></li>\\n</ul>\\n\"}")
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

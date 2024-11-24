import comp from "D:/vueDev/PageTest/docs/.vuepress/.temp/pages/test.html.vue"
const data = JSON.parse("{\"path\":\"/test.html\",\"title\":\"Test\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Test\",\"slug\":\"test-1\",\"link\":\"#test-1\",\"children\":[]}],\"git\":{\"updatedTime\":1732450610000,\"contributors\":[{\"name\":\"Linncharm\",\"email\":\"linncharm9@gmail.com\",\"commits\":1,\"url\":\"https://github.com/Linncharm\"}]},\"filePathRelative\":\"test.md\",\"excerpt\":\"\\n<h2>Test</h2>\\n<ul>\\n<li>test</li>\\n<li>test\\n<a href=\\\"google.com\\\">test</a></li>\\n</ul>\\n\"}")
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

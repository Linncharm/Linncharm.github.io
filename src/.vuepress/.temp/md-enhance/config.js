import CodeDemo from "G:/Linncharm.github.io/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.59_markdown-it@14.1.0_sass-embedded@1.81.0_vuepress@2.0.0_lpwwcvcpjxfmewdt4zt3vwfh24/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "G:/Linncharm.github.io/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.59_markdown-it@14.1.0_sass-embedded@1.81.0_vuepress@2.0.0_lpwwcvcpjxfmewdt4zt3vwfh24/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";
import "G:/Linncharm.github.io/node_modules/.pnpm/@mdit+plugin-spoiler@0.13.1_markdown-it@14.1.0/node_modules/@mdit/plugin-spoiler/spoiler.css";
import "G:/Linncharm.github.io/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.59_markdown-it@14.1.0_sass-embedded@1.81.0_vuepress@2.0.0_lpwwcvcpjxfmewdt4zt3vwfh24/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";

export default {
  enhance: ({ app }) => {
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
  },
};

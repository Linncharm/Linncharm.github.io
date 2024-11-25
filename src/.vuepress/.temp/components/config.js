import { hasGlobalComponent } from "G:/Linncharm.github.io/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.56_vuepress@2.0.0-rc.18_@vuepress+bundler-vite@2.0.0-rc.18_@types+n_nbeeump3sg46qcsiflowyhlkhq/node_modules/@vuepress/helper/lib/client/index.js";

import { useScriptTag } from "G:/Linncharm.github.io/node_modules/.pnpm/@vueuse+core@11.3.0_vue@3.5.13/node_modules/@vueuse/core/index.mjs";
import FontIcon from "G:/Linncharm.github.io/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.59_sass-embedded@1.81.0_vuepress@2.0.0-rc.18_@vuepress+bu_otcjg4cbiywabwlboom3py7gta/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import Badge from "G:/Linncharm.github.io/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.59_sass-embedded@1.81.0_vuepress@2.0.0-rc.18_@vuepress+bu_otcjg4cbiywabwlboom3py7gta/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import VPCard from "G:/Linncharm.github.io/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.59_sass-embedded@1.81.0_vuepress@2.0.0-rc.18_@vuepress+bu_otcjg4cbiywabwlboom3py7gta/node_modules/vuepress-plugin-components/lib/client/components/VPCard.js";

import "G:/Linncharm.github.io/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.59_sass-embedded@1.81.0_vuepress@2.0.0-rc.18_@vuepress+bu_otcjg4cbiywabwlboom3py7gta/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("VPCard")) app.component("VPCard", VPCard);
    
  },
  setup: () => {
    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/brands.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/solid.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/fontawesome.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

  },
  rootComponents: [

  ],
};

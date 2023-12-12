import { defaultTheme } from "vuepress";

export default {
  lang: "zh-CN",
  title: "前端规范工程化",
  description: "前端规范工程化",
  base: "/sd-fe-eng/",
  theme: defaultTheme({
    logo: "/img/logo.png",
    navbar: [
      { text: "首页", link: "/index.md" },
      {
        text: "工程规范",
        children: [
          { text: "Git 规范", link: "/eng-product/git.md" },
          { text: "文档规范", link: "/eng-product/doc.md" },
          { text: "CHANGELOG 规范", link: "/eng-product/log.md" },
        ],
      },
    ],
    sidebar: [
      { text: "首页", link: "/index.md" },
      {
        text: "工程规范",
        children: [
          {
            text: "Git 规范",
            link: "/eng-product/git.md",
          },
          {
            text: "文档规范",
            link: "/eng-product/doc.md",
          },
          {
            text: "CHANGELOG 规范",
            link: "/eng-product/log.md",
          },
        ],
      },
    ],
  }),
};

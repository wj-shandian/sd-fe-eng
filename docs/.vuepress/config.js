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
      {
        text: "编码规范",
        children: [
          { text: "CSS 规范", link: "/code/css.md" },
          { text: "HTML 规范", link: "/code/html.md" },
          { text: "JS 规范", link: "/code/js.md" },
          { text: "TS 规范", link: "/code/ts.md" },
          { text: "NODE 规范", link: "/code/node.md" },
        ],
      },
      {
        text: "NPM包",
        children: [
          { text: "sd-commitlint-config", link: "/npm/commitlint.md" },
          { text: "sd-eslint-config", link: "/npm/eslint.md" },
          { text: "sd-markdownlint-config", link: "/npm/markdownlint-config.md" },
          { text: "sd-stylelint-config", link: "/npm/stylelint-config.md" },
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
      {
        text: "编码规范",
        children: [
          { text: "CSS 规范", link: "/code/css.md" },
          { text: "HTML 规范", link: "/code/html.md" },
          { text: "JS 规范", link: "/code/js.md" },
          { text: "TS 规范", link: "/code/ts.md" },
          { text: "NODE 规范", link: "/code/node.md" },
        ],
      },
      {
        text: "NPM包",
        children: [
          { text: "sd-commitlint-config", link: "/npm/commitlint.md" },
          { text: "sd-eslint-config", link: "/npm/eslint.md" },
          { text: "sd-markdownlint-config", link: "/npm/markdownlint-config.md" },
          { text: "sd-stylelint-config", link: "/npm/stylelint-config.md" },
        ],
      },
    ],
  }),
};

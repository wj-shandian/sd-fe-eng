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
        text: "教程",
        children: [
          {
            text: "初始化文档以及action自动化部署",
            link: "/tutorials/init.md",
          },
          { text: "markdown规范工程化", link: "/tutorials/markdownlint.md" },
          { text: "style规范工程话", link: "/tutorials/style.mds" },
          { text: "commit规范工程化", link: "/tutorials/commitlint.md" },
          { text: "eslint规范工程化", link: "/tutorials/eslint.md" },
          { text: "eslint插件开发", link: "/tutorials/eslintplugin.md" },
          { text: "脚手架开发", link: "/tutorials/cli.md" },
        ],
      },
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
          { text: "sd-markdownlint-config", link: "/npm/markdownlint.md" },
          { text: "sd-stylelint-config", link: "/npm/stylelint.md" },
          { text: "eslint-plugin-sd", link: "/npm/eslintplugin.md" },
        ],
      },
      {
        title: "脚手架",
        children: [{ title: "sd-fe-lint", path: "/cli/index.md" }],
      },
    ],
    sidebar: [
      { text: "首页", link: "/index.md" },
      {
        text: "教程",
        children: [
          { text: "初始化文档以及action自动化部署", link: "/tutorials/init.md" },
          { text: "markdown规范工程化", link: "/tutorials/markdownlint.md" },
          { text: "style规范工程话", link: "/tutorials/style.mds" },
          { text: "commit规范工程化", link: "/tutorials/commitlint.md" },
          { text: "eslint规范工程化", link: "/tutorials/eslint.md" },
          { text: "eslint插件开发", link: "/tutorials/eslintplugin.md" },
          { text: "脚手架开发", link: "/tutorials/cli.md" },
        ],
      },
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
          { text: "sd-markdownlint-config", link: "/npm/markdownlint.md" },
          { text: "sd-stylelint-config", link: "/npm/stylelint.md" },
          { text: "eslint-plugin-sd", link: "/npm/eslintplugin.md" },
        ],
      },
      {
        title: "脚手架",
        children: [{ title: "sd-fe-lint", path: "/cli/index.md" }],
      },
    ],
  }),
};

---
home: true
heroText:
actionText: 立刻进入 →
actionLink: /coding/html.md

features:
  - title: 全面的前端生态
    details: 支持前端全部生态，无需关注环境，支持直接使用
  - title: 完善的规范配件
    details: 支持对全部前端配置实现一键接入、一键扫描、一键修复、一键升级
  - title: 完整的测试用例
    details: 配套完整的测试用例，帮助您提升项目健壮性
---

## :star: 设计目的

统一的规范可以让项目代码看起来更加优雅。写起来更加美观。规则的约束可以减少一些低级问题的产出。提高工作效率

## :couch_and_lamp: 配套工具

我们引入了多个业界流行的 `Linter` 作为规范文档的配套工具，并根据规范内容定制了对应的规则包，它们包括：

| 规范                                                              | Lint 工具                                                      | npm 包                                                                         |
| ----------------------------------------------------------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| JavaScript 编码规范 <br/> TypeScript 编码规范 <br/> Node 编码规范 | [ESLint](https://eslint.org/)                                  | [eslint-config-sd](https://www.npmjs.com/package/eslint-config-sd)             |
| CSS 编码规范                                                      | [stylelint](https://stylelint.io/)                             | [sd-stylelint-config](https://www.npmjs.com/package/sd-stylelint-config)       |
| Git 规范                                                          | [commitlint](https://commitlint.js.org/#/)                     | [sd-commitlint-config](https://www.npmjs.com/package/sd-commitlint-config)     |
| 文档规范                                                          | [markdownlint](https://github.com/DavidAnson/markdownlint)     | [sd-markdownlint-config](https://www.npmjs.com/package/sd-markdownlint-config) |
| Eslint 插件                                                       | [ESlint Plugin](https://eslint.org/docs/latest/extend/plugins) | [eslint-plugin-sd](https://www.npmjs.com/package/eslint-plugin-sd)             |

[sd-fe-lint](https://www.npmjs.com/package/sd-fe-lint) 收敛屏蔽了上述依赖和配置细节，提供简单的 `CLI` 和 `Node.js API`，让项目能够一键接入、一键扫描、一键修复、一键升级，并为项目配置 git commit 卡口，降低项目接入规范的成本。

您可以使用[sd-fe-lint](https://www.npmjs.com/package/sd-fe-lint) 创建基本的项目工程或者为项目接入全部规范。

## :email: 联系

- **GitHub**: <https://github.com/wj-shandian/sd-fe-eng>

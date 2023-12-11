```js
    "preinstall": "npx only-allow pnpm", //  指定pnpm包管理工具
    "prepare":"husky install", // 发布代码前进行检查
    "init": "pnpm install", // 使用pnpm 进行安装
    "clean": "lerna clean && rm -rf node_modules",// 清除node_modules
    "test": "lerna run test", // 对子包进行test 如果子包里面 script 有test命令才会执行 没有则不会执行
    "docs:dev": "vuepress dev docs", // vuepress 本地服务启动
    "docs:build": "vuepress build docs",// vuepress 打包
    "deploy": "bash deploy.sh", //  vuepress 发布
    "publish": "lerna publish", // 发布 npm包
    "lint": "markdownlint README.md", // 对文档进行检测
    "changelog": "conventional-changelog -p angular -i CHANGELOG.md -s"
```

learn create markdownlint-config

然后在packages下生成一个文件夹

添加 index.json文件

添加对应规则

在根目录下 新增一个文件 .markdownlint.json 并且在根目录下 安装markdownlint-cli (用来检测文档格式)

在 .markdownlint.json 文件中 添加 继承 自己写的规则

运行 pnpm run lint 检测md文件 然后可以根据自己项目 或者公司项目制定一套属于自己的规范


learn create commitlint-config
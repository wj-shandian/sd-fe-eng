# sd-markdownlint-config

支持配套的 [stylelint 可共享配置](https://stylelint.io/user-guide/configure)。

## 安装

需要先行安装 [stylelint](https://www.npmjs.com/package/stylelint) 和 [stylelint-SCSS](https://www.npmjs.com/package/stylelint-scss)：

```bash
npm install sd-stylelint-config stylelint stylelint-scss --save-dev
```

## 使用

在 `.stylelintrc` 中继承本包:

```json
{
  "extends": "sd-stylelint-config"
}
```

配置package.JSON命令 `"style": "stylelint \"/src/**/*.(scss|css)\" --fix"`

检测目录可以根据自己的需要修改

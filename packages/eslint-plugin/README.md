# eslint-plugin-sd

## 安装

除了本包，你需要同时安装 [ESlint](https://eslint.org/)

```shell
npm install eslint-plugin-sd eslint --save-dev
```

## 使用

### 引入插件

```js
// .eslintrc.js
module.exports = {
  plugin: ['eslint-config-sd'],
  rules: {
    'eslint-plugin-sd/no-http-url': 'warn',
  },
};
```

### 使用 presets

```js
// .eslintrc.js
module.exports = {
  extends: 'plugin:eslint-plugin-encode/recommended',
};
```

## 支持的规则

- [`no-broad-semantic-versioning`](https://encode-studio-fe.github.io/fe-spec/plugin/no-broad-semantic-versioning.html) 不要指定宽泛的版本范围
- [`no-http-url`](https://encode-studio-fe.github.io/fe-spec/plugin/no-http-url.html) 使用 HTTPS 协议头的 URL，而不是 HTTP


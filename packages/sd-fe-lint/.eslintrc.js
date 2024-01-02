module.exports = {
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module', // 允许使用import
  },
  extends: ['eslint-config-encode/typescript/node', 'prettier'],
  rules: {
    '@typescript-eslint/no-require-imports': 0,
    'no-console': 0,
  },
};

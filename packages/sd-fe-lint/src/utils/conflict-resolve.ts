import path from 'path';
import fs from 'fs-extra';
import glob from 'glob';
import inquirer from 'inquirer';
import log from './log';
import { PKG_NAME } from './constants';
import { PKG } from '../types';

// 精确移除依赖
const packageNamesToRemove = [
  '@babel/eslint-parser',
  '@commitlint/cli',
  '@iceworks/spec',
  'babel-eslint',
  'eslint',
  'husky',
  'markdownlint',
  'prettier',
  'stylelint',
  'tslint',
];

// 按前缀移除依赖
const packagePrefixesToRemove = [
  '@commitlint/',
  '@typescript-eslint/',
  'eslint-',
  'stylelint-',
  'markdownlint-',
  'commitlint-',
];
/**删除无用配置 */
const checkUselessConfig = (cwd: string) => {
  // 读取配置的文件的绝对路径并收集
  return []
    .concat(glob.sync('.eslintrc?(.@(yaml|yml|json))', { cwd }))
    .concat(glob.sync('.stylelintrc?(.@(yaml|yml|json))', { cwd }))
    .concat(glob.sync('.markdownlint@(rc|.@(yaml|yml|jsonc))', { cwd }))
    .concat(
      glob.sync('.prettierrc?(.@(cjs|config.js|config.cjs|yaml|yml|json|json5|toml))', { cwd }),
    )
    .concat(glob.sync('tslint.@(yaml|yml|json)', { cwd }))
    .concat(glob.sync('.kylerc?(.@(yaml|yml|json))', { cwd }));
};

/**待重写的配置 */
const checkReWriteConfig = (cwd: string) => {
  // 首先读取config下的ejs模版文件 然后用正则把_替换成 . 然后再把 .ejs 替换为空  fs.existsSync 判断文件是否存在 然后返回处理过的文件路径集合
  return glob
    .sync('**/*.ejs', { cwd: path.resolve(__dirname, '../config') })
    .map((name) => name.replace(/^_/, '.').replace(/\.ejs$/, ''))
    .filter((filename) => fs.existsSync(path.resolve(cwd, filename)));
};
export default async (cwd: string, rewriteConfig?: boolean) => {
  // 获取当前目录下的 package.json 绝对路径
  const pkgPath = path.resolve(cwd, 'package.json');
  // 读取文件内容
  const pkg: PKG = fs.readJSONSync(pkgPath);
  // 获取依赖列表
  const dependencies = [].concat(
    Object.keys(pkg.dependencies || {}),
    Object.keys(pkg.devDependencies || []),
  );
  // 过滤出需要删除的配置
  const willRemovePackage = dependencies.filter(
    (name) =>
      packageNamesToRemove.includes(name) ||
      packagePrefixesToRemove.some((prefix) => name.startsWith(prefix)),
  );

  const uselessConfig = checkUselessConfig(cwd);
  const reWriteConfig = checkReWriteConfig(cwd);

  const willChangeCount = willRemovePackage.length + uselessConfig.length + reWriteConfig.length;
  // 提示是否移除原配置
  if (willChangeCount > 0) {
    log.warn(`检测到项目中存在可能与 ${PKG_NAME} 冲突的依赖和配置，为保证正常运行将`);

    if (willRemovePackage.length > 0) {
      log.warn('删除以下依赖：');
      log.warn(JSON.stringify(willRemovePackage, null, 2));
    }

    if (uselessConfig.length > 0) {
      log.warn('删除以下配置文件：');
      log.warn(JSON.stringify(uselessConfig, null, 2));
    }

    if (reWriteConfig.length > 0) {
      log.warn('覆盖以下配置文件：');
      log.warn(JSON.stringify(reWriteConfig, null, 2));
    }

    if (typeof rewriteConfig === 'undefined') {
      const { isOverWrite } = await inquirer.prompt({
        type: 'confirm',
        name: 'isOverWrite',
        message: '请确认是否继续：',
      });

      if (!isOverWrite) process.exit(0); // 终止nodejs 当前进程并推出
    } else if (!reWriteConfig) {
      process.exit(0);
    }
    // 删除配置文件
    for (const name of uselessConfig) {
      fs.removeSync(path.resolve(cwd, name));
    }
    // 修正 package.json
    delete pkg.eslintConfig;
    delete pkg.eslintIgnore;
    delete pkg.stylelint;
    for (const name of willRemovePackage) {
      delete (pkg.dependencies || {})[name];
      delete (pkg.devDependencies || {})[name];
    }
    // 写入新的 package.json
    fs.writeFileSync(path.resolve(cwd, 'package.json'), JSON.stringify(pkg, null, 2), 'utf8');
  }
  return pkg;
};

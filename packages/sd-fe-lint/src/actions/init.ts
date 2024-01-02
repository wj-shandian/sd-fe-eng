import path from 'path';
import fs from 'fs-extra';
import update from './update';
import { InitOptions, PKG } from '.././types';
export default async function (options: InitOptions) {
  // 获取路径
  const cwd = options.cwd || process.cwd();
  const isTest = process.env.NODE_ENV === 'test';
  // 获取是否需要更新版本
  const checkVersionUpdate = options.checkVersionUpdate || false;
  // 获取是否需要npm下单包
  const disableNpmInstall = options.disableNpmInstall || false;

  const config: Record<string, any> = {};
  const pkgPath = path.resolve(cwd, 'package.json');
  let pkg: PKG = fs.readJSONSync(pkgPath);

  // 版本检查
  if (!isTest && checkVersionUpdate) {
    await update(false);
  }
}

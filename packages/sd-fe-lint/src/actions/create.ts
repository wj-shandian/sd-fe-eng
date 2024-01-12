import fs from 'fs-extra';
import path from 'path';
import { execSync } from 'child_process';
import init from './init';
import log from '../utils/log';

export default async function (options) {
  const { name, cwd } = options;
  const fullPath = path.join(cwd, name);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath);
    await execSync(`npm init`, { cwd: fullPath, stdio: 'inherit' });
    init({ cwd: fullPath, checkVersionUpdate: false });
  } else {
    log.error(`${name} 文件名称重复，请重新创建`);
    process.exit(0); // 终止nodejs 当前进程并退出
  }
}

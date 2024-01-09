import ora from 'ora';
import { execSync } from 'child_process';
import log from '../utils/log';
import npmType from '../utils/npm-type';
import { PKG_NAME, PKG_VERSION } from '../utils/constants'; // PKG_VERSION 获取当前package的版本号

/** 检查版本号 */

const checkVersion = async () => {
  const npm = await npmType;
  const latestVersion = await execSync(`${npm} view ${PKG_NAME} version`).toString('utf-8').trim(); // 这个的意思是 执行 npm view node version 然后会返回当前最新版本号  这里的node只是举个例子
  if (latestVersion === PKG_VERSION) return null;

  const compareArr = PKG_VERSION.split('.').map(Number);
  const beComparedArr = latestVersion.split('.').map(Number);

  // 依次比较版本号大小
  for (let i = 0; i < compareArr.length; i++) {
    if (compareArr[i] > beComparedArr[i]) {
      return null;
    } else if (compareArr[i] < beComparedArr[i]) {
      return latestVersion;
    }
  }
};

/*
 * 检查版本并自动升级
 */
export default async (install = true) => {
  // ora 作用是用于node的控制台进度美化 这里只是展示作用 没啥实际意义
  const checking = ora(`Checking ${PKG_NAME} version...`);
  checking.start();
  // 关键逻辑在这里
  try {
    const npm = await npmType;
    const latestVersion = await checkVersion();
    checking.stop();

    // 升级版本
    if (latestVersion && install) {
      const update = ora(`Updating ${PKG_NAME} to version ${latestVersion}...`);
      update.start();
      execSync(`${npm} i -g ${PKG_NAME}`);
      update.stop();
    } else if (latestVersion) {
      // 提示但是不下载 最新版本为 ${latestVersion}，本地版本为 ${PKG_VERSION}，请尽快升级到最新版本。\n你可以执行 ${npm} install -g ${PKG_NAME}@latest 来安装此版本
      log.warn(
        `The latest version is ${latestVersion} and the local version is ${PKG_VERSION} please upgrade to the latest version as soon as possible. \n You can run  ${npm} install -g ${PKG_NAME}@latest  to install this version\n`,
      );
    } else {
      // 当前没有可用的更新
      log.info(`There are currently no updates available`);
    }
  } catch (error) {
    checking.stop();
    log.error(error);
  }
};
